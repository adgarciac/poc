export default class BaseApi {
    constructor(config) {
        this.context = config.context;
    }

    getContext() {
        return this.context;
    }

    static get(url) {
		console.log("BASEAPI_GET_URL: "+url);
        const params = BaseApi.#getBaseParamsUrlOrObject(url, "GET");
        params.cache = false;
        return $.ajax(params);
    }

    static post(input) {
		console.log("INPUT: "+input)
        return $.ajax(BaseApi.#getBaseParams(input, "POST"));
    }

    static patch(input) {
        return $.ajax(BaseApi.#getBaseParams(input, "PATCH"));
    }

    static put(input) {
        return $.ajax(BaseApi.#getBaseParams(input, "PUT"));
    }

    static delete(urlOrObject) {
        const settings = BaseApi.#getBaseParamsUrlOrObject(urlOrObject, "DELETE");
        return $.ajax(settings);
    }

    static #getBaseParamsUrlOrObject(input, type) {
        let params = {};
        if (typeof input === 'string') {
            params.url = input;
            params.type = type;
        } else {
            params = BaseApi.#getBaseParams(input, type);
        }
        return params;
    }

    static #getBaseParams(input, type) {
		var url;
		if(type ==="GET"){
			url = input.url;
		}else{
			url = input;
		}
		  
		console.log("URL:"+input.url +" TYPE: "+type );
        const params = {
            url: url,
            Headers: { Accept: 'application/json' },
            contentType: 'application/json; charset=utf-8',
            timeout: 0,
            dataType: "json",
            type
        };
        if (input.data) {
            if (type === 'GET') {
                params.data = input.data;
            } else {
                params.data = JSON.stringify(input.data);
            }
        }
        return params;
    }
}
