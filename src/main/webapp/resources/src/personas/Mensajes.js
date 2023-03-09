import DataTable from 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from "jquery";

export const showGrabar = () => {
    let msgError = "Se ha Grabado Exitosamente la Persona";

    document.getElementById("modalMessageContent").textContent = msgError;
    $('#modalMessage').modal('show');
};

export const showEliminar = () => {
    let msgError = "Se ha Eliminado Exitosamente la Persona";

    document.getElementById("modalMessageContent").textContent = msgError;
    $('#modalMessage').modal('show');
};
