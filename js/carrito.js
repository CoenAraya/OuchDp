

const productosContainer = document.querySelector("#stockMercado")
const carritoContenedor = document.querySelector("#carrito-contenedor")

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')



let productosCarrito

const carritoMemoria = JSON.parse(localStorage.getItem('memoriaCarrito'))
//RENDER DE MI STOCK//

stockProductos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('estiloProductos')

    div.innerHTML = `
    
                    <div class= "articulos">
    	            <img class="articulos imgCuadrilla"  src=${producto.img} width="200" height="200">
                    <div class="productosStock">Estampado de ${producto.nombre}</div>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                    
    `
    
    
    
    
    stockMercado.append(div)
    
})


//FUNCIONES A APLICAR//

const agregarAlCarrito = (id) => {
    const item = stockProductos.find((producto) => producto.id === id)
    productosCarrito.push(item)
    localStorage.setItem('memoriaCarrito', JSON.stringify(productosCarrito))
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const quitarCarrito = (id) => {
    const item = productosCarrito.find((producto) => producto.id === id)
    const indice = productosCarrito.indexOf(item)
    productosCarrito.splice(indice,1)
    
    localStorage.setItem('memoriaCarrito', JSON.stringify(productosCarrito))
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    productosCarrito.length = 0
    
    localStorage.setItem('memoriaCarrito', JSON.stringify(productosCarrito))
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
                    
                    <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>
                    <button onclick="quitarCarrito(${item.id})" class="boton-eliminar">Eliminar del carrito <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                  </svg></button>
                  `






    carritoContenedor.append(div)

    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = productosCarrito.length

}

const renderTotal = () => {
    let total = 0

    if (productosCarrito.length < 10){
    productosCarrito.forEach((valor) =>{
        total = valor.precio + total
    })

    precioTotal.innerText = total
    } else{
        productosCarrito.forEach((valor) =>{
            total = valor.precio + total
        })
    
        precioTotal.innerText = total * 0.90
        const div = document.createElement('div')
        div.innerHTML = `
                    <p class='alert alert-success'>Tienes un total de ${productosCarrito.length} productos, por lo que se te aplicara un 10% de descuento ! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
                    <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"/>
                    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"/>
                  </svg></p>
                                        `






        carritoContenedor.append(div)
    }
    

    

}

if (carritoMemoria) {
    productosCarrito = carritoMemoria

    renderCarrito()
    renderCantidad()
    renderTotal()

} else{
    productosCarrito = []

    
}