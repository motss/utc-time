// @ts-check

/** Import other modules */
import {
  utcTime,
  utcTimeSync,
} from '../';

/** Setting up */
const msReplacer = (expected: Date, datetime: Date) => {
  const msFromExpected = expected.toJSON().replace(/^.+T\d{2}\:\d{2}\:\d{2}\.(\d+)Z/i, '$1');

  return new Date(
    datetime
      .toJSON()
      .replace(
        /^(.+T\d{2}\:\d{2}\:\d{2})\.\d+Z/i,
        (_, s) => {
          return `${s}.${msFromExpected}Z`;
        }
      )
  );
};

describe('utc-time', () => {
  test('utcTimeSync works w/o any params', () => {
    const d = utcTimeSync();

    expect(d instanceof Date).toBe(true);
    expect(d.toJSON()).toMatch(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z/i);
  });

  test('startDatetime is null', () => {
    const d = utcTimeSync({
      startDatetime: null,
    });

    expect(d instanceof Date).toBe(true);
    expect(d.toJSON()).toMatch(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z/i);
  });

  test('offset is null', () => {
    const d = utcTimeSync({
      offset: null,
    });

    expect(d instanceof Date).toBe(true);
    expect(d.toJSON()).toMatch(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z/i);
  });

  test('opts[offset] is empty object', () => {
    const d = utcTimeSync({
      offset: {},
    });

    expect(d instanceof Date).toBe(true);
    expect(d.toJSON()).toMatch(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z/i);
  });

  test('^opts[startDatetime] is invalid date', () => {
    expect(() => {
      utcTimeSync({
        startDatetime: 'invalid-date',
      });
    }).toThrowError('Param opts[startDatetime] is not a valid datetime');
  });

  test('^opts[offset][hour] is not a number', () => {
    expect(() => utcTimeSync({
      offset: {
        hour: NaN,
      },
    })).toThrowError('Param opts[offset][hour] is not a number');
  });

  test('^opts[offset][minute] is not a number', () => {
    expect(() => utcTimeSync({
      offset: {
        minute: NaN,
      },
    })).toThrowError('Param opts[offset][minute] is not a number');
  });

  test('^opts[offset][second] is not a number', () => {
    expect(() => utcTimeSync({
      offset: {
        second: NaN,
      },
    })).toThrowError('Param opts[offset][second] is not a number');
  });

  test('^opts[offset][millisecond] is not a number', () => {
    expect(() => utcTimeSync({
      offset: {
        millisecond: NaN,
      },
    })).toThrowError('Param opts[offset][millisecond] is not a number');
  });

  test('opts[startDatetime] is specified', () => {
    const datetime = '2018-03-03T03:03:03.030Z';
    const d = utcTimeSync({
      startDatetime: datetime,
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(new Date(datetime));
  });

  test('opts[startDatetime] is specified with offset', () => {
    const datetime = '2018-03-03T03:03:03.030Z';
    const d = utcTimeSync({
      startDatetime: datetime,
      offset: {
        hour: 3,
        minute: -3,
        second: 3,
        millisecond: -3,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(new Date('2018-03-03T06:00:06.027Z'));
  });

  test('opts[offset][hour] is positive', () => {
    const now = new Date();
    const hour = 3;
    const d = utcTimeSync({
      offset: {
        hour,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours() + hour,
        now.getUTCMinutes(),
        now.getUTCSeconds()
      )))
    );
  });

  test('opts[offset][hour] is negative', () => {
    const now = new Date();
    const hour = -13;
    const d = utcTimeSync({
      offset: {
        hour,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours() + hour,
        now.getUTCMinutes(),
        now.getUTCSeconds()
      )))
    );
  });

  test('opts[offset][minute] is positive', () => {
    const now = new Date();
    const minute = 3;
    const d = utcTimeSync({
      offset: {
        minute,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes() + minute,
        now.getUTCSeconds()
      )))
    );
  });

  test('opts[offset][minute] is negative', () => {
    const now = new Date();
    const minute = -13;
    const d = utcTimeSync({
      offset: {
        minute,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes() + minute,
        now.getUTCSeconds()
      )))
    );
  });

  test('opts[offset][second] is positive', () => {
    const now = new Date();
    const second = 3;
    const d = utcTimeSync({
      offset: {
        second,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds() + second
      )))
    );
  });

  test('opts[offset][second] is negative', () => {
    const now = new Date();
    const second = -13;
    const d = utcTimeSync({
      offset: {
        second,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds() + second
      )))
    );
  });

  test('opts[offset][millisecond] is positive', () => {
    const now = new Date();
    const millisecond = 3;
    const d = utcTimeSync({
      offset: {
        millisecond,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds() + millisecond,
      )))
    );
  });

  test('opts[offset][millisecond] is negative', () => {
    const now = new Date();
    const millisecond = -13;
    const d = utcTimeSync({
      offset: {
        millisecond,
      },
    });

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(
      msReplacer(d, new Date(Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds() + millisecond
      )))
    );
  });

  test('utcTime works', async () => {
    try {
      const d = await utcTime();

      expect(d instanceof Date).toBe(true);
      expect(d.toJSON()).toMatch(/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}\.\d{3}Z/i);
    } catch (e) {
      throw e;
    }
  });

});
