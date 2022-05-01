const medidasBobinaDF = [
  {
    nombre: 1900,
    industrial: 1870,
    agricultura:{
      agriMax:1730,
      agriMin: 1700,
    },
  },
  {
    nombre: 2200,
    industrial: 2170,
    agricultura:{
      agriMax:2030,
      agriMin: 2000,
    },
  },
  {
    nombre: 2350,
    industrial: 2315,
    agricultura:{
      agriMax:2180,
      agriMin: 2150,
    },
  },
  {
    nombre: 2500,
    industrial: 2455,
    agricultura:{
      agriMax:2330,
      agriMin: 2300,
    },
  },
];

function fecha() {
  let hoy = new Date();

  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let agnio = hoy.getFullYear();

  let formatofecha = `${dia}/${mes}/ ${agnio}`;
  return { formatofecha };
}

function CalcularDF () {
  
    const anchoDF = Number(document.getElementById("AnchoDF").value);
    const largoDF = Number(document.getElementById("LargoDF").value);
    const copiasAnchoDF = Number(document.getElementById("copiasAnchoDF").value);
    const copiasLargoDF = Number(document.getElementById("copiasLargoDF").value);
    const CanalesDF = Number(document.getElementById("CanalDF").value);
    const ApDF = (anchoDF * copiasAnchoDF) + 20;
    const LpDF = (largoDF * copiasLargoDF) + 20;
    const {formatofecha} = fecha();
    const acopleBobina = Number(document.getElementById("acopleBobina").value);
    const datoBobina = ApDF * acopleBobina;
   //Esta función es solo para dar la ficha/////////////////

/////////////////////////////////////////////////////////

    const BobinaDF = medidasBobinaDF.find((size) => {
      if (datoBobina <= 1900) {
        elSize = 1900;
      } else if (datoBobina < 2200 && datoBobina >1900 ) {
        elSize = 2200;
      } else if (datoBobina < 2350 && datoBobina > 2200 ) {
        elSize = 2350;
      } else if (datoBobina < 2500 && datoBobina > 2350 ) {
        elSize = 2500;
      };
      return size.nombre === elSize;
    });
    const {nombre, industrial,agricultura:{agriMax,agriMin}} = BobinaDF;

    let minBobina;

    if (CanalesDF === 1) {
      minBobina = agriMax;
    } else if (CanalesDF === 2) {
      minBobina = agriMin
    }

   

    document.getElementById("ResultadosDF").innerHTML = 
    '<H2>Datos para Docupoint, plancha impresa:</H2>' + '<br>' +
    "Fecha: " + formatofecha + '<br>' +
    "Medidas pieza unitaria: " + (anchoDF) + " x " + (largoDF) + '<br>' +
    "Medidas de Plancha: " + '<span id="limiteBobina">'+ (ApDF) +'</span>' + " x " + (LpDF) +
    '<span id="optionBobina"></span>' + '<br>' +
    "Ruta:  Ond/ Dong Fang (UP31)" + '<br>' +
    /* "Nº de tintas: " + NTintas + '<br>' +
    "Coste de cliche: " + ((Premontaje + (CosteTotal*NTintas))/100).toFixed(2) + " €" + '<br>' + */
    '<span id="error1"></span>'+
    '<span id="error2"></span>'+
    '<span id="error3"></span>'+
    '<span id="error4"></span>'+
    '<span id="error5"></span>'+
    '<span id="error6"></span>'+ 
    "Convinación en  bobina" + '<span id="datosConvinacion"></span>' 
    ;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

if (minBobina > datoBobina && CanalesDF === 2) {
  document.getElementById("optionBobina").innerHTML = '<b> Opciones de acople</b>' + industrial / acopleBobina
} 

if (datoBobina > minBobina && datoBobina < industrial) {
  document.getElementById("datosConvinacion").innerHTML = " podría valer";
} else if (datoBobina > industrial && datoBobina < nombre) {
  document.getElementById("datosConvinacion").innerHTML = " Esto va mal, pero tiene remedio";
}else if (datoBobina > nombre) {
  document.getElementById("datosConvinacion").innerHTML = " Sigue rascando";
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

    console.log(industrial);
    console.log(minBobina);
    console.log(datoBobina);
    console.log(acopleBobina);
/*     document.getElementById("ResultadosDF").innerHTML =  nombre;
 */ 



}