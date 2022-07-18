import moment from 'moment';

export function getTimeZoneTime (currentTime: number, timeZone: number): string {
    return moment(currentTime).utcOffset(timeZone / 60).format('HH:mm');
}
