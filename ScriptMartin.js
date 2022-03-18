const ValoresPreciosCliche = [
  {
    nombre: "Resumen",
    Premontaje: 0.0022,
    TipoCliche: {
      liquido432:0.01586,
      liquido600:0.0115,
      solido600:0.0195,
      solido432:0.018,
      foam:0.024,
    }
  },
  {
    nombre: "Euroflexo",
    Premontaje: 0.0022,
    TipoCliche: {
      liquido432:0.01586,
      liquido600:0.0115,
      solido600:0.0195,
      solido432:0.018,
      foam:0,
      solidoHD284:0,
    }
  },
  {
    nombre: "Diflex",
    Premontaje: 0.002,
    TipoCliche: {
      liquido432:0.012,
      liquido600:0.012,
      solido600:0.0,
      solido432:0.018,
      foam:0.004,
      solidoHD284:0.02,
    }
  },
  {
    nombre: "Globalflexo",
    Premontaje: 0.002,
    TipoCliche: {
      liquido432:0.012,
      liquido600:0.012,
      solido600:0.0,
      solido432:0.018,
      foam:0.004,
      solidoHD284:0.02,
    }
  }
]
const DatosCanalesMartin = [
    {
      nombre: "canalB",
      valoresDiferenciaMartin: {
        c1: 3,
        c2: 5,
        s: 30,
      },
      resta: 0,
    },
    {
      nombre: "canalC",
      valoresDiferenciaMartin: {
        c1: 4,
        c2: 7,
        s: 30,
      },
      resta: 0,
    },
    {
      nombre: "canalEB",
      valoresDiferenciaMartin: {
        c1: 5,
        c2: 10,
        s: 40,
      },
      resta: -2,
    },
    {
      nombre: "canalBC",
      valoresDiferenciaMartin: {
        c1: 7,
        c2: 14,
        s: 40,
      },
      resta: -4,
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


function calcularEntreHendidos() {
    document.getElementById("optionEntreHendidos").innerHTML = `<br><br><div class="datosEntreHendidos" id="calcularEntreHendidos"> <select id="canalesMartin"> <option value="canalB">Canal B</option> <option value="canalC">Canal C</option> <option value="canalEB">Canal EB</option> <option value="canalBC">Canal BC</option> </select> <input type="number" id="largoEntreHendidos" placeholder="largo"><b> x </b> <input type="number" id="anchoEntreHendidos" placeholder="ancho"><b> x </b> <input type="number" id="altoEntreHendidos" placeholder="alto"> <input type="button" value="Calcular" onclick="enviarTexto()"> </div>` 
}

function enviarTexto() {
    const anchoEntreHendidos = document.getElementById("anchoEntreHendidos").value;
    const largoEntreHendidos = document.getElementById("largoEntreHendidos").value;
    const altoEntreHendidos = document.getElementById("altoEntreHendidos").value;
    const {c1, c2, s} = datosMartinHendidos();
  

    document.getElementById("anchoMartin").value = anchoEntreHendidos - c1;
    document.getElementById("largoMartin").value = largoEntreHendidos - c1;
    document.getElementById("altoMartin").value = altoEntreHendidos - c2;
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
 


/////////////////////////////////////////////////
/////////////////////////////////////////////////

// Datos ontenidos de los diferentes Input de la web
function datosMartin() {
  const trim = document.getElementById("trimMasa").checked
  const tiras = document.getElementById("tirasArrastre").checked
  const m200 = document.getElementById("m200").checked;
  const m201 = document.getElementById("m201").checked;
  const m203 = document.getElementById("m203").checked;
  const canalesMartin = document.getElementById("canalesMartin2").value;
  const largo = Number(document.getElementById("largoMartin").value);
  const ancho = Number(document.getElementById("anchoMartin").value);
  const alto = Number(document.getElementById("altoMartin").value);
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

  const PreciosCliche = ValoresPreciosCliche.find((precio) => {
    return precio.nombre === costeCliche;
  });
  const {TipoCliche: {liquido432, liquido600, solido432, solido600, foam, solidoHD284},} = PreciosCliche;
  const {Premontaje} = PreciosCliche;
  const {TipoCliche} = PreciosCliche;
  return {
    trim,
    tiras,
    m200,
    m203,
    canalesMartin,
    largo,
    ancho,
    alto,
    costeCliche,
    NumeroCliches,
    c1,
    c2,
    s,
    TipoCliche,
    liquido432,
    liquido600,
    solido600,
    solido432,
    foam,
    solidoHD284,
    Premontaje,
    TipoDeIMpresión,
    nombre,
    resta,
  };
}
// Esta es la función primaria que elige el tipo de caja

function CalcularDatosMartin() {
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

//Esta parte contiene la interación del boton, segun el tipo de caja
//Parte 1 B1

function CalcularDatosMartin201() {
  const {
    trim,
    tiras,
    canalesMartin,
    largo,
    ancho,
    alto,
    costeCliche,
    NumeroCliches,
    c1,
    c2,
    s,
    Premontaje,
    TipoCliche,
    liquido432,
    liquido600,
    solido600,
    solido432,
    foam,
    solidoHD284,
    TipoDeIMpresión,
    nombre,
    resta,
  } = datosMartin();
  const coste = [TipoCliche, liquido432, liquido600, solido600, solido432, foam, solidoHD284,]
  const { formatofecha } = fecha();
  const Tlargo = largo + c1;
  const Tancho = ancho + c1;
  const Talto = alto + c2;
  const pestaña = s;
  const L = (Tancho + Tlargo) * 2 + pestaña;
  const H = (Tancho + Tlargo) * 2;
  const I = Talto + Tancho + c1 + resta;
  const B1Cerrada = Tlargo + Tancho;
  const E = ancho / 2;
  const F = Talto;
/////////
console.log(resta);
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

//////////
  if (extrax >= 800 && extrax <= 2400) {
  } else {
    console.log("valor L incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  ///////////////////////////////////////////////////////////////
  if (H >= 775 && H <= 2200) {
  } else {
    console.log("valor H incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  //////////////////////////////////////////////////////
  if (I >= 300 && I <= 900) {
  } else if (I >= 901 && I <= 1000) {
    document.getElementById("OpcionCurinioni").innerHTML =
      '<p><strong>Notas:</strong>  **Esta caja puede ser fabricada por Martin, pero con Sky Feed,<br>se recomienda fabricar en Curioni"**</p>';
  } else {
    console.log("valor I incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  //////////////////////////////////////////////////////
  if (Tancho >= 120 && Tancho <= 950) {
  } else {
    console.log("valor ancho incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  /////////////////////////////////////////////////////////
  if (Tlargo >= 250 && Tlargo <= 1080) {
  } else {
    console.log("valor largo incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  /////////////////////////////////////////////////////////////
  if (B1Cerrada >= 400 && B1Cerrada <= 1100) {
  } else {
    console.log("valor caja cerrada incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  ///////////////////////////////////////////////////////////////
  if (E >= 0 && E <= 300) {
  } else {
    console.log("valor E incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }
  ////////////////////////////////////////////////////////////////////
  if (F >= 100 && F <= 800) {
  } else {
    console.log("valor F incorrecto");
    document.getElementById("errorMedidas").innerHTML =
      "Esta caja no se puede fabricar, por medidas.";
    document.getElementById("errorMedidas").style.background = "red";
  }

  //Alerta de error
  document.getElementById("aparecer").style.opacity = "1";
  //Fecha
  document.getElementById("elemento1").innerHTML = "  " + formatofecha;
  //Medidas Internas
  document.getElementById("elemento2").innerHTML =
    "  " + largo + " x " + ancho + " x " + alto;
  // Total de Plancha
  document.getElementById("elemento3").innerHTML = "  " + I + " x " + extrax;
  //Ruta
  document.getElementById("elemento4").innerHTML = "  Ond / Martin";
  //Coste del cliche
  document.getElementById("elemento5").innerHTML =
    "  " +
    ((((Tancho + Tlargo) * 2 * (Talto + Tancho + c1) * ((coste[TipoDeIMpresión]) + Premontaje)) /100) *NumeroCliches).toFixed(2) +" €";
  //Numero de tintas
  document.getElementById("elemento6").innerHTML = "  " + NumeroCliches;
  // document.getElementById("elemento7").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
  // document.getElementById("elemento8").innerHTML = ("  ") + Tancho + (" x ") + Tlargo + (" x ") + Talto;
}

function CalcularDatosMartin200() {
  alert("El atractivo programador necesita más tiempo");
}

function CalcularDatosMartin203() {
  alert("Conformate ahora mismo con hacer B1");
}

