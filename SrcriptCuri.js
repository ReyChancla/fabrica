
const DatosCanalesCurioni = [
  {
    nombre: "canalE",
    valoresDiferenciaMartin: {
      c1: 2,
      c2: 4,
      s: 30,
    },
    resta: 2,
  }, 
  {
    nombre: "canalB",
    valoresDiferenciaMartin: {
      c1: 3,
      c2: 5,
      s: 30,
    },
    resta: 3,
  },
  {
    nombre: "canalC",
    valoresDiferenciaMartin: {
      c1: 4,
      c2: 7,
      s: 30,
    },
    resta: 4,
  },
  {
    nombre: "canalEB",
    valoresDiferenciaMartin: {
      c1: 5,
      c2: 10,
      s: 40,
    },
    resta: 4,
  },
  {
    nombre: "canalBC",
    valoresDiferenciaMartin: {
      c1: 7,
      c2: 14,
      s: 40,
    },
    resta: 5,
  },
];

function datosCurioniHendidos() {
  const CanalCurioni = document.getElementById("CanalCurioni").value;
  const SelectGrade = DatosCanalesCurioni.find((grade) =>{
    return grade.nombre ===CanalCurioni
  });
  const {nombre, valoresDiferenciaMartin:{ c1, c2, s},resta} = SelectGrade;
  return {c1, c2, s, resta};
}

function DatosCurioni() {
  //medidas plancha
  const ancho = Number(document.getElementById("anchoPlanchaCuri").value);
  const largo = Number(document.getElementById("largoPlanchaCuri").value);
//Medidas interiores
  const Largo = Number(document.getElementById("largoCuri").value);
  const Ancho = Number(document.getElementById("anchoCuri").value);
  const Alto = Number(document.getElementById("altoCuri").value);

  const NTintas = Number(document.getElementById("numerodetintas").value);
  const Coste = Number(document.getElementById("TipoDeIMpresion").value);
  const canal = document.getElementById("CanalCurioni").value;
  const Premontaje = 0.0022;
  return{
    ancho,
    largo,
    Ancho,
    Largo,
    Alto,
    NTintas,
    Coste, 
    Premontaje,
    canal
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
  console.log(NTintas);


  document.getElementById("optionDatos").innerHTML = 
  '<H2>Datos para Docupoint, plancha impresa:</H2>' + '<br>' +
  "Fecha: " + formatofecha + '<br>' +
  "Medidas de Plancha: " + (ancho) + " x " + (largo) + '<br>' +
  "Ruta:  Ond/ Curioni (UP22)" + '<br>' +
  "Nº de tintas: " + NTintas + '<br>' +
  "Coste de cliche: " + ((Premontaje + (CosteTotal*NTintas))/100).toFixed(2) + " €" + '<br>' +
  '<span id="error1"></span>'+
  '<span id="error2"></span>'+
  '<span id="error3"></span>'+
  '<span id="error4"></span>'+
  '<span id="error5"></span>'+
  '<span id="error6"></span>'
  ;
  
  //////////////////
if (ancho < 350) {
  document.getElementById("error1").innerHTML =  "El ancho tiene un mínimo y un máximo de 350 y 1300 mm." + '<br>'
}

if (ancho > 1300) {
  document.getElementById("error1").innerHTML =  "El ancho tiene un mínimo y un máximo de 350 y 1300 mm." + '<br>'
}
if (largo > 2900) {
  document.getElementById("error2").innerHTML =  + "El largo tiene un máximo de 2900 mm." + '<br>'
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
  const{Ancho, Largo, Alto, NTintas, Coste, Premontaje, canal} = DatosCurioni();
  const {formatofecha} = fecha();
  const {c1,c2,s, resta} = datosCurioniHendidos();
////////////////////////////

console.log(canal);

////////////////////////////

  //Calculos de medidas//
const AnchoT = Ancho + c1;
const LargoT = Largo + c1;
const AltoT = Alto + c2;
const pestaña = s;
const solapa = Math.trunc(Ancho/2) + resta;
const anchoPlanchaCuri = AltoT + (solapa * 2);
const largoPlanchaCuri = (LargoT * 2) + (AnchoT * 2) + s;
  


  //////////////////////////////////////
  //////////////////////////////////////

  document.getElementById("optionDatos").innerHTML =
  '<h2>Datos para Curioni, B1 pegada en el ancho</h2><br>' + 
  "Fecha: " + formatofecha + '<br>' + 
  "Mididas de plancha: " + anchoPlanchaCuri + " x " + largoPlanchaCuri + '<br>' + 
  "Ruta: " + "Onduladora/ Curioni(UP22)" + '<span id="dobleRuta1"></span>' + '<span id="dobleRuta2"></span>' + '<br>' + 
  "Nº de tintas: " + NTintas + '<br>' + 
  "Coste de cliches: " + ((((anchoPlanchaCuri * largoPlanchaCuri)*NTintas)/100) * (Coste + Premontaje)).toFixed(2) + '<br>' + 
  '<span id="error1"></span>'+
  '<span id="error2"></span>'+
  '<span id="error3"></span>'+
  '<span id="error4"></span>'+
  '<span id="error5"></span>'+
  '<span id="error6"></span>'+
  '<span id="error7"></span>'+
  '<span id="error8"></span>'+
  '<span id="error9"></span>'


  //////////////////////////////////////
  //////////////////////////////////////
  if (AnchoT <= 205) {
    document.getElementById("error1").innerHTML = " Esta B1 devería de ser fabricada con la pestaña en el ancho. " + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21)";
  }
  if (AnchoT <= 250) {
    document.getElementById("error2").innerHTML = " Si va troquelada en el ancho con agujeros, ha de tener dos pasadas" + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21) ";
  }
  if (AnchoT <= 300) {
    document.getElementById("error3").innerHTML = " Si va troquelada en el ancho con asa, ha de tener dos pasadas" + '<br>';
    document.getElementById("dobleRuta2").innerHTML = " / Curioni(UP21) ";
  }
  if (LargoT > 1050) {
    document.getElementById("error4").innerHTML = "Fabricar con maquina abierta. " + '<br>';
    document.getElementById("dobleRuta2").innerHTML =  "/ Pegadora manual ";
  }
  if (anchoPlanchaCuri > 310 && anchoPlanchaCuri < 350) {
    document.getElementById("error5").innerHTML = "Esta caja solo puede ser anonima, sin impresión" + '<br>';
  }
  if (anchoPlanchaCuri > 1250) {
    document.getElementById("error6").innerHTML = "Desmontar tacos." + '<br>';
  }
  if (anchoPlanchaCuri > 1300) {
    document.getElementById("error6").innerHTML = "Desmontar tacos y  usar Skip Feed." + '<br>';
  }
  if ((AltoT + solapa) > 1300) {
    document.getElementById("error7").innerHTML = "Compensador de altura, No se pueden poner rendijas y asas troqueladas a la vez (dos pasadas)."
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21) ";
  }
  if ((AltoT + solapa) > 2000) {
    document.getElementById("error7").innerHTML = "Sobre pasa el ancho de plancha maximo." + '<br>';
  }
  if (canal === "canalE") {
    document.getElementById("error8").innerHTML = "El canal E,no se puede usar para este modelo";
    alert("Has usado un canal, que no puede ser usado para este modelo")
  }

  //////////////////////////////////////
  //////////////////////////////////////

}

