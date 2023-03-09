import BaseApi from "../commons/BaseApi";

export default class Api extends BaseApi {
    constructor(config) {
        super(config);
        this.baseEndpoint = `${config.context}/rest/personas`;
    }

    #getBaseEndPoint() {
        return this.baseEndpoint;
    }

    obtenerPersonas() {
        const url = this.#getBaseEndPoint();
        console.log("API_URL: "+url);
        return Api.get(url);
    }
    
    guardarPersonas(){
		const url = this.#getBaseEndPoint();
        console.log("API_URL: "+url);
        return Api.post(url);
	}
	
	eliminarPersonas(){
		const url = this.#getBaseEndPoint();
        console.log("API_URL: "+url);
        return Api.delete(url);
	}
	
	actualizarPersonas(){
		const url = this.#getBaseEndPoint();
        console.log("API_URL: "+url);
        return Api.put(url);
	}
}
