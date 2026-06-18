const API_URL = "http://localhost:3000";
document.addEventListener("DOMContentLoaded", async () => {
  const respuestaGet = await fetch(`${API_URL}/articulos`);
        const todosLosArticulos = await respuestaGet.json();
        const ultimoArticulo = todosLosArticulos[todosLosArticulos.length - 1];
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
});
 const boton = document.getElementById("boton");
 const boton2 = document.getElementById("boton2");
 const boton3 = document.getElementById("boton3");
 const boton4 = document.getElementById("boton4");
 const boton5 = document.getElementById("boton5");
 const boton6 = document.getElementById("boton6");
  boton.addEventListener("click", async (evento) => {window.location.href = "/crearArticulo/articulo.html";})
  boton2.addEventListener("click", async (evento2) => {window.location.href = "/crearArticulo/crearArticulo.html";})

   boton3.addEventListener("click", async (evento3) => {window.location.href = "/crearArticulo/articulo.html";const articulo = todosLosArticulos[0]; document.querySelector("#titulo-web").innerHTML = articulo.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo.contenido;
  document.querySelector("#imagen-web").src = articulo.imagen;
  document.querySelector("#imagen-web2").src = articulo.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo.contenido2; })

    boton4.addEventListener("click", async (evento4) => {window.location.href = "/crearArticulo/articulo.html";const articulo = todosLosArticulos[1];  document.querySelector("#titulo-web").innerHTML = articulo.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo.contenido;
  document.querySelector("#imagen-web").src = articulo.imagen;
  document.querySelector("#imagen-web2").src = articulo.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo.contenido2;})

     boton5.addEventListener("click", async (evento5) => { window.location.href = "/crearArticulo/articulo.html";const articulo = todosLosArticulos[2];  document.querySelector("#titulo-web").innerHTML = articulo.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo.contenido;
  document.querySelector("#imagen-web").src = articulo.imagen;
  document.querySelector("#imagen-web2").src = articulo.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo.contenido2;})

      boton6.addEventListener("click", async (evento6) => { window.location.href = "/crearArticulo/articulo.html";const articulo = todosLosArticulos[3];  document.querySelector("#titulo-web").innerHTML = articulo.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo.contenido;
  document.querySelector("#imagen-web").src = articulo.imagen;
  document.querySelector("#imagen-web2").src = articulo.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo.contenido2;})
