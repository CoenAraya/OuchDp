//objetos//

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

console.log(`Hola ${nombre} ! pasamos a comentarte nuestro stock`)

for (const muestrario of productos) {
    muestrario.precios()
}


//inicio de la aplicacion//


const carrito =  [];

let seguirComprando = "si"

let precioTotal = 0


while (seguirComprando.toLowerCase() == "si"){
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
        
    } else {

        alert(`${nombre} no tenemos productos con ese numero.`)
    }
    
    seguirComprando = prompt(`Deseas seguir comprando? si/no`)
    
}

if(carrito.length >=10){
    calcularTotal()
    precioTotal = precioTotal * 0.9
    
    alert(`Ya que tenes un total de ${carrito.length} productos se te aplicara el 10% de descuento en el total de tu compra !`)
} else {
    calcularTotal()
}

if (prompt (`${nombre} debes de abonar un total de ${precioTotal} ¿Queres abonarlo en cuotas? si/no`).toLowerCase() == `si`) {
    i = 1    

    while (i <= 12 ){
        let difCuotas = parseInt(precioTotal / i)
        alert(`${i} cuotas de ${difCuotas}$` )
        i++;
    }
    let cuotasCant = prompt(`En cuantas cuotas deseas realizarlo?`)    
    alert(`Debes abonar un total de ${cuotasCant} cuotas de ` + precioTotal / cuotasCant + `$`)
}
else {
    alert(`Deberas abonar un total de ${precioTotal}$ en efectivo, gracias por tu compra !`);
}

function calcularTotal() {


    carrito.forEach ((valorEfectivo) =>{

        precioTotal += valorEfectivo.precio
        
    })
console.log(precioTotal)
}


//     for (const valorCarrito of carrito){
//       sumaTotal(carrito[valorCarrito][0])
// }
