
function fecha() {
    let hoy = new Date();
  
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let year = hoy.getFullYear();
    
    let formatofecha = `${dia}/${mes}/${year}`;
    return { formatofecha, year };
}

function crear() {
    const { formatofecha, year } = fecha();
    const Manuel = document.getElementById("Manuel").checked;
    const Raquel = document.getElementById("Raquel").checked;
    const Amador = document.getElementById("Amador").checked;
    const Marco = document.getElementById("Marco").checked;
    const Fran = document.getElementById("Fran").checked;
    const WebCenter = document.getElementById("WebCenter").value;
    
    //////////////////////////////////////////////////////////
    //Nombre
    //////////////////////////////////////////////////////////
    
    let name;
    if (Manuel) {
        name = "MP - " + formatofecha + " - " + WebCenter + `
`; 
    } else if (Raquel){
        name = "RM - " + formatofecha + " - " + WebCenter + `
`; 
    } else if (Amador){
        name = "AA - " + formatofecha + " - " + WebCenter + `
`; 
    } else if (Marco){
        name = "MM - " + formatofecha + " - " + WebCenter + `
`; 
    } else if (Fran){
        name = "FM - " + formatofecha + " - " + WebCenter + `
`; 
    } else {
        name = "OT - " + formatofecha + " - " + WebCenter + `
`;
    }
    //////////////////////////////////////////////////////////
    //Estructural
    //////////////////////////////////////////////////////////
    const MuestraEstructural = document.getElementById("MuestraEstructural").checked;
    const InfoEstructural = document.getElementById("InfoEstructural").checked;
    const Docupoint = document.getElementById("Docupoint").value;
    
let Estructural;
if (MuestraEstructural) {
    Estructural = "Estructural " + Docupoint +  " según muestra." + `
`; 
} else if (InfoEstructural){
    Estructural = "Estructural " + Docupoint +  " según información." + `
`; 
} else if (NadaEstructural){
    Estructural = ``; 
} else {
Estructural = ``;
}
//////////////////////////////////////////////////////////
//Gráfico y color
//////////////////////////////////////////////////////////
const SegunMuestra = document.getElementById("SegunMuestra").checked;
const ReferenciasActivas = document.getElementById("ReferenciasActivas").checked;
const GCMI = document.getElementById("GCMI").checked;
const Pantone = document.getElementById("Pantone").checked;
const PropuestaInterna = document.getElementById("PropuestaInterna").checked;
const NadaGrafico = document.getElementById("NadaGrafico").checked;
const DisenoGrafico = document.getElementById("DisenoGrafico").value;

let GraficoColor;

if (SegunMuestra) {
    GraficoColor = "Gráfico " + DisenoGrafico + " según muestra." + `
`; 
} else if (ReferenciasActivas){
    GraficoColor = "Gráfico " + DisenoGrafico + " según referencias activas." + `
`; 
} else if (GCMI){
    GraficoColor = "Gráfico " + DisenoGrafico + " según GCMI." + `
`; 
} else if (Pantone){
    GraficoColor = "Gráfico " + DisenoGrafico + " según Pantone del cliente." + `
`; 
} else if (PropuestaInterna){
    GraficoColor = "Gráfico " + DisenoGrafico + " según propuesta interna." + `
`; 
}else if (NadaGrafico){
    GraficoColor = ``; 
} else {
GraficoColor = ``;
}
//////////////////////////////////////////////////////////
//Muestras enviadas
//////////////////////////////////////////////////////////
const MuestrasCortadas = document.getElementById("MuestrasCortadas").checked;
const MuestrasEnviadasCortadas = document.getElementById("MuestrasEnviadasCortadas").checked;
const SinMuestrasCortadas = document.getElementById("SinMuestrasCortadas").checked;
const canalesmuestra = document.getElementById("canalesmuestra").value;
const NumeroMuestrasCortadas = document.getElementById("NumeroMuestrasCortadas").value;

let MuestrasEnviadasCortadas2;

if (MuestrasCortadas) {
    MuestrasEnviadasCortadas2 = "Se cortan " + NumeroMuestrasCortadas + " muestras, en calidad" +
    canalesmuestra + "." + `
`; 
} else if (MuestrasEnviadasCortadas){
    MuestrasEnviadasCortadas2 = "Se cortan y envían " + NumeroMuestrasCortadas + " muestras, en calidad: " +
    canalesmuestra + "." + `
`;  
}else if (SinMuestrasCortadas){
    MuestrasEnviadasCortadas2 = ``; 
} else {
MuestrasEnviadasCortadas2 = ``;
}
//////////////////////////////////////////////////////////
//Muestras de color
//////////////////////////////////////////////////////////
const PruebaColor = document.getElementById("PruebaColor").checked;
const gmg = document.getElementById("gmg").checked;
const PruebaPegada = document.getElementById("PruebaPegada").checked;
const SinMuestraColor = document.getElementById("SinMuestraColor").checked;

let MuestrasColor;

if (PruebaColor) {
    MuestrasColor = "Se manda una muestra de color impreso." + `
`; 
} else if (gmg){
    MuestrasColor = "Se envía una muestra de color tramado impreso." + `
`;  
} else if (PruebaPegada){
    MuestrasColor = "Se manda prototipo impreso y tramado, sobre la caja." + `
`; 
}else if (SinMuestraColor){
    MuestrasColor = ``; 
} else {
MuestrasColor = ``;
}
 //////////////////////////////////////////////////////////
 //Nombre
 //////////////////////////////////////////////////////////
 
 const AnalisisCalidad = document.getElementById("AnalisisCalidad").checked;
 const PresupuestosSubcontratacion = document.getElementById("PresupuestosSubcontratacion").checked;
 const EstudioCape = document.getElementById("EstudioCape").checked;
 const EstudioOneA = document.getElementById("EstudioOneA").checked;
 const ModificacionArticulo = document.getElementById("ModificacionArticulo").checked;
 const NumeroARticulo = document.getElementById("NumeroARticulo").value;
    let AnalisisCalidad2;
    if (AnalisisCalidad) {
        AnalisisCalidad2 = `Se realiza analisis de calidad.
`; 
    } else {
        AnalisisCalidad2 = ``;
    }
    ///////////////
    let PresupuestosSubcontratacion2;
    if (PresupuestosSubcontratacion) {
        PresupuestosSubcontratacion2 = `Se guarda presupuesto de subcontratación.
`; 
    } else {
        PresupuestosSubcontratacion2 = ``;
    }
    //////////////
    let EstudioCape2;
    if (EstudioCape) {
        EstudioCape2 = `Se realiza analisis estudio de CAPE.
`; 
    } else {
        EstudioCape2 = ``;
    }
    /////////////////
    let EstudioOneA2;
    if (EstudioOneA) {
        EstudioOneA2 = `Se realiza analisis estudio de OneA.
`; 
    } else {
        EstudioOneA2 = ``;
    }
    //////////////////
    let ModificacionArticulo2;
    if (ModificacionArticulo && NumeroARticulo > 0) {
        ModificacionArticulo2 = `Se Modifica el artículo  ${NumeroARticulo}.
`; 
    } else {
        ModificacionArticulo2 = ``;
    }


//////////////////////////////////////////////////////////
//Comenatarios
//////////////////////////////////////////////////////////

const ComentarioDiseno = document.getElementById('ComentarioDiseno').value;

let ComentarioDiseno2;

if (ComentarioDiseno === "Comentarios") {
    ComentarioDiseno2 = ``;
} else {
    ComentarioDiseno2 = ComentarioDiseno + "." + `
`;
}
//////////////////////////////////////////////////////////
//Cadena de texto
//////////////////////////////////////////////////////////
    document.getElementById("contenedor").innerHTML = 
    `${name}${Estructural}${GraficoColor}${MuestrasEnviadasCortadas2}`+
    `${MuestrasColor}${AnalisisCalidad2}`+
    `${AnalisisCalidad2}${PresupuestosSubcontratacion2}${EstudioCape2}`+
    `${EstudioOneA2}${ModificacionArticulo2}${ComentarioDiseno2}
Datos comerciales:

**************************************************`;
}


function copiar() {

    var content = document.getElementById('contenedor');
    
    content.select();
    document.execCommand('Copy');

}