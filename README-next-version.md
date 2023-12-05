# L2QR SDK for JavaScript
![CI](https://github.com/itaibo/hetzner-sdk/actions/workflows/ci.yml/badge.svg)

## Installation
```
npm install l2qr-sdk
```

## Usage
Initialize the SDK with the L2qr project API token. You can generate one here: https://app.l2qr.com/settings/account.

```js
import L2qr from 'l2qr-sdk';

const l2qr = new L2qr('${API_KEY}');
```

Make a request. You will have to `await` all requests.

```js
const options = { ... }
const staticQrCode = await l2qr.staticQrCodes.create(options);
// staticQrCode = { url: "${STATIC_QR_CODE_URL}" }
```

## Methods
I will be adding new methods. Please open issues of the methods you need and I'll add them.

### Static QR codes
```js
// Create a static qr code
const options = { ... }
const newStaticQrCode = await l2qr.staticQrCodes.create(options);

// List all static qr codes list
const staticQrCodes = await l2qr.staticQrCodes.list();

// Get a static qr code
const staticQrCodeId = "${QR_CODE_ID}";
const staticQrCode = await l2qr.staticQrCodes.get(staticQrCodeId);

// Update a static qr code
const newOptions = { ... }
const updatedStaticQrCode = await l2qr.staticQrCodes.update(staticQrCodeId, newOptions);

// Delete a static qr code
const deletedStaticQrCode = await l2qr.staticQrCodes.delete(staticQrCodeId);
```
