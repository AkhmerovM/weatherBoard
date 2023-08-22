import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { TCityResponse } from './types';
import { HttpService } from '@nestjs/axios';
import { cities } from './constants';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
	constructor(
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
		private readonly httpService: HttpService,
		private readonly config: ConfigService,
	) {
		this.loadCities();
	}
	async getCities(cityIds: number[]): Promise<TCityResponse> {
		const cities = [];

		const promises = cityIds.map(async (cityId) => {
			const city = await this.cacheManager.get(String(cityId));
			if (city) {
				cities.push(city);
			} else {
				throw new Error('город с id = ' + cityId + ' не найден');
			}
		});
		await Promise.all(promises).catch(() => {
			throw new Error('error');
		});

		return {
			cities,
			requestTime: new Date().getTime(),
		};
	}
	async loadCities() {
		const apiKey = this.config.get('WEATHER_API_KEY');
		const allIds = cities.map((city) => city.id);

		allIds.map(async (cityId) => {
			const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${cityId}&appid=${apiKey}`;
			const observable = await this.httpService.get(url);

			observable.subscribe((axiosResponse) => {
				this.cacheManager.set(String(cityId), axiosResponse.data);
			});
		});
	}
}
