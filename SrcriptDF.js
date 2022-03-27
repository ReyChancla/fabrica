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

function CalcularDF () {
  
    const anchoDF = Number(document.getElementById("AnchoDF").value);
    const largoDF = Number(document.getElementById("LargoDF").value);
    const copiasAnchoDF = Number(document.getElementById("copiasAnchoDF").value);
    const copiasLargoDF = Number(document.getElementById("copiasLargoDF").value);
    const CanalesDF = Number(document.getElementById("CanalDF").value);
    const ApDF = (anchoDF * copiasAnchoDF) + 20;
    const LpDF = (largoDF * copiasLargoDF) + 20;
   

    const BobinaDF = medidasBobinaDF.find((size) => {
      if (LpDF <= 1900) {
        elSize = 1900;
      } else if (LpDF < 2200 && LpDF >1900 ) {
        elSize = 2200;
      } else if (LpDF < 2350 && LpDF > 2200 ) {
        elSize = 2350;
      } else if (LpDF < 2500 && LpDF > 2350 ) {
        elSize = 2500;
      };
      return size.nombre === elSize;
    });
    const {nombre, industrial,agricultura:{agriMax,agriMin}} = BobinaDF;

    
    if (canalesDF = 1) {
      console.log("hola");
    } else if (canalesDF = 2) {
      console.log("Buenas");
    } else {
      console.log("adios!!!");
    };

    document.getElementById("ResultadosDF").innerHTML =
    '<h2>Datos para Docupoint</h2>' + '<br>' + 
    "Medidas de plancha: " + ApDF + " x " + LpDF + '<br>' +
    "Tamaño de la bobina: " + nombre + '<br><br>'   ;
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
    console.log(CanalesDF);
    console.log(industrial);
    console.log(nombre);
/*     document.getElementById("ResultadosDF").innerHTML =  nombre;
 */  }