const API_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const parametrosURL = new URLSearchParams(window.location.search);
    const articuloId = parametrosURL.get("id");

    let articulo;

    if (articuloId) {
      const respuestaGet = await fetch(`${API_URL}/articulos/${articuloId}`);
      if (!respuestaGet.ok)
        throw new Error("No se encontró el artículo solicitado");
      articulo = await respuestaGet.json();
    } else {
      const respuestaGet = await fetch(`${API_URL}/articulos`);
      const todosLosArticulos = await respuestaGet.json();

      if (todosLosArticulos.length === 0) {
        console.warn("No hay artículos en el servidor.");
        return;
      }
      articulo = todosLosArticulos[todosLosArticulos.length - 1];
    }
    document.querySelector("#titulo-web").textContent = articulo.titulo;
    document.querySelector("#subtitulo-web").textContent = articulo.subtitulo;
    document.querySelector("#autor-web").textContent = articulo.autor;
    document.querySelector("#descripcion-tag").textContent =
      articulo.descripcion;
    document.querySelector("#contenido-web").textContent = articulo.contenido;
    document.querySelector("#titulo-webEN").textContent = articulo.tituloEN;
    document.querySelector("#subtitulo-webEN").textContent =
      articulo.subtituloEN;
    document.querySelector("#autor-webEN").textContent = articulo.autor;
    document.querySelector("#descripcion-tagEN").textContent =
      articulo.descripcionEN;
    document.querySelector("#contenido-webEN").textContent =
      articulo.contenidoEN;
    document.querySelector("#fecha-web").textContent =
      `Fecha de publicación: ${articulo.fecha}`;
    const imagenPorDefecto =
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80";
    document.querySelector("#imagen-web").src =
      articulo.imagen || imagenPorDefecto;
    document.querySelector("#imagen-webEN").src =
      articulo.imagenEN || imagenPorDefecto;
  } catch (error) {
    console.error("Error al cargar el artículo:", error);
    document.querySelector("#titulo-web").textContent = "Error 404";
    document.querySelector("#subtitulo-web").textContent =
      "Artículo no encontrado o servidor apagado.";
    document.querySelector("#titulo-webEN").textContent = "Error 404";
    document.querySelector("#subtitulo-webEN").textContent =
      "Artículo no encontrado o servidor apagado.";
  }
});
const btnDarkMode = document.getElementById("toggle-dark-mode");
btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btnDarkMode.textContent = document.body.classList.contains("dark-mode")
    ? "Modo Claro"
    : "Modo Oscuro";
});
