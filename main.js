const url = "https://api.coinbase.com/v2/prices/BTC-USD/spot";

async function obtenerPrecio() {
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  const precio = datos.data.amount;
  
  document.getElementById("precio").textContent = `$ ${precio}`;
}

obtenerPrecio();

setInterval(obtenerPrecio, 10000);
