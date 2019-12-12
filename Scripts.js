//Ejercicio 2 Objetos necesarios para el ejercicio
class UsuarioWeb{
  constructor(login,contraseña,nombre,DNI){
    this._login = login;
    this._contraseña = contraseña;
    this._nombre = nombre;
    this._DNI = DNI;
  }

}
class UsuarioGestor extends UsuarioWeb{
  constructor(login,contraseña,nombre,DNI){
    super(login,contraseña,nombre,DNI);

  }
}
class UsuarioCliente extends UsuarioWeb{
  constructor(login,contraseña,nombre,DNI,peso,altura,edad,sexo){
    super(login,contraseña,nombre,DNI);
    this._peso = peso;
    this._altura = altura;
    this._edad = edad;
    this._sexo = sexo;

  }
}
class Empleados{
  constructor(nombre,DNI,telefono){
    this._DNI = DNI;
    this._nombre = nombre;
    this._telefono = telefono;

  }
  get descripcion(){
    return("El DNI del empleado es: "+this._DNI+" Se llama: "+this._nombre+ " Con telefono: "+this._telefono );
  }
}
class monitores extends Empleados{
  constructor(nombre,DNI,telefono,actividades,nsesiones){
    super(nombre,DNI,telefono);
    this._actividades = actividades;
    this._nsesiones = nsesiones;

    
  }
}
class fisios extends Empleados{
  constructor(nombre,DNI,telefono){
    super(nombre,DNI,telefono);
  }
  
}
function recoger() {
    var f =document.forms["f1"];
    nombreM = f.elements["nombre"].value;
    DNIM = f.elements["DNI"].value;
    telefonoM = f.elements["telefono"].value;
    actividadesM = f.elements["actividades"].value;
    nsesionesM = f.elements["nsesiones"].value;
    

    
    
}

/* 
function newarticulo() {
      var newtr = document.createElement("tr"); 
    var f=document.forms["formarticulos"];
    codigoA = f.elements["codigo"].value;
    nombreA = f.elements["nombre"].value;

    localizacionA = f.elements["localizacion"].value;

    precioA = f.elements["precio"].value;
    duracionA = f.elements["duracion"].value;
    var fecha = /^([012]?[1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    fechaA = f.elements["fecha"].value;
    if(fecha.test(fechaA)){
        fechaA = f.elements["fecha"].value;
    }else{
        fechaA =new Date();
    }
   
    if( f.elements["duracion"].value == null ||f.elements["duracion"].value == "" ){
        producto = new Articulo( codigoA,nombreA,localizacionA,precioA);

		var newtd = document.createElement("td"); 
        var newContent = document.createTextNode(nombreA);
        newtd.appendChild(newContent);
		newtr.appendChild(newtd);
        var newtd2 = document.createElement("td"); 
        var newContent2 = document.createTextNode(codigoA);
        newtd2.appendChild(newContent2);
        newtr.appendChild(newtd2);
        var newtd3 = document.createElement("td"); 
        var newContent3 = document.createTextNode(localizacionA);
        newtd3.appendChild(newContent3);
        newtr.appendChild(newtd3);
        var newtd4 = document.createElement("td"); 
        var newContent4 = document.createTextNode(precioA);
        newtd4.appendChild(newContent4);
        newtr.appendChild(newtd4);
        
        document.getElementById("tabla").appendChild(newtr);
    }else{
        producto = new ProductoFresco( codigoA,nombreA,localizacionA,precioA,fechaA,duracionA);

		var newtd = document.createElement("td"); 
        var newContent = document.createTextNode(nombreA);
        newtd.appendChild(newContent);
		newtr.appendChild(newtd);
        var newtd2 = document.createElement("td"); 
        var newContent2 = document.createTextNode(codigoA);
        newtd2.appendChild(newContent2);
        newtr.appendChild(newtd2);
        var newtd3 = document.createElement("td"); 
        var newContent3 = document.createTextNode(localizacionA);
        newtd3.appendChild(newContent3);
        newtr.appendChild(newtd3);
        var newtd4 = document.createElement("td"); 
        var newContent4 = document.createTextNode(precioA);
        newtd4.appendChild(newContent4);
        newtr.appendChild(newtd4);
        var newtd5 = document.createElement("td"); 
        var newContent5 = document.createTextNode(fechaA);
        newtd5.appendChild(newContent5);
        newtr.appendChild(newtd5);
        var newtd6 = document.createElement("td"); 
        var newContent6 = document.createTextNode(duracionA);
        newtd6.appendChild(newContent6);
        newtr.appendChild(newtd6);
        
        document.getElementById("tabla").appendChild(newtr);
    }
   
  
    art.push(producto);
    opciones(producto);
}
window.onload = inicializar;
*/




