# L2QR SDK for JavaScript
![CI](https://github.com/AlexBasiuk/link-to-qr/actions/workflows/ci.yml/badge.svg)

## Installation
```
npm install @linktoqr/l2qr-sdk
```

### REST API
You can also use our REST API [Docs](https://api.link-to-qr.com/docs/v1/)

## Usage
Initialize the SDK with the L2qr project API token. You can generate one here: https://app.l2qr.com/settings/account/api.

```js
import L2qr from '@linktoqr/l2qr-sdk';

const l2qr = new L2qr('${API_KEY}');
```

Make a request. You will have to `await` all requests.

```js
const options = { ... }
const staticQrCode = await l2qr.staticQrCodes.create(options);
```

## Methods
I will be adding new methods. Please open issues of the methods you need and I'll add them.

### Static QR codes
```js
// Create a static qr code
const options = { ... }
const newStaticQrCode = await l2qr.staticQrCodes.create(options);
// newStaticQrCode: { url: "${STATIC_QR_CODE_URL}", ... }
```
