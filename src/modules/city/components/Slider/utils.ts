import { WEATHER_ICONS } from '@/modules/city/types';

export function getWeatherIconsStyleClasses (weatherIcon: keyof typeof WEATHER_ICONS): string {
    let classes = 'weatherIcon ';

    if (WEATHER_ICONS[weatherIcon]) {
        classes += `weatherIcon${weatherIcon}`;
    }
    return classes;
}
