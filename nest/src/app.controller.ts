import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TCityRequest, TCityResponse } from './types';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@HttpCode(200)
	@Post('/cities')
	async getCities(@Body() data: TCityRequest): Promise<TCityResponse> {
		return this.appService.getCities(data.cityIds);
	}
}
