
class Producto {
    constructor (id,tipo, precio){
        this.id =id
        this.tipo = tipo
        this.precio = precio
    }

    precios() {
        console.log(`Tenemos ${this.tipo} con un valor de ${this.precio}`)
    }
}
const productos = [
    new Producto (1,"gorras",700),
    new Producto (2,"remeras",800),
    new Producto (3,"tazas",900)
]

const nombre = prompt(`Indicanos tu nombre `)

console.log(`hola ${nombre} pasamos a comentarte nuestro stock`)

for (const muestrario of productos) {
    muestrario.precios()
}

const carrito =  [];

let seguirComprando = "si"

while (seguirComprando == "si"){
    let pregunta = Number(prompt(`${nombre} que producto quisieras llevar? 1: gorras, 2: remeras, 3: tazas`))
        if (pregunta == 1) {
        let cantidad = Number( prompt(`Cuantas gorras vas a llevar Juan?, recorda que llevando 10 o mas, tenes un 10% de descuento en el total de la compra`))
            for (i = 0; i < cantidad; i++){
            carrito.push(productos[0])
            }
            console.log(`${nombre} se agregaron ${cantidad} gorras a tu carrito`)
        
    }
    else if (pregunta == 2){
        let cantidad = Number( prompt(`Cuantas remeras vas a llevar Juan?, recorda que llevando 10 o mas, tenes un 10% de descuento en el total de la compra`))
            for (i = 0; i < cantidad; i++){
            carrito.push(productos[1])
            }
            console.log(`${nombre} se agregaron ${cantidad} remeras a tu carrito`)
        
    }
    else if (pregunta == 3){
        let cantidad = Number( prompt(`Cuantas tazas vas a llevar Juan?, recorda que llevando 10 o mas, tenes un 10% de descuento en el total de la compra`))
            for (i = 0; i < cantidad; i++){
            carrito.push(productos[2])
            }
            console.log(`${nombre} se agregaron ${cantidad} tazas a tu carrito`)
        
    }

    seguirComprando = prompt(`Deseas seguir comprando?`)
    
}

let cuotas = prompt (`${nombre} debes de abonar un total de` + sumaTotal() + `¿Queres abonarlo en cuotas? 1: si, 2:no`)


const sumaTotal = (valorEfectivo) =>{
    valorEfectivo = valorEfectivo + valorEfectivo


}


    for (const valorCarrito of carrito){
      sumaTotal(carrito[valorCarrito][0])
}
