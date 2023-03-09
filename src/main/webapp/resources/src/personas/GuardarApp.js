// Import our custom CSS
import '../scss/styles.scss';
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';

import Api from "./Api";
import Personas from "./Personas";
import { showError } from "../commons/Utils";
import { showGrabar } from "./Mensajes";

export default class App { 
    constructor(config) {
        this.api = new Api(config);

        this.personas = new Personas({ idTablaPersonas: 'personas', api: this.api, ...config });

        this.mensaje =  this.guardarPersonas();
     // this.renderPersonas();
    }

	guardarPersonas(){
		console.log("GUARDAR: "+this.api.guardarPersonas());
		this.api.guardarPersonas()
            .then(() => {						
                this.renderPersonas();
            })
		
	}	

    renderPersonas() {
		console.log(this.api.obtenerPersonas());
        this.api.obtenerPersonas()
            .then(personas => {
                this.personas.render(personas);
                showGrabar();
            })
            .catch(error => {
                showError(error);
            });
    }
}

// eslint-disable-next-line no-undef
globalThis.app = new App(config);
