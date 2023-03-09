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
						    console.log(data);
						    return	"<td><a class=\"btn btn-danger btn-sm\" th:href=\"@{/personas/eliminar/\"+ data +\" }\"  "+ 
							        "onclick=\"return confirm('Est\u00E1s seguro que quieres eliminar?');\">Eliminar</a></td>"+
							        "<td><a class=\"btn btn-primary btn-sm\" th:href=\"@{/personas/actualizar/\" + data + \"}\"  >Editar</a></td>";
							
					}
                }
                /*,
                {   data: "acciones",
					render: function (data, type, row) {
						console.log(data);
						//	th:href="@{posts/view/{postId}(postId=${post.id})}"
					/*	return '<button onclick="location.href=\'/personas/eliminar/\''+data.id+'\';" >Eliminar </button>'; 
						return<button  th:onclick="|window.location.href='@{/update(server=${key})}'|" > Editar </button> 
					                    th:onclick="'window.location.href=\'/update?server=' + ${key} + '\''"
						return '<button th:onclick="window.location.href=\'@{/personas/form}\'" class="btn btn-primary">Editar</a>'; */
                       //return '<a class="btn btn-primary btn-sm" th:href="@{/personas/editar/" + ${data.id} + "}"  >Editar</a> '; 
					//	return	"<td><a class=\"btn btn-danger btn-sm\" th:href=\"@{/personas/eliminar/{id}(id=\"+${data.id}+ \") }\"  "+ 
					//		"onclick=\"return confirm('Est\u00E1s seguro que quieres eliminar?');\">Eliminar</a></td>";   
                    //}
                 //}
            ],
            dom: '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>'
        });
    }
}
