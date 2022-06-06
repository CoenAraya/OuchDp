const nombre = prompt(`Hola como te llamas?`);
let gorrasValor = 700
let remerasValor = 1200
let tazasValor = 500
let precio


calcularValor()


while (prompt(`${nombre} deseas agregar algo mas? si/no`) == "si"){
    precio = precio + calcularValor()
    
}


let i = 1
if (prompt(`${nombre} tenes que abonar un total de ` + precio + `$. Queres abonarlo en cuotas?`).toLowerCase() == `si`) {
    while (i <= 12 ){
        let difCuotas = parseInt(precio / i)
        alert(`${i} cuotas de ${difCuotas}` )
        i++;
    }
    let cuotasCant = prompt(`En cuantas cuotas deseas realizarlo?`)    
    alert(`Puedes realizarlo en ${cuotasCant} cuotas de ` + precio / cuotasCant + `$`)
}
else {
    alert(`Deberas abonar un total de ${precio}$ en efectivo`);
}



//FUNCION PARA AGREGAR PRODUCTOS//

function calcularValor (){
    let producto = (prompt(`Que producto personalizado vas a llevar ` + nombre + `? Tenemos gorras, remeras y tazas.`))
    let cantidad = Number(prompt(`Cuantas ${producto} vas a querer?  Recorda que llevando 10 productos o mas, un 10% de descuento en el total de la compra`))

        if (cantidad >= 10) {
        switch(producto.toLowerCase()){
            case `gorras`:
                precio = (gorrasValor * 0.90)*cantidad
                break
            case `remeras`:
                precio = (remerasValor * 0.90)*cantidad
                break
            case `tazas`:
                precio = (tazasValor * 0.90)*cantidad
                break
            default:
                alert(`No tenemos un producto con el nombre ${producto} disculpe !`)
        
        
        }
        } else  {
        switch(producto.toLowerCase()){
            case `gorras`:
                precio = gorrasValor*cantidad
                break
            case `remeras`:
                precio = remerasValor*cantidad
                break
            case `tazas`:
                precio = tazasValor*cantidad
                break
            default:
                alert(`No tenemos un producto con el nombre ${producto} disculpe !`)

        
} 
}
alert(`${nombre} esto tiene un valor de ${precio}$`)
return precio

}
