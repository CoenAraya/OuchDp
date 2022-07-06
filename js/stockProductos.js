let stockProductosSpread = [
    {cantidad: 1, id: 1, nombre: "Remeras", tipo: "remera", desc: "Remeras personalizadas", precio: 2000, img: '../galeria/remera.jpg'},
    {cantidad: 1, id: 2, nombre: "Tazas", tipo: "taza", desc: "Tazas personalizadas", precio: 800, img:'../galeria/taza.jpg'},
    {cantidad: 1, id: 3, nombre: "Gorras", tipo: "gorra", desc: "Gorras personalizadas", precio: 900, img:'../galeria/gorra.jpg'},
    {cantidad: 1, id: 4, nombre: "Mates", tipo: "mates", desc: "Mates personalizada", precio: 1200, img: '../galeria/mates.jpg'},
    {cantidad: 1, id: 5, nombre: "Utiles", tipo: "utiles", desc: "Utiles personalizada", precio: 1000, img: '../galeria/utiles.jpg'},
    {cantidad: 1, id: 6, nombre: "Llaveros", tipo: "llaveros", desc: "Llaveros personalizados", precio: 500, img:'../galeria/llaveros.jpg'},
    {cantidad: 1, id: 7, nombre: "Bodys", tipo: "bodys", desc: "Bodys personalizados", precio: 800, img:'../galeria/bodys.jpg'},
    {cantidad: 1, id: 8, nombre: "Accesorios", tipo: "accesorios", desc: "Accesorios personalizados", precio: 900, img: '../galeria/accesorios.jpg'},
]

//copio el array con spread para que sea utilizado en cada pagina//
//Le cambie el nombre al array y lo replique con el nombre que normalmente utilizada//
let stockProductos  = [...stockProductosSpread]

console.log(stockProductos)


//desestructuracion de array //
//le pido me brinde la informacion que posee mi 6 objeto, que serian los llaveros//
let [ , , , , , llaveroDesc ] = stockProductosSpread

console.log(llaveroDesc)