'use strict'

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h3')


// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h2.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', ()=>{

        // Recorrer TODOS los bloque
        bloque.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
            bloque[i].classList.remove('activo')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('activo')

    })
}) 
function fecha() {
    let hoy = new Date();
  
    let dia = hoy.getDate();
    let mes = hoy.getMonth() + 1;
    let year = hoy.getFullYear();
    
    let formatofecha = `${dia}/${mes}/${year}`;
    return { formatofecha, year };
}

function nombre(NOMBRE) {
    document.querySelector('#saludo').innerHTML = `Buenas, ${NOMBRE}`;
    console.log(NOMBRE);
    localStorage.setItem('personas',JSON.stringify(NOMBRE))
    
}

let data = localStorage.getItem('personas')
console.log(data);
let sigla;
if (data == 'undefined') {
    sigla = 'OT'
    document.querySelector('#saludo').innerHTML = `Buenas, ${data}`;
} else if (data == '"Manuel"') {
    data = 'Manuel';
    sigla = 'MP'
    document.querySelector('#saludo').innerHTML = `Buenas, ${data}`;
} else if (data == '"Amador"') {
    data = 'Amador';
    sigla = 'AA'
    document.querySelector('#saludo').innerHTML = `Buenas, ${data}`;
} else if (data == '"Raquel"') {
    data = 'Raquel';
    sigla = 'RM'
    document.querySelector('#saludo').innerHTML = `Buenas, ${data}`;
} else if (data == '"Marco"') {
    data = 'Marco';
    sigla = 'MM'
    document.querySelector('#saludo').innerHTML = `Buenas, ${data}`;
} else if (data == '"Francisco"') {
    data = 'Francisco';
    sigla = 'FM'
    document.querySelector('#saludo').innerHTML = `Buenas, ${data}`;
}
function crear() {

    let data = localStorage.getItem('personas')
    document.getElementById("textareaCopy").innerHTML = 
    `<textarea id="contenedor" class="textarea"></textarea><br>
    <input type="button" value="Copy" onclick="copiar()">`;

    const { formatofecha, year } = fecha();
/*     const Manuel = document.getElementById("Manuel").checked;
    const Raquel = document.getElementById("Raquel").checked;
    const Amador = document.getElementById("Amador").checked;
    const Marco = document.getElementById("Marco").checked;
    const Fran = document.getElementById("Fran").checked;
 */    const WebCenter = document.getElementById("WebCenter").value;
    
    //////////////////////////////////////////////////////////
    //Nombre
    //////////////////////////////////////////////////////////
  
    
    let name;
    let nameError
    if (data == '"Manuel"') {
        name = "MP - " + formatofecha  + " - " + WebCenter + `
`; 
    } else if (data == '"Raquel"'){
        name = "RM - " + formatofecha  + " - " + WebCenter + `
`; 
    } else if (data == '"Amador"'){
        name = "AA - " + formatofecha  + " - " + WebCenter + `
`; 
    } else if (data == '"Marco"'){
        name = "MM - " + formatofecha  + " - " + WebCenter + `
`; 
    } else if (data == '"Francisco"'){
        name = "FM - " + formatofecha  + " - " + WebCenter + `
`; 
    } else {
        name = "OT - " + formatofecha  + " - " + WebCenter + `
`;
        alert("Se te ha olvidado identificarte. ¡Gracias por hacerlo ya!"); 
        nameError = "OT"
    }
    //////////////////////////////////////////////////////////
    //Estructural
    //////////////////////////////////////////////////////////
    const MuestraEstructural = document.getElementById("MuestraEstructural").checked;
    const InfoEstructural = document.getElementById("InfoEstructural").checked;
    const Docupoint = document.getElementById("Docupoint").value;
    let DocupointVersion = document.getElementById("DocupointVersion").value;
    console.log(DocupointVersion);
    if (DocupointVersion == "") {
        DocupointVersion = ``;
    } else {
        DocupointVersion = "_" + document.getElementById("DocupointVersion").value;
    }
let Estructural;
if (MuestraEstructural) {
    Estructural = "Estructural " + "DSS-LUCENA-" +Docupoint + "-22" + DocupointVersion + " según muestra." + `
`; 
} else if (InfoEstructural){
    Estructural = "Estructural " + "DSS-LUCENA-" +Docupoint + "-22" + DocupointVersion + " según información." + `
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
/* const Pantone = document.getElementById("Pantone").checked */;
const PropuestaInterna = document.getElementById("PropuestaInterna").checked;
const MuestraGrafico = document.getElementById("MuestraGrafico").checked;
const InfoGrafico = document.getElementById("InfoGrafico").checked;
const NadaGrafico = document.getElementById("NadaGrafico").checked;
const NadaColor= document.getElementById("NadaGrafico").checked;

const DisenoGrafico = document.getElementById("DisenoGrafico").value;
let DisenoGraficoVersion = document.getElementById("DisenoGraficoVersion").value;

if (DisenoGraficoVersion === ``) {
    DisenoGraficoVersion = ``;
} else {
    DisenoGraficoVersion = "-" + document.getElementById("DisenoGraficoVersion").value;
}

let Grafico;

if (MuestraGrafico) {
    Grafico = "Gráfico " + "G-2022-" + DisenoGrafico + DisenoGraficoVersion + " según muestra." + `
`; 
} else if (InfoGrafico){
    Grafico = "Gráfico " + "G-2022-" + DisenoGrafico + DisenoGraficoVersion + " según información." + `
`; 
} else if (NadaGrafico){
    Grafico = ``; 
} else {
Grafico = ``;
}

let GraficoColor;

if (SegunMuestra) {
    GraficoColor = `Color/es igual a muestra
`; 
} else if (ReferenciasActivas){
    GraficoColor = `Color/es igual a referencias activas.
`; 
} else if (GCMI){
    GraficoColor = `Color/es igual a GCMI/Pantone .
`;
/* } else if (Pantone){
    GraficoColor =  `Color/es igual a Pantone.
`;  */
} else if (PropuestaInterna){
    GraficoColor =  `Color/es igual propuesta interna.
`; 
}else if (NadaColor){
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
let MuestrasPlural;

if (NumeroMuestrasCortadas > 1) {
    MuestrasPlural = " muestras en: ";
} else {
    MuestrasPlural = " muestra en: ";
}
if (NumeroMuestrasCortadas > 1000){
    MuestrasPlural = " muestras en: ";
    alert("Te has emocionado, relaja la raja y piensa si estas seguro en cortar tantas muestras." )
    window.open("mailto:Pedro.Chacon@dssmith.com")
    }   

if (MuestrasCortadas) {
    MuestrasEnviadasCortadas2 = "Se cortan " + NumeroMuestrasCortadas + MuestrasPlural +
    canalesmuestra + "." + `
`; 
} else if (MuestrasEnviadasCortadas){
    MuestrasEnviadasCortadas2 = "Se cortan y envían " + NumeroMuestrasCortadas + MuestrasPlural +
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
    MuestrasColor = "Se envía prueba de color pegada a caja." + `
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
    let AnalisisCalidad2;
    if (AnalisisCalidad) {
        AnalisisCalidad2 = `Se realiza análisis de calidad.
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
        EstudioCape2 = `Se realiza estudio de CAPE.
`; 
    } else {
        EstudioCape2 = ``;
    }
    /////////////////
    let EstudioOneA2;
    if (EstudioOneA) {
        EstudioOneA2 = `Se realiza estudio de OneA.
`; 
    } else {
        EstudioOneA2 = ``;
    }
    //////////////////
    let ModificacionArticulo2;
    if (ModificacionArticulo) {
        ModificacionArticulo2 = `Se Modifica el artículo.
`; 
    } else {
        ModificacionArticulo2 = ``;
    }


//////////////////////////////////////////////////////////
//Comenatarios
//////////////////////////////////////////////////////////

/* const ComentarioDiseno = document.getElementById('ComentarioDiseno');
console.log(ComentarioDiseno);
let ComentarioDiseno2;

if (ComentarioDiseno === "Comentarios") {
    ComentarioDiseno2 = ``;
} else {
    ComentarioDiseno2 = ComentarioDiseno + "." + `
`;
} */

//////////////////////////////////////////////////////////
//Datos comerciales
//////////////////////////////////////////////////////////

const largo = document.getElementById('largo').value;
const ancho = document.getElementById('ancho').value;
const alto = document.getElementById('alto').value;
const MediaCaja = document.getElementById("MediaCaja").checked;

let MedidasInternas;

if(largo > 0 && ancho > 0 && alto > 0 && MediaCaja){
    MedidasInternas = `Medidas internas: ${largo} x ${ancho} x ${alto} mm (Media caja).
`;
}else if (largo > 0 && ancho > 0 && alto > 0) {
    MedidasInternas = `Medidas internas: ${largo} x ${ancho} x ${alto} mm.
`;
} else {
    MedidasInternas = ``;
}

const AnchoTotal = document.getElementById('AnchoTotal').value;
const LargoTotal = document.getElementById('LargoTotal').value;

const PosesAncho = document.getElementById('PosesAncho').value;
const PosesLargo = document.getElementById('PosesLargo').value;

const TrimAncho = Number(document.getElementById('TrimAncho').value);
const TrimLargo = Number(document.getElementById('TrimLargo').value);

let Pasada0 = document.getElementById('Pasada0').value;
let Pasada1 = document.getElementById('Pasada1').value;
let Pasada2 = document.getElementById('Pasada2').value;
let Pasada3 = document.getElementById('Pasada3').value;
let Pasada4 = document.getElementById('Pasada4').value;
let Pasada5 = document.getElementById('Pasada5').value;
let Pasada6 = document.getElementById('Pasada6').value;
const entradaContraCanal = document.getElementById("entradaContraCanal").checked;
console.log(Pasada1);

let MargenA;
let MargenL;

if (Pasada1 === "DF") {
    MargenA = 20;
    MargenL = 20;
} else if (Pasada1 === "Bobst") {
    MargenA = 25;
    MargenL = 20;
} else if (Pasada1 === "Curioni") {
    MargenA = 0;
    MargenL = 0;
} else if (Pasada1 === "Martin") {
    MargenA = 0;
    MargenL = 0;
} else if (Pasada1 === "Nada") {
    MargenA = 0;
    MargenL = 0;
} else if (Pasada1 === "ManipuladoExterno") {
    MargenA = 20;
    MargenL = 20;
    alert("Seguro que tiene la sangre correcta, tiene 10mm por cada lado.")
} else {
    MargenA = 0;
    MargenL = 0;
};

if (Pasada1 === "Bobst" && entradaContraCanal) {
    MargenA = 20;
    MargenL = 25;
}

if (Pasada1 === "Nada") {
    Pasada1 = ``;
}
if (Pasada2 === "Nada") {
    Pasada2 = ``;
}
if (Pasada3 === "Nada") {
    Pasada3 = ``;
}
if (Pasada4 === "Nada") {
    Pasada4 = ``;
}
if (Pasada5 === "Nada") {
    Pasada5 = ``;
}
if (Pasada6 === "Nada") {
    Pasada6 = ``;
}
////////////////////////////////////////////////////////////////////////

/* if (Pasada1 === ) {
    
} else if (condition) {
    
} else if () {
    
} else {
    
} */







let MedidasUnitarias;

if (AnchoTotal > 0 && LargoTotal > 0 && Pasada1 === "Martin") {
    const MTotalAncho = (AnchoTotal * PosesAncho) + MargenA + TrimAncho;
    const MTotalLargo = (LargoTotal * PosesLargo) + MargenL + TrimLargo;
    const MultiplicaPoses = PosesAncho * PosesLargo;
    MedidasUnitarias = `Medidas Unitarias: ${AnchoTotal} x ${LargoTotal} mm.
Medidas de plancha: ${MTotalAncho} x ${MTotalLargo} mm.
Ruta: ${Pasada0}/${Pasada1}/${Pasada2}/${Pasada3}/${Pasada4}/${Pasada5}/${Pasada6}.`;
} else if (AnchoTotal > 0 && LargoTotal > 0 && Pasada1 === "Curioni") {
    const MTotalAncho = (AnchoTotal * PosesAncho) + MargenA + TrimAncho;
    const MTotalLargo = (LargoTotal * PosesLargo) + MargenL + TrimLargo;
    const MultiplicaPoses = PosesAncho * PosesLargo;
    MedidasUnitarias = `Medidas Unitarias: ${AnchoTotal} x ${LargoTotal} mm.
Medidas de plancha: ${MTotalAncho} x ${MTotalLargo} mm.
Ruta: ${Pasada0}/${Pasada1}/${Pasada2}/${Pasada3}/${Pasada4}/${Pasada5}/${Pasada6}.`;
} else if (AnchoTotal > 0 && LargoTotal > 0) {
    const MTotalAncho = (AnchoTotal * PosesAncho) + MargenA + TrimAncho;
    const MTotalLargo = (LargoTotal * PosesLargo) + MargenL + TrimLargo;
    const MultiplicaPoses = PosesAncho * PosesLargo;
    MedidasUnitarias = `Medidas Unitarias: ${AnchoTotal} x ${LargoTotal} mm.
Nº de poses: ${MultiplicaPoses} (${PosesAncho} x ${PosesLargo}).
Medidas de plancha: ${MTotalAncho} x ${MTotalLargo} mm.
Ruta: ${Pasada0}/${Pasada1}/${Pasada2}/${Pasada3}/${Pasada4}/${Pasada5}/${Pasada6}.`;
} else {
    MedidasUnitarias = ``;
}



///////////////////////////////////////////////////////////////////////////

let CosteSubcontratacion = document.getElementById('CosteSubcontratacion').value;

if (CosteSubcontratacion > 0) {
    CosteSubcontratacion = `Costes de subcontratación: ${CosteSubcontratacion}€.
`;
} else {
    CosteSubcontratacion = ``;
}

let NumeroTintas = document.getElementById('NumeroTintas').value;
if (NumeroTintas > 0) {
    NumeroTintas = `Numero de Tintas: ${NumeroTintas}.
`;
} else {
    NumeroTintas = ``;
}

let PorcentajeImpresion = document.getElementById('PorcentajeImpresion').value;
if (PorcentajeImpresion > 0) {
    PorcentajeImpresion = `Porcentaje de impresión: ${PorcentajeImpresion}%.
`;
} else {
    PorcentajeImpresion = ``;
}

let CosteTroquel = document.getElementById('CosteTroquel').value;
if (CosteTroquel > 0) {
    CosteTroquel = `Costes de troquel: ${CosteTroquel}€ aprox.
`;
} else {
    CosteTroquel = ``;
}

let CosteCliche = document.getElementById('CosteCliche').value;
if (CosteCliche > 0) {
    CosteCliche = `Costes de cliché: ${CosteCliche}€ aprox.
`;
} else {
    CosteCliche = ``;
}
/* const ComentarioComercial = document.getElementById('ComentarioComercial').value;

let ComentarioComerciales2;

if (ComentarioComercial === "Comentarios") {
    ComentarioComerciales2 = ``;
} else {
    ComentarioComerciales2 = ComentarioComercial + "." + `
`;
} */

const CrearcionArticulo = document.getElementById("CrearcionArticulo").checked;

let DatosArticulo;

if (CrearcionArticulo) {
    const numeroArticulo = document.getElementById("numeroArticulo").value;
    const descricionArticulo = document.getElementById("descricionArticulo").value;
    
    DatosArticulo = `Se crea artículo: ` + numeroArticulo + " " + descricionArticulo + `
    `;
} else {
    DatosArticulo = ``;
}



//////////////////////////////////////////////////////////
//Cadena de texto
//////////////////////////////////////////////////////////
document.getElementById("contenedor").innerHTML = 
`${name}${Estructural}${Grafico}${GraficoColor}${MuestrasEnviadasCortadas2}`+
    `${MuestrasColor}${AnalisisCalidad2}`+
    `${PresupuestosSubcontratacion2}${EstudioCape2}`+
    `${EstudioOneA2}${ModificacionArticulo2}${DatosArticulo}` +
    MedidasInternas + MedidasUnitarias + `
    ${CosteSubcontratacion}${NumeroTintas}${PorcentajeImpresion}`+
    `${CosteTroquel}${CosteCliche}
    **************************************************`;
    
    /* window.open(
        `mailto:Rosa.Munoz@dssmith.com&
        CC=Amador.Alonso@dssmith.com, Fernando.Gomez@dssmith.com, Marco.Antonio.Mata@dssmith.com, Francisco.Millan@dssmith.com, Raquel.Montero@dssmith.com
        &body=soy la caña`
        ) */
if (nameError === "OT") {
    document.getElementById("textareaCopy").innerHTML =
    `<div class="Error activo">`+
    `<h3>Indica quien eres.</h3>`+
    `<img src="img/200.webp" alt="Este es un mensaje para que pongas tu nombre.">`+
     `</div>`
    }
    
}


function copiar() {
    
    var content = document.getElementById('contenedor');
    
    content.select();
    document.execCommand('Copy');
    
}
function articuloYa() {
    const activoarticulo = document.getElementById("ModificacionArticulo").checked;
    if (activoarticulo) {
        alert(`Gracias por poner el articulo en Docupoint ¡Ya!, antes de seguir.`);
    } 
}

function articuloNo() {
    alert(`Gracias por poner el articulo en Docupoint ¡Ya!, antes de seguir.`);
    document.getElementById("datosArticulo").innerHTML = 
    `<br>
    <p>Número de articulo: <input type="number"  id="numeroArticulo">   
    Descripción: <input type="text"  id="descricionArticulo"></p>
    `
}