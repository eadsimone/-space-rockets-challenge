import { timeZones } from "./timezones";

export function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(timestamp));
}

export function formatDateTime(timestamp, timeZone = undefined ) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
    timeZone
  }).format(new Date(timestamp));
}

/**
 * Given a timezone calculate the offset and search in timezone array the name for that timezone
 * @param {String} timezone
 * @return {String} timeZoneName
 */
export const getTimeZoneName = (timezone)=> {
  const isPositive = (timezone.includes("+"));
  const timeZoneNumber = (isPositive)?timezone.split("+"):timezone.split("-");
  const createTZNumber = (isPositive)?`+${timeZoneNumber[timeZoneNumber.length-1]}`:`-${timeZoneNumber[timeZoneNumber.length-1]}`
  const timeZoneName = timeZones.find((e)=>  {
    return e.UTC_offset === createTZNumber}
  )
  return (timeZoneName)?timeZoneName.TZ_database_name : null;
}
