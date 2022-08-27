import { productoServices } from "../services/productos-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector('[data-url]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value
    const description = document.querySelector('[data-description]').value

    productoServices.crearproducto(url, name,price, description).then (respuesta =>{
        window.location.href = "/index.html"
        alert("EL PRODUCTO FUE CREADO COIN EXITO")
console.log(respuesta)
    }).catch(err => {
        console.log(err)
    })
    
});