// index
//preguntas y respuestas
const botonCorrecto = document.getElementById("btn-correcto")
const botonIncorrecto = document.getElementById("btn-incorrecto")
const botonCorrectoDos = document.getElementById("btn-correcto2")
const botonIncorrectoDos = document.getElementById("btn-incorrecto2")
const botonCorrectoTres =document.getElementById ("btn-correcto3")
const botonIncorrectoTres =document.getElementById ("btn-incorrecto3")
const botonFinalizar = document.getElementById("finalizarPreguntas")
let puntaje = 0 

botonCorrecto.addEventListener("click",cambioColor1)
botonIncorrecto.addEventListener("click",cambioColorDos1)
botonCorrectoDos.addEventListener("click",cambioColor2)
botonIncorrectoDos.addEventListener("click",cambioColorDos2)
botonCorrectoTres.addEventListener("click",cambioColor3)
botonIncorrectoTres.addEventListener("click",cambioColorDos3)


function cambioColor1 (){
    botonCorrecto.style.backgroundColor= "green";  
    puntaje++;
    console.log(puntaje);
}
     
function cambioColorDos1 (){
    botonIncorrecto.style.backgroundColor= "red"}

function cambioColor2 (){
    botonCorrectoDos.style.backgroundColor= "green";
    puntaje++;
    console.log(puntaje);
}

function cambioColorDos2 (){
    botonIncorrectoDos.style.backgroundColor= "red"
}

function cambioColor3 (){
    botonCorrectoTres.style.backgroundColor= "green";
    puntaje++;
    console.log(puntaje);
}

function cambioColorDos3 (){
    botonIncorrectoTres.style.backgroundColor= "red"
}

localStorage.setItem("puntaje", puntaje)
let puntajeFinal =localStorage.getItem("puntaje")
if(puntajeFinal >= 3) {console.log("Felicidades! obtuviste uno de los mejores resultados")}
else {console.log("Parece que te queda aprender un poco más")}

botonFinalizar.onclick =()=> { Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `tu puntaje es de ${puntaje}`,
    showConfirmButton: false,
    timer: 1500
  })} 


// caja de comentarios
const nuevoComentario = document.getElementById("comentarios")
const valoracion = document.getElementById("valoracionPagina")
const boton = document.getElementById("dejarComentario")
const parrafo = document.getElementById("cajaDeComentarios")

boton.onclick = () => 
{let comentario = nuevoComentario.value
localStorage.setItem ("comentario", JSON.stringify(comentario));
let parrafo = document.getElementById("cajaDeComentarios");
parrafo.append(comentario);
let valor = valoracion.value;
if (valor == 10) {alert ("Nos alegra que te haya gustado la página!")}
else if (valor < 10) {alert ("esperamos seguir mejorando")};
localStorage.setItem ("valoracion", valor)}


// Reseñas
// Recomendar libros
class LibroRecomendado {
    constructor (nombre, genero) {
    this.nombre = nombre;
    this.genero = genero; 
    }
}

const ListaLibros = []

const NuevoLibro = () =>
{let nombre = document.getElementById("LibroRecomendado").value
let genero = document.getElementById("GeneroLibro").value
let libroNuevo = new LibroRecomendado (nombre, genero);
ListaLibros.push(libroNuevo);
localStorage.setItem ("librosRecomendados", JSON.stringify(ListaLibros));
return ListaLibros
}

let agregarLibro = document.getElementById("DejarRecomendacion")
agregarLibro.addEventListener("click", NuevoLibro)


//Contacto
//Enviar consulta
let NombreUsuario = document.querySelector("#NombreUsuario")
let EmailUsuario = document.querySelector("#EmailUsuario")
let ConsultaUsuario = document.querySelector("#ConsultaUsuario")
let DejarConsulta = document.querySelector ("#DejarConsulta")

function agregarConsulta () {
localstorage.setItem("NombreUsuario", NombreUsuario.value);
localStorage.setItem("EmailUsuario", EmailUsuario.value);
localStorage.setItem("ConsultaUsuario", ConsultaUsuario.value)
}

DejarConsulta.addEventListener ("click", agregarConsulta)







