document.addEventListener("DOMContentLoaded", () => {
  const articulo = JSON.parse(localStorage.getItem("ultimoArticulo"));

  document.querySelector("#titulo-web").innerHTML = articulo.titulo;
  document.querySelector("#autor-web").innerHTML = articulo.autor;
  document.querySelector("#descripcion-tag").innerHTML = articulo.descripcion;
   document.querySelector("#fecha-web").innerHTML = articulo.fecha;
    document.querySelector("#contenido-web").innerHTML = articulo.contenido;
});