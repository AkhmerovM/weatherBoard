import moment from 'moment';

export function getTimeZoneTime (timeZone: number): string {
    return moment().utcOffset(timeZone / 60).format('HH:mm');
}
