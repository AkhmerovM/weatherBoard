import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { TCity, TCityResponse } from './types';
import { HttpService } from '@nestjs/axios';
import { cities } from './constants';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService implements OnApplicationBootstrap {
	constructor(
		@Inject(CACHE_MANAGER) private cacheManager: Cache,
		private readonly httpService: HttpService,
		private readonly config: ConfigService,
	) {}
	onApplicationBootstrap(): void {
		setInterval(() => {
			this.loadCities();
		}, 60000);
	}
	async getCities(cityIds: number[]): Promise<TCityResponse> {
		const cities: TCity[] = [];

		const promises = cityIds.map(async (cityId) => {
			const city: TCity = await this.cacheManager.get(String(cityId));
			if (city) {
				cities.push(city);
			} else {
				throw new Error('город с id = ' + cityId + ' не найден');
			}
		});
		await Promise.all(promises).catch((e) => {
			throw new Error(e);
		});

		return {
			cities,
			requestTime: new Date().getTime(),
		};
	}
	async loadCities() {
		const apiKey = this.config.get('WEATHER_API_KEY');
		const allIds = cities.map((city) => city.id);
		const promises = allIds.map(async (cityId) => {
			const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&id=${cityId}&appid=${apiKey}`;
			const observable = await this.httpService.get(url);

			observable.subscribe((axiosResponse) => {
				this.cacheManager.set(String(cityId), axiosResponse.data);
			});
		});

		await Promise.all(promises)
			.then(() => {
				console.log('finish requests', new Date());
			})
			.catch((e) => {
				throw new Error(e);
			});
	}
}
