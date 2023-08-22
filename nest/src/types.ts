export type TCity = {
	coord: {
		lon: number;
		lat: number;
	};
	visibility: number;
	dt: number;
	sys: {
		type?: number;
		id?: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	base: string;
	timezone: number;
	id: number;
	name: keyof typeof CITY_NAME;
	cod: number;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
		sea_level?: number;
		grnd_level?: number;
	};
	wind: {
		speed: number;
		deg: number;
		gust?: number;
	};
	clouds: {
		all: number;
	};
	rain?: {
		'1h': number;
	};
	weather: [
		{
			id: number;
			main: keyof typeof WEATHER_NAME;
			description: string;
			icon: keyof typeof WEATHER_ICONS;
		},
	];
};

export enum CITY_NAME {
	Novokuznetsk = 'Novokuznetsk',
	Moscow = 'Moscow',
	'Kazan’' = 'Kazan',
	Vladikavkaz = 'Vladikavkaz',
	Tumen = 'Tumen',
	'Saint Petersburg' = 'Saint-petersburg',
	'Tomsk' = 'Tomsk',
	'Berlin' = 'Berlin',
	'Prague' = 'Prague',
	'Helsinki' = 'Helsinki',
	'Lisbon' = 'Lisbon',
	'Sydney' = 'Sydney',
	'Almaty' = 'Helsinki',
	'Buenos Aires' = 'Buenos Aires',
	'Colombo' = 'Colombo',
}

export enum WEATHER_ICONS {
	'01d' = '01d',
	'02d' = '02d',
	'03d' = '03d',
	'04d' = '04d',
	'09d' = '09d',
	'10d' = '10d',
	'11d' = '11d',
	'13d' = '13d',
	'50d' = '50d',
	'01n' = '01n',
	'02n' = '02n',
	'03n' = '03n',
	'04n' = '04n',
	'09n' = '09n',
	'10n' = '10n',
	'11n' = '11n',
	'13n' = '13n',
	'50n' = '50n',
}
export enum WEATHER_NAME {
	Clouds = 'Clouds',
	Rain = 'Rain',
	Clear = 'Clear',
	Snow = 'Snow',
}

export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type CITY_DRAWER = {
	id: PropType<TCity, 'id'>;
	name: keyof typeof CITY_NAME;
};

export type TCityResponse = {
	cities: TCity[];
	requestTime: number;
};
export type TCityRequest = {
	cityIds: number[];
};
