

const productosContainer = document.querySelector("#stockMercado")
const carritoContenedor = document.querySelector("#carrito-contenedor")

const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')



const productosCarrito = []

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

console.log(productosContainer)
//FUNCIONES A APLICAR//

const agregarAlCarrito = (id) => {
    const item = stockProductos.find((producto) => producto.id === id)
    productosCarrito.push(item)
    renderCarrito()
    renderCantidad()
    renderTotal()
    
}

const quitarCarrito = (id) => {
    const item = productosCarrito.find((producto) => producto.id === id)
    const indice = productosCarrito.indexOf(item)
    productosCarrito.splice(indice,1)
    
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    productosCarrito.length = 0

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

    }
    

    

}