function b1Pegada2() {
  const{Ancho, Largo, Alto, NTintas, Coste, Premontaje, canal} = DatosCurioni();
  const {formatofecha} = fecha();
  const {c1,c2,s, resta} = datosCurioniHendidos();
////////////////////////////

console.log(canal);

////////////////////////////

  //Calculos de medidas//
const AnchoT = Ancho + c1;
const LargoT = Largo + c1;
const AltoT = Alto + c2;
const pestaña = s;
const solapa = Math.trunc(Ancho/2) + resta;
const anchoPlanchaCuri = AltoT + (solapa * 2);
const largoPlanchaCuri = (LargoT * 2) + (AnchoT * 2) + s;
  


  //////////////////////////////////////
  //////////////////////////////////////

  document.getElementById("optionDatos").innerHTML =
  '<h2>Datos para Curioni, B1 pegada en el largo</h2><br>' + 
  "Fecha: " + formatofecha + '<br>' + 
  "Mididas de plancha: " + anchoPlanchaCuri + " x " + largoPlanchaCuri + '<br>' + 
  "Ruta: " + "Onduladora/ Curioni(UP22)" + '<span id="dobleRuta1"></span>' +
  '<span id="dobleRuta2"></span>' + '<span id="dobleRuta3"></span>' + '<br>' + 
  "Nº de tintas: " + NTintas + '<br>' + 
  "Coste de cliches: " + ((((anchoPlanchaCuri * largoPlanchaCuri)*NTintas)/100) * (Coste + Premontaje)).toFixed(2) +'<br>' + 
  '<span id="error1"></span>'+
  '<span id="error2"></span>'+
  '<span id="error3"></span>'+
  '<span id="error4"></span>'+
  '<span id="error5"></span>'+
  '<span id="error6"></span>'+
  '<span id="error7"></span>'+
  '<span id="error8"></span>'+
  '<span id="error9"></span>'+
  '<span id="error10"></span>'+
  '<span id="error11"></span>'


  //////////////////////////////////////
  //////////////////////////////////////
  if (LargoT > 1000) {
    document.getElementById("error1").innerHTML = " Fabricar con maquina abierta y pegar en pegadora manual" + '<br>';
    document.getElementById("dobleRuta2").innerHTML = " / Pegadora manual ";
  }
if (AnchoT < 70) {
    document.getElementById("error2").innerHTML = " Usar maquina abierta, dar doble pasada y pegado manual. " + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21)";
    document.getElementById("dobleRuta2").innerHTML =  "/ Pegadora manual ";
  }
  if (70 < AnchoT && 140 > AltoT) {
    document.getElementById("error3").innerHTML = " Ha de fabricarse con la maquina abierta y con pegado manual. Falsos endidos en caras largas" + '<br>';
    document.getElementById("dobleRuta2").innerHTML = " / Pegadora manual ";
  }
  if (AnchoT <= 250) {
    document.getElementById("error4").innerHTML = " Si va troquelada en el ancho con agujeros, ha de tener dos pasadas" + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21) ";
  }
  if (AnchoT <= 300) {
    document.getElementById("error5").innerHTML = " Si va troquelada en el ancho con asa, ha de tener dos pasadas" + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21) ";
  }
  if (anchoPlanchaCuri > 310 && anchoPlanchaCuri < 350) { 
    document.getElementById("error6").innerHTML = "Esta caja solo puede ser anonima, sin impresión" + '<br>';
  }
  if (anchoPlanchaCuri > 1250) {
    document.getElementById("error7").innerHTML = "Desmontar tacos." + '<br>';
  }
  if (anchoPlanchaCuri > 1300) {
    document.getElementById("error7").innerHTML = "Desmontar tacos y  usar Skip Feed." + '<br>';
  }
  if ((AltoT + solapa) > 1300) {
    document.getElementById("error8").innerHTML = "Compensador de altura, No se pueden poner rendijas y asas troqueladas a la vez (dos pasadas)."
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21) ";
  }
  if ((AltoT + solapa) > 2000) {
    document.getElementById("error8").innerHTML = "Sobre pasa el ancho de plancha maximo." + '<br>';
  }
  if (largoPlanchaCuri > 3000) {
    document.getElementById("error10").innerHTML = "Esta caja sobre pasa el maximo de ancho de plancha";
  }
  if (largoPlanchaCuri > 2900) {
    document.getElementById("error10").innerHTML = "No puede sobrepasar los 2900 mm de impresión.";
  }
