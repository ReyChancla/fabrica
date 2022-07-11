
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
    const Docupoint = document.getElementById("Docupoint").value;
    
    //////////////////////////////////////////////////////////
    //Nombre
    //////////////////////////////////////////////////////////
    
    let name;
    if (Manuel) {
        name = "MP - " + formatofecha + `
`; 
    } else if (Raquel){
        name = "RM - " + formatofecha + `
 `; 
    } else if (Amador){
        name = "AA - " + formatofecha + `
`; 
    } else if (Marco){
        name = "MM - " + formatofecha + `
 `; 
    } else if (Fran){
        name = "FM - " + formatofecha + `
`; 
    } else {
        name = "OT - " + formatofecha + `
`;
    }
    //////////////////////////////////////////////////////////
    //Estructural
    //////////////////////////////////////////////////////////
const MuestraEstructural = document.getElementById("MuestraEstructural").checked;
const InfoEstructural = document.getElementById("InfoEstructural").checked;
    
let Estructural;
if (MuestraEstructural) {
    Estructural = "Estructural (DSS-" + year + "-" + Docupoint + ") según muestra." + `
`; 
} else if (InfoEstructural){
    Estructural = "Estructural (DSS-" + year + "-" + Docupoint + ") según información." + `
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

let GraficoColor;

if (SegunMuestra) {
    GraficoColor = "Gráfico (G-" + year + "-" + Docupoint + ") según muetra." + `
`; 
} else if (ReferenciasActivas){
    GraficoColor = "Gráfico (G-" + year + "-" + Docupoint + ") según referencias activas." + `
`; 
} else if (GCMI){
    GraficoColor = "Gráfico (G-" + year + "-" + Docupoint + ") según GCMI." + `
`; 
} else if (Pantone){
    GraficoColor = "Gráfico (G-" + year + "-" + Docupoint + ") según Pantone del cliente." + `
`; 
} else if (PropuestaInterna){
    GraficoColor = "Gráfico (G-" + year + "-" + Docupoint + ") según propuesta interna." + `
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


    document.getElementById("contenedor").innerHTML = 
    name + 
    Estructural + 
    GraficoColor +
    MuestrasEnviadasCortadas2 +
"************************";  

}


function copiar() {

    var content = document.getElementById('contenedor');
    
    content.select();
    document.execCommand('Copy');

}