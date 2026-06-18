const API_URL = "http://localhost:3000";
document.addEventListener("DOMContentLoaded", async () => {
  const respuestaGet = await fetch(`${API_URL}/articulos`);
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
  cargarClima();
  const todosLosArticulos = await respuestaGet.json();
  document.getElementById("boton").addEventListener("click", () => {
    const ultimoId = todosLosArticulos[todosLosArticulos.length - 1].id;
    window.location.href = `articulo.html?id=${ultimoId}`;
  });
  document.getElementById("boton2").addEventListener("click", () => {
    window.location.href = "crearArticulo.html";
  });
  document.getElementById("boton3").addEventListener("click", () => {
    window.location.href = `articulo.html?id=${todosLosArticulos[0].id}`;
  });
  document.getElementById("boton4").addEventListener("click", () => {
    window.location.href = `articulo.html?id=${todosLosArticulos[1].id}`;
  });
  document.getElementById("boton5").addEventListener("click", () => {
    window.location.href = `articulo.html?id=${todosLosArticulos[2].id}`;
  });
  document.getElementById("boton6").addEventListener("click", () => {
    window.location.href = `articulo.html?id=${todosLosArticulos[3].id}`;
  });
});
