import { productoServices } from "../services/productos-servicios.js"
const nuevoProducto = (name, price, imageUrl) => {
    const tarjeta = document.createElement("div");
    const contenido = `
            <div id="card-cont">
                <img src="${imageUrl}">
                <h3>${name}</h3>
                <p>${price}</p>
                <a href=""> Ver producto </a>
            </div>
    `;
    tarjeta.innerHTML = contenido;
    tarjeta.classList.add("tarjeta")
    return tarjeta;
};
const productos = document.querySelector("[datos-productos]")
const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl))
        });
    } catch (erro) {
        console.log(erro)
    }
}

render()