//Scripts de lo referente a las tablas Separados por pagina HTML

//PRimera tabla que genera los deportes
function deportes() {

  var dias = new Array();
  dias.push([""]);
  dias.push(["Lunes"]);
  dias.push(["Martes"]);
  dias.push(["Miércoles"]);
  dias.push(["Jueves"]);
  dias.push(["Viernes"]);
  dias.push(["Sábado"]);


  var deportes = new Array();

  deportes.push(["Futbol"]);
  deportes.push(["Baloncesto"]);
  deportes.push(["Yoga"]);
  deportes.push(["Tenis"]);
  //Usamos los arrays para rellenar la tabla usadno un cntador interno que recorre el array y empieza de manera aleatoria

  var tabla = document.createElement("TABLE");
  tabla.border = "2";
  var columna = tabla.insertRow(-1);


  for (var i = 0; i < 7; i++) {
    var tableHeader = document.createElement("TH");
    tableHeader.innerHTML = dias[i];
    columna.appendChild(tableHeader);
  }

  var contador = 0;
  var horaInicial = 7;
  for (var i = 0; i < 7; i++) {
    columna = tabla.insertRow(-1);
    contador = 0;

    for (var j = 0; j < 7; j++) {
      var random = Math.floor(Math.random() * 4);


      if (contador == 0) {
        tableHeader = document.createElement("td");
        tableHeader.innerHTML = horaInicial + ":00-" + (horaInicial + 2) + ":00";
        columna.appendChild(tableHeader);
        contador++;
        horaInicial = horaInicial + 2;

      } else {
        columna.appendChild(tableHeader);
        tableHeader = document.createElement("td");
        tableHeader.innerHTML = deportes[random];
        columna.appendChild(tableHeader);
      }

    }

  }

  var dvTable = document.getElementById("table");
  dvTable.innerHTML = "";
  dvTable.appendChild(tabla);


}
//segunda tabla que genera los fisios y los mete

function medicos() {

  
  var nombrefisios = new Array();
  nombrefisios.push(["Jose"]);
  nombrefisios.push(["Pepelu"]);
  nombrefisios.push(["Rodrigo"]);
  nombrefisios.push(["Mario"]);
  nombrefisios.push(["Edu"]);



  var dias2 = new Array();
  dias2.push([""]);
  dias2.push(["Lunes"]);
  dias2.push(["Martes"]);
  dias2.push(["Miércoles"]);
  dias2.push(["Jueves"]);
  dias2.push(["Viernes"]);

  var tabla2 = document.createElement("TABLE");
  tabla2.border = "2";
  var columna2 = tabla2.insertRow(-1);

  for (var i = 0; i < 6; i++) {
    var tableHeader2 = document.createElement("TH");
    tableHeader2.innerHTML = dias2[i];
    columna2.appendChild(tableHeader2);
  }

  var contador2 = 0;
  var contadorHoras1 = 0;
  var contadorHoras2 = 0;

  //Usamos estos dos arrays para generar las horas que luego insertaremos

  var horas2 = new Array();
  horas2.push(["17:00"]);
  horas2.push(["17:45"]);
  horas2.push(["18:30"]);
  horas2.push(["19:15"]);
  horas2.push(["20:00"]);
  horas2.push(["21:45"]);

  var horas1 = new Array();
  horas1.push(["10:00"]);
  horas1.push(["10:45"]);
  horas1.push(["11:30"]);
  horas1.push(["12:15"]);
  horas1.push(["13:00"]);
  horas1.push(["13:45"]);



  //Creamos la tabla de los horarios

  for (var i = 0; i < 10; i++) {
    columna2 = tabla2.insertRow(-1);
    contador2 = 0;

    for (var j = 0; j < 6; j++) {
      var random2 = Math.floor(Math.random() * 5);


      if (contador2 == 0) {
        if (contadorHoras1 < 5) {
          tableHeader2 = document.createElement("td");
          tableHeader2.innerHTML = horas1[contadorHoras1] + "-" + (horas1[contadorHoras1 + 1]);
          columna2.appendChild(tableHeader2);
          contador2++;
          contadorHoras1++;
        } else {
          tableHeader2 = document.createElement("td");
          tableHeader2.innerHTML = horas2[contadorHoras2] + "-" + (horas2[contadorHoras2 + 1]);
          columna2.appendChild(tableHeader2);
          contador2++;
          contadorHoras2++;
        }
      } else {
        columna2.appendChild(tableHeader2);
        tableHeader2 = document.createElement("td");
        tableHeader2.innerHTML = nombrefisios[random2];
        columna2.appendChild(tableHeader2);
      }

    }

    var dvTable2 = document.getElementById("table2");
    dvTable2.innerHTML = "";
    dvTable2.appendChild(tabla2);

  }
}

