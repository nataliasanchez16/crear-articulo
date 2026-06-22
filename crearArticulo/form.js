const API_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formularioArticulo");
  const mensaje = document.getElementById("mensaje");

  form.addEventListener("submit", async (evento) => {
    console.log("Formulario enviado");
    evento.preventDefault();

    const titulo = document.getElementById("title").value.trim();
    const subtitulo = document.getElementById("subtitulo").value.trim();
    const imagen = document.getElementById("imagen").value.trim();
    const imagen2 = document.getElementById("imagen2").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const descripcion2 = document.getElementById("descripcion2").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const contenido = document.getElementById("content").value.trim();
    const contenido2 = document.getElementById("content2").value.trim();
    const fecha = document.getElementById("date").value.trim();

    if (!titulo || !descripcion || !autor) {
      mensaje.textContent = "Completa los campos obligatorios.";
      mensaje.style.color = "red";
      return;
    }

    const nuevoArticulo = {
      titulo,
      subtitulo,
      descripcion,
      autor,
      contenido,
      fecha,
      imagen,
      imagen2,
      contenido2,
      descripcion2,
    };

    try {
      const respuesta = await fetch(`${API_URL}/articulos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoArticulo),
      });
      const datos = await respuesta.json();
      if (respuesta.ok) {
        mensaje.textContent = `Artículo creado con éxito`;
        mensaje.style.color = "green";
        form.reset();
        window.location.href = "articulo.html";
      } else {
        mensaje.textContent = datos.error || "Error al enviar.";
        mensaje.style.color = "red";
      }
    } catch (error) {
      console.error("Error de red:", error);
      mensaje.textContent = "No se pudo conectar con el servidor.";
      mensaje.style.color = "red";
    }
  });
});

const btnDarkMode = document.getElementById("toggle-dark-mode");
btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  btnDarkMode.textContent = document.body.classList.contains("dark-mode")
    ? "Modo Claro"
    : "Modo Oscuro";
});
