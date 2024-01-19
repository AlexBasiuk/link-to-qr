import { default as requestHelper } from './helpers/request.js';
import { AxiosRequestConfig, ResponseType } from 'axios';

const L2QR_BASE_URL = 'https://api.link-to-qr.com/v1/api';

export default class L2qr {
	apiKey: string;
	baseUrl: string;
	headers: object;

	constructor(apiKey: string, baseUrl?: string) {
		this.apiKey = apiKey;
		this.baseUrl = baseUrl || L2QR_BASE_URL;
		this.headers = {
			'Authorization': `Bearer ${this.apiKey}`,
			'Content-Type': 'application/json',
		};
	}

	// Utils
	async request(path: string = '', parameters: AxiosRequestConfig = {}) {
		return await requestHelper({
			method: (parameters && parameters.method) || 'get',
			url: `${L2QR_BASE_URL}${path}`,
			headers: this.headers,
			...parameters,
		});
	}

	// staticQrCode
	public readonly staticQrCodes = {
		create: async (parameters: object = {}): Promise<any> => {
			return this.request('/static/qr-codes', { method: 'post', data: parameters });
		},
		// list: (): Promise<any>  => {
		// 	return this.request('/static/qr-codes');
		// },
		// get: (staticQrCodeId: number): Promise<any> => {
		// 	return this.request(`/static/qr-codes/${staticQrCodeId}`);
		// },
		// update: (staticQrCodeId: number, parameters: object = {}): Promise<any> => {
		// 	return this.request(`/static/qr-codes/${staticQrCodeId}`, { method: 'put', data: parameters });
		// },
		// delete: (staticQrCodeId: number): Promise<any> => {
		// 	return this.request(`/static/qr-codes/${staticQrCodeId}`, { method: 'delete' });
		// },
	};
	// staticQrCodeFile
	public readonly staticQrCodesFile = {
		get: async (parameters: object = {}, responseType?: ResponseType ): Promise<any> => {
			const params: AxiosRequestConfig = { method: 'post', data: parameters }
			if (responseType) params.responseType = responseType
			return this.request('/static/qr-codes-file', params);
		},
	};
};
