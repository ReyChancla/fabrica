
function DatosCurioni() {
  //medidas plancha
  const ancho = Number(document.getElementById("anchoPlanchaCuri").value);
  const largo = Number(document.getElementById("largoPlanchaCuri").value);
//Medidas interiores
  const Ancho = Number(document.getElementById("largoPlanchaCuri").value);
  const Largo = Number(document.getElementById("largoPlanchaCuri").value);
  const Alto = Number(document.getElementById("largoPlanchaCuri").value);

  const NTintas = Number(document.getElementById("numerodetintas").value);
  const Coste = Number(document.getElementById("TipoDeIMpresion").value);
  const Premontaje = 0.0022;
  return{
    ancho,
    largo,
    Ancho,
    Largo,
    Alto,
    NTintas,
    Coste, 
    Premontaje
  };
}

//Esta función es solo para dar la ficha
function fecha() {
  let hoy = new Date();

  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let agnio = hoy.getFullYear();

  let formatofecha = `${dia}/${mes}/ ${agnio}`;
  return { formatofecha };
}

function planchaImpresa() {

  const{ancho, largo, NTintas, Coste,Premontaje}= DatosCurioni();
  const {formatofecha} = fecha();
  const CosteTotal = (ancho * largo) * Coste ;

  console.log(NTintas);
  console.log(Coste);


  document.getElementById("optionDatos").innerHTML = '<H2>Datos para Docupoint:</H2>' + '<br>' +
  "Fecha: " + formatofecha + '<br>' +
  "Medidas de Plancha: " + (ancho) + " x " + (largo) + '<br>' +
  "Ruta:  Ond/ Curioni (UP22)" + '<br>' +
  "Nº de Tintas: " + NTintas + '<br>' +
  "Coste de cliche: " + ((Premontaje + (CosteTotal*NTintas))/100).toFixed(2) + " €" + '<br>' +
  '<span id="error1"></span>'+
  '<span id="error2"></span>'+
  '<span id="error3"></span>'+
  '<span id="error4"></span>'+
  '<span id="error5"></span>'
  ;
  
  //////////////////
if (ancho < 350) {
  document.getElementById("error1").innerHTML = '<strong>' + "El ancho tiene un mínimo y un máximo de 350 y 1300 mm." + '</strong><br>'
}

if (ancho > 1300) {
  document.getElementById("error1").innerHTML = '<strong>' + "El ancho tiene un mínimo y un máximo de 350 y 1300 mm." + '</strong><br>'
}
if (largo > 2900) {
  document.getElementById("error2").innerHTML = '<strong>' + "El largo tiene un máximo de 2900 mm." + '</strong><br>'
}
if (NTintas < 1) {
  document.getElementById("error3").innerHTML = "Si no lleva impresión sale directa de Onduladora" + '<br>';
};

if (ancho > 1300) {
  document.getElementById("error4").innerHTML = "Esta plancha se fabrica con Skip Feed, sin limites" + '<br>';
};

if (ancho > 1250) {
  document.getElementById("error5").innerHTML = "Impresión máxima de cliché  1250 mm y una pantalla no superior a 1300 mm. " + "Reimprime a partir de 1335 mm" + '<br>';
};
//////////////////


};


function b1Pegada1() {
  document.getElementById("optionBox").innerHTML = '<H2>Datos de cualculo:</H2>' + '<br>'+
  '<input type="number" id="anchoPlanchaCuri" placeholder="Ancho de plancha"><b> x </b>'+
  '<input type="number" id="largoPlanchaCuri" placeholder="Largo de plancha">'
}

function b1Pegada2() {
  document.getElementById("optionBox").innerHTML = '<H2>Datos de cualculo:</H2>' + '<br>'+
  '<input type="number" id="largoCuri" placeholder="largo"><b> x </b>'+
  '<input type="number" id="anchoCuri" placeholder="ancho"><b> x </b>'+
  '<input type="number" id="altoCuri" placeholder="alto">';
}

function mediaCaja() {
  document.getElementById("optionBox").innerHTML = '<H2>Datos de cualculo:</H2>' + '<br>'+
  '<input type="number" id="largoCuri" placeholder="largo"><b> x </b>'+
  '<input type="number" id="anchoCuri" placeholder="ancho"><b> x </b>'+
  '<input type="number" id="altoCuri" placeholder="alto">';
}

function cajaTelescopica() {
  const ancho = Number(document.getElementById("anchoPlanchaCuri").value);
  const largo = Number(document.getElementById("largoPlanchaCuri").value);

  console.log(largo);
  console.log(ancho);

  document.getElementById("optionDatos").innerHTML = '<H2>Datos para Docupoint:</H2>' + '<br>' +
  "adios"
}

function Fefco409() {
  document.getElementById("optionBox").innerHTML = '<H2>Datos de cualculo:</H2>' + '<br>'+
  '<input type="number" id="anchoPlanchaCuri" placeholder="Ancho de plancha"><b> x </b>'+
  '<input type="number" id="largoPlanchaCuri" placeholder="Largo de plancha">'
}