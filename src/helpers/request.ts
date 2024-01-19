import axios, { AxiosRequestConfig } from 'axios';

export default async function request(parameters: AxiosRequestConfig) {
	let response: any;

	try {
		response = await axios(parameters);
	} catch (e) {
		return { error: e.response?.data?.error || e };
	}

	return response?.data;
};
