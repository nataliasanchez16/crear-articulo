// URL base del back end
const API_URL = "http://localhost:3000";
// 1. Esperar a que el HTML este cargado
document.addEventListener("DOMContentLoaded", () => {
  // 2. Obtener referencia al formulario y al parrafo de mensajes
  const form = document.getElementById("formularioArticulo");
  const mensaje = document.getElementById("mensaje");
  // 3. Escuchar el evento submit del formulario
  form.addEventListener("submit", async (evento) => {
    console.log("Formulario enviado");
    // 4. Prevenir que la pagina se recargue (comportamiento por defecto)
    evento.preventDefault();

    // 5. Leer los valores de los campos
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
    const button = document.getElementById("boton");
    // 6. Validacion basica del lado del cliente
    if (!titulo || !descripcion || !autor) {
      mensaje.textContent = "Completa los campos obligatorios.";
      mensaje.style.color = "red";
      return; // no se hace el fetch
    }
    // 7. Armar el objeto que vamos a enviar
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
      // 8. Hacer el POST al back end
      const respuesta = await fetch(`${API_URL}/articulos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoArticulo),
      });
      // 9. Parsear la respuesta como JSON
      const datos = await respuesta.json();
      // 10. Manejar la respuesta segun el status HTTP
     if (respuesta.ok) {
  mensaje.textContent = `Articulo creado con id ${datos.id}`;
  mensaje.style.color = "green";
  form.reset();

  const respuestaGet = await fetch(`${API_URL}/articulos`);
  const todosLosArticulos = await respuestaGet.json();
  const ultimoArticulo = todosLosArticulos[todosLosArticulos.length - 1];

  localStorage.setItem("ultimoArticulo", JSON.stringify(ultimoArticulo));
 window.location.href = "/crearArticulo/articulo.html";

      } else {
  mensaje.textContent = datos.error || "Error al enviar.";
  mensaje.style.color = "red";
}
    } catch (error) {
      // Error de red: back end apagado, CORS mal configurado, etc.
      console.error("Error de red:", error);
      mensaje.textContent = "No se pudo conectar con el servidor.";
      mensaje.style.color = "red";
    }
  });
});
const btnDarkMode = document.getElementById("toggle-dark-mode");
btnDarkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    btnDarkMode.textContent = "Modo Claro";
  } else {
    btnDarkMode.textContent = "Modo Oscuro";
  }
});
