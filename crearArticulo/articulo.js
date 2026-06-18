//const API_URL = "http://localhost:3000";
document.addEventListener("DOMContentLoaded", async () => {
  const respuestaGet = await fetch(`${API_URL}/articulos`);
        const todosLosArticulos = await respuestaGet.json();
        const ultimoArticulo = todosLosArticulos[todosLosArticulos.length - 1];
        const articulo2 = ultimoArticulo

  document.querySelector("#titulo-web").innerHTML = articulo.titulo;
  document.querySelector("#subtitulo-web").innerHTML = articulo.subtitulo;
  document.querySelector("#autor-web").innerHTML = articulo.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo.descripcion;
  document.querySelector("#descripcion-tag2").innerHTML = articulo.descripcion2;
  document.querySelector("#fecha-web").innerHTML = articulo.fecha;
  document.querySelector("#contenido-web").innerHTML = articulo.contenido;
  document.querySelector("#imagen-web").src = articulo.imagen;
  document.querySelector("#imagen-web2").src = articulo.imagen2;
  document.querySelector("#contenido-web2").innerHTML = articulo.contenido2;
});