if (canal === "canalE") {
    document.getElementById("error11").innerHTML = "El canal E,no se puede usar para este modelo";
    alert("El canal E no se puede usar para este modelo");
  }

  //////////////////////////////////////
  //////////////////////////////////////
}

function mediaCaja() {
  const{Ancho, Largo, Alto, NTintas, Coste, Premontaje, canal} = DatosCurioni();
  const {formatofecha} = fecha();
  const {c1,c2,s, resta} = datosCurioniHendidos();
////////////////////////////

/* console.log(canal); */

////////////////////////////

  //Calculos de medidas//
const AnchoT = Ancho + c1;
const LargoT = Largo + c1;
const AltoT = Alto + c2;
const pestaña = s;
const solapa = Math.trunc(Ancho/2) + resta;
const anchoPlanchaCuri = AltoT + (solapa * 2);
const largoPlanchaCuri = (LargoT + AnchoT) + s;
console.log(anchoPlanchaCuri);
  


  //////////////////////////////////////
  //////////////////////////////////////

  document.getElementById("optionDatos").innerHTML =
  '<h2>Datos para Curioni, Media Caja</h2><br>' + 
  "Fecha: " + formatofecha + '<br>' + 
  "Mididas de plancha: " + anchoPlanchaCuri + " x " + largoPlanchaCuri + '<br>' + 
  "Ruta: " + "Onduladora/ Curioni(UP22)" + '<span id="dobleRuta1"></span>' +
  '<span id="dobleRuta2"></span>' + '<span id="dobleRuta3"></span>' + "/Pegadora" + '<br>' + 
  "Nº de tintas: " + NTintas + '<br>' + 
  "Coste de cliches: " + ((((anchoPlanchaCuri * largoPlanchaCuri)*NTintas)/100) * (Coste + Premontaje)).toFixed(2) +'<br>' + 
  '<span id="error1"></span>'+
  '<span id="error2"></span>'+
  '<span id="error3"></span>'+
  '<span id="error4"></span>'+
  '<span id="error5"></span>'+
  '<span id="error6"></span>'+
  '<span id="error7"></span>'+
  '<span id="error8"></span>'+
  '<span id="error9"></span>'+
  '<span id="error10"></span>'+
  '<span id="error11"></span>'


  //////////////////////////////////////
  //////////////////////////////////////
  if (AnchoT < 205) {
    document.getElementById("error1").innerHTML = " Dar doble pasada. " + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21)";
  }
  if (AnchoT < 250) {
    document.getElementById("error2").innerHTML = " Si tiene agujeros en el ancho, dar dos pasadas " + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21)";
  }
  if (AnchoT < 300) {
    document.getElementById("error3").innerHTML = " Si tiene asas en el ancho, dar dos pasadas " + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21)";
  }
  if (310 < anchoPlanchaCuri && anchoPlanchaCuri< 350) {
    document.getElementById("error4").innerHTML = " Esta caja ha de ser anonima, sin impresión" + '<br>';
  }
  if (anchoPlanchaCuri > 1300) {
    document.getElementById("error5").innerHTML = " Skip Feed" + '<br>';
  }
  if ((AltoT + solapa) >1300) {
    document.getElementById("error5").innerHTML = " Skip Feed" + '<br>' + 
    " Usar compensador de altura" + '<br>' +
    " No se puede hacer rendijas y asas a la vez. Requiere dos pasadas" + '<br>';
    document.getElementById("dobleRuta1").innerHTML = " / Curioni(UP21)";
  }
  if (anchoPlanchaCuri > 2000) {
    document.getElementById("error5").innerHTML = " La plancha supera el maximo del ancho " + '<br>';
  }
  if (canal === "canalE") {
   alert("El canal E, no se puede usar en este modelo de cajas");
  }

}

