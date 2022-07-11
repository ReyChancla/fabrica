/* ------------------------------------------
              Datos recursivos
------------------------------------------ */

const DatosCanalesMartin = [
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
  
function datosMartinHendidos() {
  const canalesMartin = document.getElementById("canalesMartin").value;
  const SelectGrade = DatosCanalesMartin.find((grade) => {
        return grade.nombre === canalesMartin
    });

    const {nombre, valoresDiferenciaMartin: { c1, c2, s},resta} = SelectGrade;

    return {
      c1, c2, s
    }
}

//Esta función es solo para dar la ficha
function fecha() {
  let hoy = new Date();

  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let agnio = hoy.getFullYear();

  let formatofecha = `${dia}-${mes}-${agnio}`;
  return { formatofecha };
}

function optionExtra() {
  if (document.getElementById("trimMasa").checked === true && document.getElementById("tirasArrastre").checked === false){
      let extrax = 10;
  } else if (document.getElementById("trimMasa").checked === false && document.getElementById("tirasArrastre").checked === true) {
      let extrax = 15;
  } else if (document.getElementById("trimMasa").checked === false && document.getElementById("tirasArrastre").checked === false) {
    let extrax = 0;
  }
};

// Datos ontenidos de los diferentes Input de la web
function datosMartin() {
  const trim = document.getElementById("trimMasa").checked
  const tiras = document.getElementById("tirasArrastre").checked
  const m200 = document.getElementById("m200").checked;
  const m201 = document.getElementById("m201").checked;
  const m203 = document.getElementById("m203").checked;
  const canalesMartin = document.getElementById("canalesMartin2").value;

  /* const costeCliche = document.getElementById("Proveedor").value; */
  const costeCliche = "Resumen";
  const NumeroCliches = parseInt(document.getElementById("numerodetintas").value);
  const TipoDeIMpresión = Number(document.getElementById("TipoDeIMpresión").value);
  
  const SelectGrade = DatosCanalesMartin.find((grade) => {
    return grade.nombre === canalesMartin
  });
  const {
    nombre,
    valoresDiferenciaMartin: { c1, c2, s },resta,
  } = SelectGrade;
  

 
  /* Calculo de tipo de medidas */
  const medidasInternas = document.getElementById("medidasInternas").checked;
  const medidasEntreHendidos = document.getElementById("medidasdEntreHendidos").checked;
  const medidasExternas = document.getElementById("medidasExternas").checked;

  const largo1 = Number(document.getElementById("largoMartin").value);
  const ancho1 = Number(document.getElementById("anchoMartin").value);
  const alto1 = Number(document.getElementById("altoMartin").value);

  const porcentajeTinta = Number(document.getElementById("PorcentajeTinta").value);



  return {
    trim,
    tiras,
    m200,
    m203,
    canalesMartin,
    largo1,
    ancho1,
    alto1,
    costeCliche,
    NumeroCliches,
    c1,
    c2,
    s,
    TipoDeIMpresión,
    nombre,
    resta,
    medidasEntreHendidos,
    medidasExternas,
    medidasInternas,
    porcentajeTinta,
  };
}
// Esta es la función primaria que elige el tipo de caja

/* function CalcularDatosMartin() {
  const { m200, m201, m203 } = datosMartin();

  if (m200) {
    CalcularDatosMartin200();
  } else if (m201) {
    CalcularDatosMartin201();
  } else if (m203) {
    console.log(203);
  } else {
    CalcularDatosMartin201();
  }
} */
//Esta función es solo para dar la ficha
function fecha() {
  let hoy = new Date();

  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let agnio = hoy.getFullYear();

  let formatofecha = `${dia}/${mes}/${agnio}`;
  return { formatofecha };
}

//Esta parte contiene la interación del boton, segun el tipo de caja
//Parte 1 B1

function CalcularDatosMartin() {
  const {
    trim,
    tiras,
    canalesMartin,
    largo1,
    ancho1,
    alto1,
    costeCliche,
    NumeroCliches,
    c1,
    c2,
    s,
    TipoDeIMpresión,
    nombre,
    resta,
    medidasEntreHendidos,
    medidasInternas,
    medidasExternas,
    porcentajeTinta,
  } = datosMartin();
  //////////////////////////////////
  let largo;
  let ancho;
  let alto;

  if (medidasInternas) {
    ancho = 0 + ancho1;
    largo = 0 + largo1;
    alto = 0 + alto1;
  } else if (medidasEntreHendidos) {
    ancho = 0 + ancho1 - c1;
    largo = 0 + largo1 - c1;
    alto = 0 + alto1 - c2;
  } else if(medidasExternas) {
    ancho = 0 + ancho1 - (c1*2);
    largo = 0 + largo1 - (c1*2);
    alto = 0 + alto1 - (c2*2);
  } else {
    ancho = 0 + ancho1;
    largo = 0 + largo1;
    alto = 0 + alto1;
  }




  //////////////////////////////////////////

  const { formatofecha } = fecha();
  const Tlargo = largo1 + c1;
  const Tancho = ancho1 + c1;
  const Talto = alto1 + c2;
  const pestaña = s;
  const L = (Tancho + Tlargo) * 2 + pestaña;
  const H = (Tancho + Tlargo) * 2;
  let solapa = Math.trunc(ancho/2) + resta;
  ////////////////////////////////////////////////////////////
  const { m200, m201, m203 } = datosMartin();
  let solapa2;
  if (m200) {
    solapa2 = solapa - c2;
  } else if (m201) {
    solapa2 = solapa * 2;
  } else if (m203) {
    solapa2 = ancho * 2;
  } else {
    solapa2 = solapa * 2;
  }
  ////////////////////////////////////////////////////////////
  const I = Talto + (solapa2);
  const B1Cerrada = Tlargo + Tancho;
  const E = ancho / 2;
  const F = Talto;
console.log(I);
console.log(largo + "x" + ancho + "x" + alto);
console.log(solapa2);
console.log(solapa);

/////////
let extrax;
if (trim === true && tiras === false){
   extrax = L+10;
} else if (trim === false && tiras === true) {
   extrax = L+15;
} else if (trim === false && tiras === false) {
   extrax = L+0;
}
else if (trim === true && tiras === true) {
  extrax = L+15;
}

////////////////////////////////////////////////////////////////////////
document.getElementById("aparecer").innerHTML =
`<h2>Datos para Docupoint</h2>
<article id="TextToCopy">
  <span id="errorMedidas"></span>
  <span id="OpcionCurinioni"></span>
  <br>
    <b>Fecha:</b>
    <span id="elemento1"></span>
  <br>
    <b>Medidas internas:</b>
    <span id="elemento2"></span>
  <br>
    <b>Total de placha:</b>
    <span id="elemento3"></span>
  <br>
    <b>Ruta:</b>
    <span id="elemento4"></span>
  <br>
    <b>Coste de cliché:</b>
    <span id="elemento5"></span>
  <br>
    <b>Número de tintas:</b>
    <span id="elemento6"></span>
  <br>
    <b>Porcentaje de impresión:</b>
    <span id="elemento7"></span>
<br>

  </article>
  <span id="error1"></span>
  <span id="error2"></span>
  <span id="error3"></span>
  <span id="error4"></span>
  <span id="error5"></span>
  <span id="error6"></span>
  <span id="error7"></span>
  <span id="error8"></span>
  <span id="error9"></span>
  <span id="error10"></span>
  <span id="error11"></span>`;

///////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////
  if (extrax <= 750) {
    document.getElementById("error1").innerHTML =
    '<br>' + "El largo de plancha es inferior al mínimo de 750mm" + '<br>';
  } else if (extrax >= 2400) {
    document.getElementById("error1").innerHTML =
    "El largo de la plancha es superior al máximo de 2400mm" + '<br>';
  }
  ///////////////////////////////////////////////////////////////
  if (H <= 720) {
    document.getElementById("error2").innerHTML =
    "La suma de los paneles es inferior al mínimo de 720mm" + '<br>';
  } else if (H >= 2200) {
    document.getElementById("error2").innerHTML =
    "La suma de los paneles es superior al máximo de 2200mm" + '<br>';
  }
  //////////////////////////////////////////////////////
  if (I <= 300) {
    document.getElementById("error3").innerHTML =
    "El ancho de plancha es inferior al mínimo de 300mm" + '<br>';
  } else if (I >= 900) {
    document.getElementById("error3").innerHTML =
    "El ancho de plancha es superior a 900mm." + '<br>' +
    "Se recomienda cambiar a Curioni, sino usar Sky Feed" +'<br>' ;
  } else if (I >= 1000) {
    document.getElementById("error3").innerHTML =
    "El ancho de plancha es superior al máximo de 1000mm" + '<br>';
  }
  //////////////////////////////////////////////////////
  if (Tancho <= 120) {
    document.getElementById("error4").innerHTML =
    "El ancho de la caja es inferior al mínimo de 120mm" + '<br>';
  } else if (Tancho >= 950) {
    document.getElementById("error4").innerHTML =
    "El ancho de la caja es superior al máximo de 950mm" + '<br>';
  }
  /////////////////////////////////////////////////////////
  if (Tlargo <= 120) {
    document.getElementById("error5").innerHTML =
    "El largo de la caja es inferior al mínimo de 120mm" + '<br>';
  } else if (Tlargo >= 1080) {
    document.getElementById("error5").innerHTML =
    "El largo de la caja es superior al máximo de 1080mm" + '<br>';
  }
  /////////////////////////////////////////////////////////////
  if (B1Cerrada <= 360) {
    document.getElementById("error6").innerHTML =
    "La caja plegada es inferior al mínimo de 360mm" + '<br>';
  } else if (B1Cerrada >= 1100) {
    document.getElementById("error6").innerHTML =
    "La caja plegada es superior al máximo de 1100mm" + '<br>';
  }
  ///////////////////////////////////////////////////////////////
  if (E >= 300) {
    document.getElementById("error7").innerHTML =
    "La solapa es superior al máximo de 300mm de rendija" + '<br>';
  }
  ////////////////////////////////////////////////////////////////////
  if (F <= 100) {
    document.getElementById("error8").innerHTML = 
    "El alto de la caja es inferior al minimo de 100mm" + '<br>';
  } else if (F > 100 && F <= 450 ) {
    document.getElementById("error8").innerHTML =
    "La impresión de la caja ha de llevar tiras de arrastre" + '<br>';
  }else if (F >= 800) {
    document.getElementById("error8").innerHTML =
    "El alto de la caja es superior al máximo de 800mm " + '<br>';
  }

  //Fecha
  document.getElementById("elemento1").innerHTML = "  " + formatofecha;
  //Medidas Internas
  document.getElementById("elemento2").innerHTML =
    "  " + largo + " x " + ancho + " x " + alto;
  // Total de Plancha
  document.getElementById("elemento3").innerHTML = "  " + I + " x " + extrax;
  //Ruta
  document.getElementById("elemento4").innerHTML = "  Ond / Martin (UP21)";
  //Coste del cliche
  document.getElementById("elemento5").innerHTML =
    "  " +
    ((((((Tancho + Tlargo) * 2) * (Talto + Tancho + c1) )*
    (TipoDeIMpresión + 0.0022)) /100) *
    NumeroCliches).toFixed(2) +" €";
  //Numero de tintas
  document.getElementById("elemento6").innerHTML = "  " + NumeroCliches;
  // Porcentaje de impresión
  document.getElementById("elemento7").innerHTML = "  " + porcentajeTinta + " %";

/* --------------------------------------------------
              MAXIMOS Y MINIMOS DE MAQUINA
-------------------------------------------------- */



/* --------------------------------------------------
                    Pruebas
-------------------------------------------------- */


/* document.getElementById("paletizado").innerHTML = 
'<br><input type="button" value="paletizado" onclick="paletizado()">'

}

function paletizado() {
  console.log("hola");*/
} 
