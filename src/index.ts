// @ts-check

export declare interface UTCTimeOffset {
  hour?: number;
  minute?: number;
  second?: number;
  millisecond?: number;
}
export declare interface UTCTimeOpts {
  startDatetime?: string | number | Date;
  offset?: UTCTimeOffset;
}

function isValidDatetime(datetime: any) {
  return !/^invalid date/i.test(`${new Date(datetime)}`);
}

function isNotANumber(value: any) {
  return value != null && Number.isNaN(+value);
}

export function utcTimeSync({
  startDatetime,
  offset,
}: UTCTimeOpts = {} as UTCTimeOpts) {
  const isNullishDatetime = startDatetime == null;

  if (!isNullishDatetime && !isValidDatetime(startDatetime)) {
    throw new TypeError('Param opts[startDatetime] is not a valid datetime');
  }

  const {
    hour = 0,
    minute = 0,
    second = 0,
    millisecond = 0,
  } = offset || {} as UTCTimeOffset;

  if (isNotANumber(hour)) {
    throw new TypeError('Param opts[offset][hour] is not a number');
  }

  if (isNotANumber(minute)) {
    throw new TypeError('Param opts[offset][minute] is not a number');
  }

  if (isNotANumber(second)) {
    throw new TypeError('Param opts[offset][second] is not a number');
  }

  if (isNotANumber(millisecond)) {
    throw new TypeError('Param opts[offset][millisecond] is not a number');
  }

  const newDatetime = isNullishDatetime
    ? new Date()
    : new Date(startDatetime as string);

  return new Date(Date.UTC(
    newDatetime.getUTCFullYear(),
    newDatetime.getUTCMonth(),
    newDatetime.getUTCDate(),
    newDatetime.getUTCHours() + hour,
    newDatetime.getUTCMinutes() + minute,
    newDatetime.getUTCSeconds() + second,
    newDatetime.getUTCMilliseconds() + millisecond
  ));
}

export async function utcTime(opts?: UTCTimeOpts) {
  return utcTimeSync(opts);
}

export default utcTime;
