// js/script.js
const API_URL = "http://localhost:3000";
document.addEventListener("DOMContentLoaded", async () => {
  const respuestaGet = await fetch(`${API_URL}/articulos`);
        const todosLosArticulos = await respuestaGet.json();
        const ultimoArticulo = todosLosArticulos[todosLosArticulos.length - 1];
        const articulo1 = todosLosArticulos[1];
        const articulo2 = todosLosArticulos[2];
        const articulo3 = todosLosArticulos[3];
        const articulo4 = todosLosArticulos[4];

function emojiClima(code) {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 48) return "☁️";
  if (code <= 67) return "️";
  if (code <= 77) return "❄️";
  if (code <= 82) return "️";
  return "⚡";
}
async function cargarClima() {
  const clima = document.querySelector("#clima");
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast" +
        "?latitude=-34.9&longitude=-56.17&current_weather=true",
    );
    if (!response.ok) throw new Error("Error al obtener el clima");
    const datos = await response.json();
    const temp = datos.current_weather.temperature;
    const viento = datos.current_weather.windspeed;
    const emoji = emojiClima(datos.current_weather.weathercode);
    clima.innerHTML = `
<p class="mb-0">
${emoji} Montevideo — <strong>${temp}°C</strong>
&nbsp;|&nbsp;
💨 Viento: ${viento} km/h
</p>
`;
  } catch (error) {
    clima.innerHTML = `<p class="text-muted mb-0">Clima no
disponible.</p>`;
    console.error(error);
  }
}
const textoDiv = document.getElementById("clima");
// Llamar al cargar la página
cargarClima()
 const boton = document.getElementById("boton");
 const boton2 = document.getElementById("boton2");
 const boton3 = document.getElementById("boton3");
 const boton4 = document.getElementById("boton4");
 const boton5 = document.getElementById("boton5");
 const boton6 = document.getElementById("boton6");
boton.addEventListener("click", (evento) => {window.location.href = "/crearArticulo/articulo.html";})
  boton2.addEventListener("click", (evento) => {window.location.href = "/crearArticulo/crearArticulo.html";})
  
  boton3.addEventListener("click", (evento) => {
  document.querySelector("#titulo-web").innerHTML = articulo1.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo1.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo1.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo1.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo1.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo1.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo1.contenido;
  document.querySelector("#imagen-web").src = articulo1.imagen;
  document.querySelector("#imagen-web2").src = articulo1.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo1.contenido2;
  window.location.href = "/crearArticulo/articulo.html";})
  
  boton4.addEventListener("click", (evento) => {
  document.querySelector("#titulo-web").innerHTML = articulo2.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo2.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo2.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo2.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo2.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo2.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo2.contenido;
  document.querySelector("#imagen-web").src = articulo2.imagen;
  document.querySelector("#imagen-web2").src = articulo2.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo2.contenido2;
  window.location.href = "/crearArticulo/articulo.html";})

  boton5.addEventListener("click", (evento) => {
  document.querySelector("#titulo-web").innerHTML = articulo3.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo3.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo3.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo3.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo3.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo3.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo3.contenido;
  document.querySelector("#imagen-web").src = articulo3.imagen;
  document.querySelector("#imagen-web2").src = articulo3.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo3.contenido2;
  window.location.href = "/crearArticulo/articulo.html";})

    boton6.addEventListener("click", (evento) => {
  document.querySelector("#titulo-web").innerHTML = articulo4.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo4.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo4.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo4.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo4.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo4.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo4.contenido;
  document.querySelector("#imagen-web").src = articulo4.imagen;
  document.querySelector("#imagen-web2").src = articulo4.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo4.contenido2;
  window.location.href = "/crearArticulo/articulo.html";})
});
