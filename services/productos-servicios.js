const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());


const crearproducto = (name, imageUrl, price, description) => {
   return fetch(`http://localhost:3000/producto`, {
      method: 'POST',
      headers: {
         'Content -Type': 'application/json'
      },
      body: JSON.stringify({
         name,
         imageUrl,
         price,
         description
      })
   })
   .then(respuesta => {
      if(respuesta.ok){
         return respuesta.body
      }
      throw new Error("no fue posible crear producto")
   })
}



export const productoServices = {
   listaProductos,
   crearproducto
}