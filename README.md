# L2QR SDK for JavaScript

![CI](https://github.com/AlexBasiuk/link-to-qr/actions/workflows/ci.yml/badge.svg)

## Installation

```
npm install @linktoqr/l2qr-sdk
```

### REST API

You can also use our REST API [Docs](https://api.link-to-qr.com/docs/v1/)

## Usage

Initialize the SDK with the L2qr project API token. You can generate one
here: [L2QR app -> settings -< api](https://app.l2qr.com/settings/account/api)

⚠️ Don't forget to set "Website restrictions".

ES5

```js
import L2qr from '@linktoqr/l2qr-sdk';

const l2qr = new L2qr('${API_KEY}');
```

CJS

```js
const L2qr = require('@linktoqr/l2qr-sdk').default;

const l2qr = new L2qr('${API_KEY}');
```

Make a request. You will have to `await` all requests.

```js
const options = {...}
const staticQrCode = await l2qr.staticQrCodes.create(options);
```

## Methods

I will be adding new methods. Please open issues of the methods you need and I'll add them.

### Static QR codes

[options](http://api.link-to-qr.com/docs/v1/#/Static%20QR%20Codes/postv1_api_static_qr_codes)

```js
// Create a static qr code
const options = {...}
const newStaticQrCode = await l2qr.staticQrCodes.create(options);
// newStaticQrCode: { url: "${STATIC_QR_CODE_URL}", ... }
```

### Static QR codes file

[options](http://api.link-to-qr.com/docs/v1/#/Static%20QR%20Codes/postv1_api_static_qr_codes)

```js
// Get a static qr code file
const options = {
  format: '', // suppered formats 
  ...
}
const staticQrCodeFile = await l2qr.staticQrCodesFile.get(options);
// staticQrCodeFile: File (with defined format)
```

### Using with Nuxt js

```javascript
// nuxt.config.js
export default {
  // ...
  build: {
    transpile: ['@linktoqr/l2qr-sdk'],
  },
}
```

### Some options

| Option | Type   | Default | Value                           |
|--------|--------|---------|---------------------------------|
| Format | String | Svg     | png, svg, webp, jpeg, gif, avif |

