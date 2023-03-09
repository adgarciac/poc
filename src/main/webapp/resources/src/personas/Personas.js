import DataTable from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from "jquery";

export default class Personas {
    constructor(config) {
        this.api = config.api;
        this.idTablaPersonas = config.idTablaPersonas;
    }

    render(personas) {
        this.tablaPersonas = new DataTable(`#${this.idTablaPersonas}`, {
            data: personas,
            autoWidth: true,
            responsive: true,
            language: {
                url: `${this.api.getContext()}/DataTables/i18n/es-CL.json`,
            },
            columns: [
                {
                    data: "id",
                    render: (data, type, row) => data
                },
                {
                    data: "nombres",
                    render: (data, type, row) => data
                },
                {
                    data: "apellidos",
                    render: (data, type, row) => data
                },
                {
                    data: "pais",
                    render: (data, type, row) => data
                },
                {
                    data: "id",
                    render: (data, type, row) =>{ 

						    return	'<a class="btn btn-danger btn-sm" href="/personas/eliminar/'+data+'\"  '+ 
							        "onclick=\"return confirm('Est\u00E1s seguro que quieres eliminar?');\">Eliminar</a></td>"+
							        '  <td><a class="btn btn-primary btn-sm" href="/personas/actualizar/'+data+'\"  >Editar</a></td>';
							
					}
                }
                
            ],
            dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>'
        });
    }
}
