//EXPOSICION DE GALERIA//


const galeryStock = [
    {id: 1 , imagen: '../galeria/imgGalery/galeria1.jpg'},
    {id: 2 , imagen: '../galeria/imgGalery/galeria2.jpg'},
    {id: 3 , imagen: '../galeria/imgGalery/galeria3.jpg'},
    {id: 4 , imagen: '../galeria/imgGalery/galeria4.jpg'},
    {id: 5 , imagen: '../galeria/imgGalery/galeria6.jpg'},
    {id: 6 , imagen: '../galeria/imgGalery/galeria8.jpg'},
    {id: 7 , imagen: '../galeria/imgGalery/galeria9.jpg'},
    {id: 8 , imagen: '../galeria/imgGalery/galeria10.jpg'},
    {id: 9 , imagen: '../galeria/imgGalery/galeria11.jpg'},
    {id: 10 , imagen: '../galeria/imgGalery/galeria13.jpg'},
    {id: 11 , imagen: '../galeria/imgGalery/galeria15.jpg'},
    {id: 12 , imagen: '../galeria/imgGalery/galeria16.jpg'},
    {id: 13, imagen: '../galeria/imgGalery/galeria17.jpg'},
    {id: 14 , imagen: '../galeria/imgGalery/galeria18.jpg'},
    {id: 15 , imagen: '../galeria/imgGalery/galeria19.jpg'},
    {id: 16 , imagen: '../galeria/imgGalery/galeria21.jpg'},
    {id: 17 , imagen: '../galeria/imgGalery/galeria22.jpg'},
    {id: 18 , imagen: '../galeria/imgGalery/galeria23.jpg'},
    {id: 19 , imagen: '../galeria/imgGalery/galeria24.jpg'},
    {id: 20 , imagen: '../galeria/imgGalery/galeria25.jpg'},
]

galeryStock.forEach((element) =>{
    const div = document.createElement('div')
    div.innerHTML = `
                    <img class="imgCuadra" src=${element.imagen} width="250" height="210">
    `

    imgGalery.append(div)
})