function cajaTelescopica() {
  
  const{Ancho, Largo, Alto, NTintas, Coste, Premontaje, canal} = DatosCurioni();
  const {formatofecha} = fecha();
  const {c1,c2,s, resta} = datosCurioniHendidos();
  /*------------------------------------
  Datos de construccion
  ------------------------------------*/

  const anchoTele = Ancho + c2 - parseInt(c1 / 2);
  const largoTele = Largo + c1;
  const altoTele = Alto + parseInt(c1 / 2);

  const anchoTeleTotal = anchoTele + (altoTele)*2;
  const largoTeleTotal = largoTele + (altoTele)*2;
  


  /*------------------------------------
  Pruebas 
  ------------------------------------*/

  console.log(anchoTele);
  console.log(largoTele);
  console.log(altoTele);

  /*------------------------------------
  Datos de fabricación
  ------------------------------------*/
  
  document.getElementById("optionDatos").innerHTML =
  '<h2>Datos para Curioni, Media Caja</h2><br>' + 
  "Fecha: " + formatofecha + '<br>' + 
  "Mididas de plancha: " + anchoTeleTotal + " x " + largoTeleTotal + '<br>' + 
  "Ruta: " + "Onduladora/ Curioni(UP22)" + '<span id="dobleRuta1"></span>' +
  '<span id="dobleRuta2"></span>' + '<span id="dobleRuta3"></span>' + '<br>' + 
  "Nº de tintas: " + NTintas + '<br>' + 
  "Coste de cliches: " + ((((anchoTeleTotal * largoTeleTotal)*NTintas)/100) * (Coste + Premontaje)).toFixed(2) +'<br>' + 
  '<span id="error1"></span>'+
  '<span id="error2"></span>'+
  '<span id="error3"></span>'+
  '<span id="error4"></span>'+
  '<span id="error5"></span>'+
  '<span id="error6"></span>'+
  '<span id="error7"></span>'+
  '<span id="error8"></span>'+
  '<span id="error9"></span>'+
  '<span id="error10"></span>'+
  '<span id="error11"></span>';

  /*------------------------------------
  Respuestas
  ------------------------------------*/

  document.getElementById("error11").innerHTML = "Hay que esperar a que termine esta parte";
}

function Fefco409() {
  document.getElementById("optionDatos").innerHTML = '<div id=error1>Hay que esperar a que termine esta parte</div>'
}