//Con esta funcion marcamos todo lo que recibimos para marcar lo selecionado
function pintar(nombre,Radio) {

  var x = document.getElementById("table").getElementsByTagName("td");
  for (var i = 0; i < 49; i++) {

    if (x[i].innerHTML == nombre) {

      if (x[i].style.color == "red") {
        x[i].style.color = "";
        document.getElementById("radio" + Radio).checked = false;
      } else {
        x[i].style.color = "red";
      }
    }else {
       x[i].style.color = "";
    }
  }
}
//Lo mismo que la anterior pero para los fisios

function marcarfisios(nombre,Radio ) {

  var x = document.getElementById("table2").getElementsByTagName("td");
  for (var i = 0; i < 60; i++) {

    if (x[i].innerHTML == nombre) {
      if (x[i].style.color == "red") {
        x[i].style.color = "";
        document.getElementById("radio" + Radio).checked = false;
      } else {
        x[i].style.color = "red";
      }
    } else {
      x[i].style.color = "";
    }
  }
}

//Estos los son los scripts de la contraseña.
//Compruebo una a una todaslas peticiones pora porder marcar la que falte
function PasswordCheck() {

  var password = document.getElementById("password").value;


  var Longitud = (/^\S{8,16}$/);





  if (Longitud.test(password)) {

    document.getElementById("p1").style.color = "red";
  } else {
    document.getElementById("p1").style.color = "";
  }
  
  var Mayuscula = (/[A-Z]+/);

  if (Mayuscula.test(password)) {

    document.getElementById("p2").style.color = "red";
  } else {
    document.getElementById("p2").style.color = "";
  }






  var Minusculas = (/[a-z]+/);

  if (Minusculas.test(password)) {

    document.getElementById("p3").style.color = "red";
  } else {
    document.getElementById("p3").style.color = "";
  }



  var Numeros = (/[0-9]+/);

  if (Numeros.test(password)) {

    document.getElementById("p4").style.color = "red";
  } else {
    document.getElementById("p4").style.color = "";
  }


  var Numeros2 = (/\W+/);
  var filtroGuionBajo = (/\_+/);

  if ((Numeros2.test(password)) || (filtroGuionBajo.test(password))) {

    document.getElementById("p5").style.color = "red";
  } else {
    document.getElementById("p5").style.color = "";
  }
}
//Scripts del fcm
function fcm() {
  //Sacamos la edad y sexo medainte los valores de las Ids.

  var edad = document.getElementById("edad").value;

  var sexo = document.getElementById("sexo").value;
  //Con esto evitamos que se produzca un error si pone el nombre en mayusculas y minusculas
  sexo = sexo.toLowerCase();
  var fcm = 0;

  //Con el tofixed evitamos decimales extras y controlamos cualquier excepcion.
  //Con este if comprobamos que la edad y el sexo son correctos y validos dentro de los rangos que queremos.
  if ((!isNaN(edad) && sexo == "mujer" && edad < 125)) {


    fcm = 209.1 - (0.77 * edad);
    document.getElementById("p1").innerHTML = "Zona de recuperación (60%-70%) = " + (fcm * 0.60).toFixed(3) + "-" + (fcm * 0.70).toFixed(3);
    document.getElementById("p2").innerHTML = "Zona aeróbica (70%-80%) = " + (fcm * 0.70).toFixed(3) + "-" + (fcm * 0.80).toFixed(3);
    document.getElementById("p3").innerHTML = "Zona anaeróbica (80%-90%) = " + (fcm * 0.80).toFixed(3) + "-" + (fcm * 0.90).toFixed(3);
    document.getElementById("p4").innerHTML = "Línea roja (90%-100%) = " + (fcm * 0.90).toFixed(3) + "-" + (fcm).toFixed(3);
    document.getElementById("p5").innerHTML = "Frecuencia Cardiaca Máxima = " + (fcm).toFixed(3);

  } else if ((!isNaN(edad) && edad < 125) && sexo == "hombre") {
    fcm = 208.7 - (0.73 * edad);
    document.getElementById("p1").innerHTML = "Zona de recuperación (60%-70%) = " + (fcm * 0.60).toFixed(3) + "-" + (fcm * 0.70).toFixed(3);
    document.getElementById("p2").innerHTML = "Zona aeróbica (70%-80%) = " + (fcm * 0.70).toFixed(3) + "-" + (fcm * 0.80).toFixed(3);
    document.getElementById("p3").innerHTML = "Zona anaeróbica (80%-90%) = " + (fcm * 0.80).toFixed(3) + "-" + (fcm * 0.90).toFixed(3);
    document.getElementById("p4").innerHTML = "Línea roja (90%-100%) = " + (fcm * 0.90).toFixed(3) + "-" + (fcm).toFixed(3);
    document.getElementById("p5").innerHTML = "Frecuencia Cardiaca Máxima = " + (fcm).toFixed(3);
  } else {
    alert("Introduzca unos datos correctos.");
  }
};

