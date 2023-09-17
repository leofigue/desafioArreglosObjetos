//EL EJEMPLO IMPORT Y EXPORT LO SAQUE DE LA SIGUIENTE URL
//https://www.youtube.com/watch?v=9asefcSD2iA

//IMPORTA LAS FUNCIONES Y ARREGLOS DE LOS OTROS ARCHIVOS QUE FUERON COMPARTIDAS CON EXPORT
import { arrPropiedadesAlquiler, arrPropiedadesVenta } from './arreglos.js'
import { leeArreglo } from './funciones.js'

// RECUPERA LA PAGINA QUE ESTA LLAMANDO AL SCRIPT
var URL = window.location.href.split("/");
var pagina = URL[URL.length-1];
console.log(arrPropiedadesVenta.length);

// RECUPERA LOS ELEMNTOS DEL DOM
const sectionVentas = document.querySelector("#filaVenta");
const sectionAlquiler = document.querySelector("#filaAlquiler");


if (pagina == "index.html") {
    //sectionVentas.innerHTML= leeLosPrimeros(arrPropiedadesVenta, 3);
    //sectionAlquiler.innerHTML= leeLosPrimeros(arrPropiedadesAlquiler, 3);
    sectionVentas.innerHTML= leeArreglo(arrPropiedadesVenta,3);
    sectionAlquiler.innerHTML= leeArreglo(arrPropiedadesAlquiler, 3);
}
else if(pagina == "propiedades_venta.html"){
    sectionVentas.innerHTML=leeArreglo(arrPropiedadesVenta);
}
else if(pagina == "propiedades_alquiler.html"){
    sectionAlquiler.innerHTML=leeArreglo(arrPropiedadesAlquiler);
}

