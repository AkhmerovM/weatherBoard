import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import type { RedisClientOptions } from 'redis';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { HttpModule } from '@nestjs/axios';
import { redisStore } from 'cache-manager-redis-yet';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		CacheModule.registerAsync<RedisClientOptions>({
			imports: [ConfigModule.forRoot()],
			useFactory: async (config: ConfigService) => ({
				store: await redisStore({
					url: config.get<string>('REDIS_URL'),
				}),
				ttl: 5000,
			}),
			inject: [ConfigService],
		}),
		HttpModule,
	],
	controllers: [AppController],
	providers: [AppService, ConfigService],
})
export class AppModule {}
