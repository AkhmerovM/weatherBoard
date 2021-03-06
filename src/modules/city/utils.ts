import moment from 'moment';
import { CITY_IMAGE_URL_MAP } from '@/modules/city/constants';
import { CITIES } from '@/modules/city/types';

export function getTimeZoneTime (currentTime: number, timeZone: number): string {
    return moment(currentTime).utcOffset(timeZone / 60).format('HH:mm');
}
export function getCityImgUrl (name: CITIES): string {
    if (CITY_IMAGE_URL_MAP[name]) {
        return CITY_IMAGE_URL_MAP[name];
    } else {
        return CITY_IMAGE_URL_MAP.default;
    }
}