//IMC 

function imc() {
  var altura = document.getElementById("altura").value;
  var peso = document.getElementById("peso").value;

  var resultadoIMC = peso / ((altura / 100) * (altura / 100));
//Compruebo que no hay campos vacios ni erroneos yposteriomente cambio de color lo que haya salido

  if (peso == "" || altura == "" || peso > 400 || altura > 300) {


    alert("Los campos no tiene datos utiles");
  } else {
    if (resultadoIMC < 16 && resultadoIMC > 0) {
      for (var i = 1; i <= 8; i++) {
        if (i == 1) {

          document.getElementById("p1").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }

    } else if (resultadoIMC < 17) {

      for (var i = 1; i <= 8; i++) {
        if (i == 2) {
          document.getElementById("p2").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }


    } else if (resultadoIMC < 18.49) {

      for (var i = 1; i <= 8; i++) {
        if (i == 3) {
          document.getElementById("p3").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }

    } else if (resultadoIMC < 24.99) {

      for (var i = 1; i <= 8; i++) {
        if (i == 4) {
          document.getElementById("p4").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }

    } else if (resultadoIMC < 29.99) {

      for (var i = 1; i <= 8; i++) {
        if (i == 5) {
          document.getElementById("p5").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }


    } else if (resultadoIMC < 34.99) {

      for (var i = 1; i <= 8; i++) {
        if (i == 6) {
          document.getElementById("p6").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }

    } else if (resultadoIMC < 40) {

      for (var i = 1; i <= 8; i++) {
        if (i == 7) {
          document.getElementById("p7").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }

    } else {

      for (var i = 1; i <= 8; i++) {
        if (i == 8) {
          document.getElementById("p8").style.color = "red";
        } else {
          document.getElementById("p" + i).style.color = "";
        }
      }

    };

  }
}