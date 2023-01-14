import * as QueryString from 'query-string';
import ApiException from "./ApiException";


export interface ApiConfig{
	apiDomain: string,
	headers: {[key:string] : string};
}


export default abstract class ApiBase {
	static config: ApiConfig;

	public static async ajax(method: string, path: string, data: any) {
		const headers: any = {
			'content-type': 'application/json'
		};

		let request: RequestInit = {
			headers: this.config.headers,
			method: method,
			mode: 'cors'
		};
		if (data !== null)
			request.body = JSON.stringify(data);

		const response = await fetch(this.config.apiDomain + path, request);
		let responseBody: any = await response.text();
		try {
			responseBody = JSON.parse(responseBody);
		} catch { }

		if (response.ok) {
			return responseBody;
		} else {
			const apiError: ApiException = {
				status: response.status,
				statusText: response.statusText,
				body: responseBody
			};
			throw apiError;
		}
	}

	protected static async get(path: string, query: any = null): Promise<any> {
		var queryString = QueryString.stringify(query);

		return await this.ajax('get', path + '?' + queryString, null);
	}

	protected static async post(path: string, data: any): Promise<any> {
		return await this.ajax('post', path, data);
	}

	protected static async put(path: string, data: any): Promise<any> {
		return await this.ajax('put', path, data);
	}

	protected static async patch(path: string, data: any): Promise<any> {
		return await this.ajax('patch', path, data);
	}

	// naming inconsistency is due to delete being a reserved JS word
	protected static async sendDelete(path: string): Promise<any> {
		return await this.ajax('delete', path, null);
	}
}
