const nombreUsuario = document.getElementById('nombre');
const btn_Enviar = document.getElementById('btn_Enviar');
const btn_Peliculas = document.getElementById('btn_Peliculas');
const btn_Libros = document.getElementById('btn_Libros');
const btn_Temas = document.getElementById('btn_Temas');
const btn_Inicio = document.getElementById('btn_Inicio');
const enter = document.getElementById('nombre');

const PeliculaP1_1 = document.getElementById('PeliculaP1_1');
const PeliculaP1_2 = document.getElementById('PeliculaP1_2');
const PeliculaP1_3 = document.getElementById('PeliculaP1_3');

const PeliculaP2_1 = document.getElementById('PeliculaP2_1');
const PeliculaP2_2 = document.getElementById('PeliculaP2_2');
const PeliculaP2_3 = document.getElementById('PeliculaP2_3');

const PeliculaP3_1 = document.getElementById('PeliculaP3_1');
const PeliculaP3_2 = document.getElementById('PeliculaP3_2');
const PeliculaP3_3 = document.getElementById('PeliculaP3_3');

const LibrosP1_1 = document.getElementById('LibrosP1_1');
const LibrosP1_2 = document.getElementById('LibrosP1_2');
const LibrosP1_3 = document.getElementById('LibrosP1_3');

const LibrosP2_1 = document.getElementById('LibrosP2_1');
const LibrosP2_2 = document.getElementById('LibrosP2_2');
const LibrosP2_3 = document.getElementById('LibrosP2_3');

const LibrosP3_1 = document.getElementById('LibrosP3_1');
const LibrosP3_2 = document.getElementById('LibrosP3_2');
const LibrosP3_3 = document.getElementById('LibrosP3_3');

let aciertos = 0;

//Evento para Enter
enter.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
  
  const nombre = nombreUsuario.value;
  document.getElementById("nombreJugador").innerHTML= "¡Hola " + nombre + "!";
  document.getElementById('inicio').style.display = "none"; 
  document.getElementById('saludo').style.display = "block"; 
    }
});

//Mostrar Nombre
  btn_Enviar.addEventListener('click', () => {
  const nombre = nombreUsuario.value;
  document.getElementById("nombreJugador").innerHTML= "¡Hola " + nombre + "!";

  document.getElementById('inicio').style.display = "none"; // Oculta la seccion indicada
  document.getElementById('saludo').style.display = "block"; // Muestra  la seccion indicda
});

//Peliculas
btn_Peliculas.addEventListener('click', () => {
  document.getElementById('saludo').style.display = "none";
  document.getElementById('peliculasPregunta1').style.display = "block";
});

//Preguntas Pelicula 1
PeliculaP1_1.addEventListener('click', () => {
  SumarPeliculaP1(1);
});

PeliculaP1_2.addEventListener('click', () => {
  SumarPeliculaP1(2);
});

PeliculaP1_3.addEventListener('click', () => {
  SumarPeliculaP1(3);
});

function SumarPeliculaP1(respuesta){
//Evaluar Pregunta 1
  if (respuesta==2) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('peliculasPregunta1').style.display = "none";
  document.getElementById('peliculasPregunta2').style.display = "block";
}

//Preguntas Pelicula 2
PeliculaP2_1.addEventListener('click', () => {
  SumarPeliculaP2(1);
});

PeliculaP2_2.addEventListener('click', () => {
  SumarPeliculaP2(2);
});

PeliculaP2_3.addEventListener('click', () => {
  SumarPeliculaP2(3);
});

//Evaluar Pregunta 2
function SumarPeliculaP2(respuesta){
  if (respuesta==3) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('peliculasPregunta2').style.display = "none";
  document.getElementById('peliculasPregunta3').style.display = "block";
}

//Preguntas Pelicula 3
PeliculaP3_1.addEventListener('click', () => {
  SumarPeliculaP3(1);
});

PeliculaP3_2.addEventListener('click', () => {
  SumarPeliculaP3(2);
});

PeliculaP3_3.addEventListener('click', () => {
  SumarPeliculaP3(3);
});

//Evaluar Pregunta 3
function SumarPeliculaP3(respuesta){
  //Evaluar Pregunta
  if (respuesta==2) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('peliculasPregunta3').style.display = "none";
  document.getElementById('resultados').style.display = "block";
  MostrarResultados();
}

//Libros
btn_Libros.addEventListener('click', () => {
  document.getElementById('saludo').style.display = "none";
  document.getElementById('librosPregunta1').style.display = "block";
});

//Preguntas Libros 1
LibrosP1_1.addEventListener('click', () => {
  SumarLibrosP1(1);
});

LibrosP1_2.addEventListener('click', () => {
  SumarLibrosP1(2);
});

LibrosP1_3.addEventListener('click', () => {
  SumarLibrosP1(3);
});

function SumarLibrosP1(respuesta){
//Evaluar Pregunta 1
  if (respuesta==3) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('librosPregunta1').style.display = "none";
  document.getElementById('librosPregunta2').style.display = "block";
}

//Preguntas Libros 2
LibrosP2_1.addEventListener('click', () => {
  SumarLibrosP2(1);
});

LibrosP2_2.addEventListener('click', () => {
  SumarLibrosP2(2);
});

LibrosP2_3.addEventListener('click', () => {
  SumarLibrosP2(3);
});

//Evaluar Pregunta 2
function SumarLibrosP2(respuesta){
  if (respuesta==1) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('librosPregunta2').style.display = "none";
  document.getElementById('librosPregunta3').style.display = "block";
}

//Preguntas Libros 3
LibrosP3_1.addEventListener('click', () => {
  SumarLibrosP3(1);
});

LibrosP3_2.addEventListener('click', () => {
  SumarLibrosP3(2);
});

LibrosP3_3.addEventListener('click', () => {
  SumarLibrosP3(3);
});

//Evaluar Pregunta 3
function SumarLibrosP3(respuesta){
  //Evaluar Pregunta
  if (respuesta==3) {
  aciertos++;
  console.log(aciertos);
  }
  document.getElementById('librosPregunta3').style.display = "none";
  document.getElementById('resultados').style.display = "block";
  MostrarResultados();
}

//Volver a Temas
btn_Temas.addEventListener('click', () => {
  aciertos = 0;
  document.getElementById('resultados').style.display = "none";
  document.getElementById('saludo').style.display = "block";
});

//Volver a Inicio
btn_Inicio.addEventListener('click', () => {
  nombreUsuario.value = "";
  aciertos = 0;
  document.getElementById('resultados').style.display = "none";
  document.getElementById('inicio').style.display = "block";
});

//resultados
function MostrarResultados() {
  document.getElementById('puntos').innerHTML = "¡Has acertado " + aciertos + " preguntas!";
}
