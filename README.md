<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@motss/utc-time</h1>

  <p>Generate JavaScript's UTC time with various offsets</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![NSP Status][nsp-badge]][nsp-url]

[![Code of Conduct][coc-badge]][coc-url]
[![Codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat-badge]][codebeat-url]
[![codacy-badge]][codacy-url]
[![inch-badge]][inch-url]

> Returns a JavaScript date object using the UTC timezone with optional offsets to adjust the `hour`, `minute`, `second` or `millisecond`.

## Table of contents

  - [Pre-requisites](#pre-requisites)
  - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
      - [Node.js](#nodejs)
      - [Native ES modules or TypeScript](#native-es-modules-or-typescript)
  - [API Reference](#api-reference)
    - [UTCTimeOpts](#utctimeopts)
    - [utcTime([UTCTimeOps])](#utctimeutctimeops)
    - [utcTimeSync([UTCTimeOpts])](#utctimesyncutctimeopts)
  - [License](#license)
  
## Pre-requisites

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## Setup

### Install

```sh
# Install via NPM
$ npm install --save @motss/utc-time
```

### Usage

#### Node.js

```js
const {
  utcTime,
  // utcTimeSync,
} = require('@motss/utc-time');

void async function main() {
  /** NOTE: Assuming today's date is '2020-02-02', */
  const defaultUTCDatetime = await utcTime(); // utcTimeSync();
  const defaultUTCDatetimeWithOffsets = await utcTime({
    offset: {
      hour: 3,
      minute: 2,
      second: 1,
      millisecond: 0,
    },
  });
  const specifiedUTCDatetime = await utcTime({
    startDatetime: '2033-03-03T03:33:33.333Z',
  });
  
  assert(defaultUTCDatetime, new Date('2020-02-02T00:00:00.000Z')); // OK
  assert(defaultUTCDatetimeWithOffsets, new Date('2020-02-02T03:02:01.000Z')); // OK
  assert(specifiedUTCDatetime, new Date('2033-03-03T03:33:33.333Z')); // OK
}();
```

#### Native ES modules or TypeScript

```ts
// @ts-check

import {
  utcTime,
  // utcTimeSync,
} from '@motss/utc-time';

void async function main() {
  /** NOTE: Assuming today's date is '2020-02-02', */
  const defaultUTCDatetime = await utcTime(); // utcTimeSync();
  const defaultUTCDatetimeWithOffsets = await utcTime({
    offset: {
      hour: 3,
      minute: 2,
      second: 1,
      millisecond: 0,
    },
  });
  const specifiedUTCDatetime = await utcTime({
    startDatetime: '2033-03-03T03:33:33.333Z',
  });
  
  assert(defaultUTCDatetime, new Date('2020-02-02T00:00:00.000Z')); // OK
  assert(defaultUTCDatetimeWithOffsets, new Date('2020-02-02T03:02:01.000Z')); // OK
  assert(specifiedUTCDatetime, new Date('2033-03-03T03:33:33.333Z')); // OK
}();
```

## API Reference

### UTCTimeOpts

- `offsets` <[Object][object-mdn-url]> Optional offset values when returning a [JavaScript Date object][date-mdn-url] using [UTC][utc-url] timezone.
  - `hour` <[number][number-mdn-url]> Optional offset to adjust the `hour`.
  - `minute` <[number][number-mdn-url]> Optional offset to adjust the `minute`.
  - `second` <[number][number-mdn-url]> Optional offset to adjust the `second`.
  - `millisecond` <[number][number-mdn-url]> Optional offset to adjust the `millisecond`.
- `startDatetime` <[string][string-mdn-url]|[number][number-mdn-url]|[Date][date-mdn-url]> Optional starting datetime. _Defaults to today's datetime if it is not provided._

___

### utcTime([UTCTimeOps])

  - `UTCTimeOpts` <[UTCTimeOpts][utctimeopts-url]> Optional configuration when returning a [JavaScript Date object][date-mdn-url] using [UTC][utc-url] timezone.
  - returns: <[Promise][promise-mdn-url]&lt;[string][string-mdn-url]&gt;> Promise which resolves with a [JavaScript Date object][date-mdn-url] using [UTC][utc-url] timezone.

### utcTimeSync([UTCTimeOpts])

This methods works the same as `utcTime([UTCTimeOpts])` except that this is the synchronous version.

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng



[typescript-url]: https://github.com/Microsoft/TypeScript
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[utc-url]: https://en.wikipedia.org/wiki/Coordinated_Universal_Time

[utctimeopts-url]: #utctimeopts

[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[date-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


[nodei-badge]: https://nodei.co/npm/@motss/utc-time.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/motss/utc-time.svg?style=flat-square

[version-badge]: https://img.shields.io/npm/v/@motss/utc-time.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/@motss/utc-time.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/99ff02f7-7794-49ad-a542-3f994dc53d1b/badge?style=flat-square
[daviddm-badge]: https://img.shields.io/david/motss/utc-time.svg?style=flat-square

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[codecov-badge]: https://codecov.io/gh/motss/utc-time/branch/master/graph/badge.svg?style=flat-square
[coveralls-badge]: https://coveralls.io/repos/github/motss/utc-time/badge.svg?branch=master&style=flat-square

[codebeat-badge]: https://codebeat.co/badges/059cfaf2-d258-4529-9b16-39aba704ef33?style=flat-square
[codacy-badge]: https://api.codacy.com/project/badge/Grade/66d7c17a0eb54194a31cf76ce12d4bf7?style=flat-square
[inch-badge]: http://inch-ci.org/github/motss/utc-time.svg?branch=master&style=flat-square



[nodei-url]: https://nodei.co/npm/utc-time

[travis-url]: https://travis-ci.org/motss/utc-time
[version-url]: https://npmjs.org/package/@motss/utc-time
[downloads-url]: http://www.npmtrends.com/@motss/utc-time
[mit-license-url]: https://github.com/motss/utc-time/blob/master/LICENSE
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/99ff02f7-7794-49ad-a542-3f994dc53d1b
[daviddm-url]: https://david-dm.org/motss/utc-time

[coc-url]: https://github.com/motss/utc-time/blob/master/CODE_OF_CONDUCT.md
[codecov-url]: https://codecov.io/gh/motss/utc-time
[coveralls-url]: https://coveralls.io/github/motss/utc-time?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-utc-time-master
[codacy-url]: https://www.codacy.com/app/motss/utc-time?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/utc-time&amp;utm_campaign=Badge_Grade
[inch-url]: http://inch-ci.org/github/motss/utc-time
