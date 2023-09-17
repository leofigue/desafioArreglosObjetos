// CREA UNA VARIABLE GLOBAL
var divs="";

// FUNCIÓN FINAL QUE LEERA EL ARREGLO COMPLETO Y UNA CANTIDAD ESPECIFICA
// ESTA FUNCIÓN FUE CREADA DESPUES DE LA AYUDANTÍA
export const leeArreglo = (arreglo, cuantos=arreglo.length)=>{
    divs="";
    arreglo.slice(0, cuantos).forEach((propiedad) => {
        creaDiv(propiedad);
    });
    return divs;
}

//ESTA FUNCIÓN CREARA LOS DIV CON LOS VALORES DEL OBJETO QUE RECIBE COMO PARAMETRO
const creaDiv = (propiedad)=>{
    divs += `<div class="col-md-4 mb-4"><div class="card">
    <img class="card-img-top"
    src="${propiedad["src"]}"
    alt="Imagen del departamento"
    />
    <div class="card-body">
    <h5 class="card-title">${propiedad["nombre"]}</h5>
    <p class="card-text">${propiedad["descripcion"]}</p>
    <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad["ubicacion"]}
    </p>
    <p>
        <i class="fas fa-bed"></i> ${propiedad["habitaciones"]} Habitaciones |
        <i class="fas fa-bath"></i> ${propiedad["banos"]} Baños
    </p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedad["costo"]}</p>
    ${propiedad['smoke'] ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar</p>' :
                            '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>' }
    ${propiedad['pets'] ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>' :
                            '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas</p>' }
    </div>
    </div>
    </div>`;
}

//FUNCIONES ORIGINALES QUE SE OMITIERON, PERO LAS DEAJRE PARA EJEMPLOS FUTUROS

// // FUNCIÓN QUE LEERA EL ARREGLO COMPLETO
// export const leeArregloCompleto = (arreglo)=>{
//     divs="";
//     arreglo.forEach((propiedad) => {
//         creaDiv(propiedad);
//     });
//     return divs;
// }

// // FUNCIÓN QUE LEERA lA CANTIDAD INDICADA
// export const leeLosPrimeros = (arreglo, cuantos=1)=>{
//     divs="";
//     for(let i=0 ; i<cuantos; ++i){
//         let propiedad = arreglo[i];
//         creaDiv(propiedad);
//     }
//     return divs;
// }