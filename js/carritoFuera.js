


const carritoContenedor = document.querySelector("#carrito-contenedor")

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')



const productosCarrito = JSON.parse(localStorage.getItem('carritoMemoria')) || []


//RENDER DE MI STOCK//




//FUNCIONES A APLICAR//

const agregarAlCarrito = (id) => {
    if (localStorage.getItem('registroNombre')) {
    const item = stockProductos.find((producto) => producto.id === id)

    //operador avanzado //
    productosCarrito.find((producto) => producto.id == id) ? item.cantidad++ : productosCarrito.push(item)
    

    
    localStorage.setItem('carritoMemoria', JSON.stringify(productosCarrito))
    renderCarrito()
    renderCantidad()
    renderTotal()
}else {
    alert("Logueate !")
}
}

const quitarCarrito = (id) => {
    const item = productosCarrito.find((producto) => producto.id === id)
    const indice = productosCarrito.indexOf(item)
    productosCarrito.splice(indice,1)
    
    localStorage.setItem('carritoMemoria', JSON.stringify(productosCarrito))
    
    Toastify({
        text: "Productos eliminados.",
        duration: 3000,
        gravity: "bottom",
        position: `right`,
        stopOnFocus: true, 
        style: {
          background: "red",
        }
      }).showToast();
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    productosCarrito.length = 0
    
    localStorage.setItem('carritoMemoria', JSON.stringify(productosCarrito))

    Toastify({
        text: "Carrito vaciado con exito.",
        duration: 3000,
        gravity: "bottom",
        position: `right`,
        stopOnFocus: true, 
        style: {
          background: "red",
        }
      }).showToast();
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const sumarUnprodu = (id) => {
    const item = productosCarrito.find((producto) => producto.id === id)
    item.cantidad++
    localStorage.setItem('carritoMemoria', JSON.stringify(productosCarrito))
    Toastify({
        text: "Producto agregado al carrito !",
        backgroundColor: '#eddc3d',
        color: '#610f6a',
        position: "left",
        gravity: "bottom",
      }).showToast();
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const restarUnprodu = (id) => {
    const item = productosCarrito.find((producto) => producto.id === id)
    if (item.cantidad > 1){
    item.cantidad--
    localStorage.setItem('carritoMemoria', JSON.stringify(productosCarrito))
    Toastify({
        text: "Producto eliminado.",
        duration: 3000,
        gravity: "bottom",
        position: `right`,
        stopOnFocus: true, 
        style: {
          background: "red",
        }
      }).showToast();}
      else {}
    renderCarrito()
    renderCantidad()
    renderTotal()
}



btnVaciar.addEventListener('click', vaciarCarrito)

//RENDERS//

const renderCarrito = () => {
    carritoContenedor.innerHTML=""

    productosCarrito.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
                      <p class= "indicadores">${item.nombre}</p>
                      <button class="botonera" onclick="restarUnprodu(${item.id})"> -1 </button>
                      <p class= "indicadores">Cantidad: ${item.cantidad}</p>
                      <button class= "botonera" onclick="sumarUnprodu(${item.id})"> +1  </button>
                      <p class= "indicadores">Precio: $${item.precio * item.cantidad}</p>
                      <button onclick="quitarCarrito(${item.id})" class="boton-eliminar">Eliminar del carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                      </svg></button>`






    carritoContenedor.append(div)

    })
}


const renderCantidad = () => {
    let carroCantidad = 0
    productosCarrito.forEach((item) =>{
        carroCantidad = item.cantidad + carroCantidad})
    contadorCarrito.innerText = carroCantidad

}

const renderTotal = () => {
    let total = 0

    if (contadorCarrito.innerText < 10){
    productosCarrito.forEach((valor) =>{
        total = (valor.precio * valor.cantidad) + total
    })

    precioTotal.innerText = total
    } else{
        productosCarrito.forEach((valor) =>{
            total = (valor.precio * valor.cantidad) + total
        })
    
        precioTotal.innerText = total * 0.90
        const div = document.createElement('div')
        div.innerHTML = `
                    <p class='alert alert-success'>Tienes un total de ${contadorCarrito.innerText} productos, por lo que se te aplicara un 10% de descuento ! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
                    <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"/>
                    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"/>
                  </svg></p>
                                        `






        carritoContenedor.append(div)
    }
    

    

}

renderCarrito()
renderCantidad()
renderTotal()