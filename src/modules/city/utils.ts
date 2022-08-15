import moment from 'moment';
import { CITY_IMAGE_URL_MAP } from '@/modules/city/constants';
import { CITIES } from '@/modules/city/types';
import { CSSProperties } from 'react';

export function getTimeZoneTime (currentTime: number, timeZone: number): string {
    return moment(currentTime).utcOffset(timeZone / 60).format('HH:mm');
}
function getCityImgUrl (name: CITIES): string {
    if (CITY_IMAGE_URL_MAP[name]) {
        return CITY_IMAGE_URL_MAP[name];
    } else {
        return CITY_IMAGE_URL_MAP.default;
    }
}

export function getCityBgStyle (name: CITIES): CSSProperties {
    const imgUrl = getCityImgUrl(name);
    return {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        flexGrow: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    };
}
