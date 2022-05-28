const nombre = prompt(`Hola como te llamas?`);
const producto = prompt(`Que producto personalizado vas a llevar ` + nombre + `? Tenemos gorras, remeras y tazas.`)
const cantidad = Number(prompt(`Cuantas ${producto} vas a querer?  Recorda que llevando 10 prendas o mas, tenes envio gratis`))

let gorrasValor = 700
let remerasValor = 1200
let tazasValor = 500
let precio

if (cantidad >= 10) {
switch(producto){
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
        alert(`De momento no tenemos ${producto}, hasta luego !`)

}
} else  {
switch(producto){
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
        alert(`De momento no tenemos ${producto}, hasta luego !`)   

} 

}

let cuotas = prompt(`${nombre} tenes que abonar un total de ` + precio + `$. Queres abonarlo en cuotas?`);
let i = 1

if (cuotas == `si`) {
    while (i <= 12 ){
        let difCuotas = precio / i ;
        alert(`${i} cuotas de ${difCuotas}` )
        i++;
    }
    let cuotasCant = prompt(`En cuantas cuotas deseas realizarlo?`)    
    alert(`Puedes realizarlo en ${cuotasCant} cuotas de ` + precio / cuotasCant + `$`)
}
else {
    alert(`Deberas abonar un total de ${precio}$ en efectivo`);
}
