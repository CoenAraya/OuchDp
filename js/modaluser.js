"use strict"



//Modal para loguear usuario//

const clickModal = document.getElementById('abrirUser')
const clickEnviar = document.getElementById('enviarRegistro')
const activarModal = document.getElementById('modalusuario')
const propagarOff = document.getElementById('propagar')
const vaciarLogueo = document.getElementById('deslogueo')

clickModal.addEventListener('click',() =>{
    activarModal.classList.toggle('users-active')
})

 
activarModal.addEventListener('click', () =>{
    clickModal.click()
})   

propagarOff.addEventListener('click', (event)=>{
    event.stopPropagation()
})

vaciarLogueo.addEventListener('click', () => {
    if(localStorage.getItem('registroNombre')){
    Swal.fire({
        title: 'Seguro deseas desloguearte?',
        text: "Esta accion borrara los productos de tu carrito !",
        showCancelButton: true,
        imageUrl:'../galeria/logo.png',
        imageHeight: 300,
        confirmButtonColor: 'rgba(130,150,90,9)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, hasta luego !',
        cancelButtonText: 'Cancelar',
        backdrop: `rgba(0,0,123,0.4)`,
            background: '#eddc3d',
            color: '#610f6a',
      }).then((result) => {
        if (result.isConfirmed) {
            cargaBorra()
                  
      }
})
    }else {
        Swal.fire({
            
            title:'No estas logueado',
            backdrop: `rgba(0,0,123,0.4)`,
            background: '#eddc3d',
            color: '#610f6a',

        
        
        })

    }
})



//Seleccion y guardado de datos//
clickEnviar.addEventListener('click', () => {
    
    
const regName = document.getElementById('nombreUsuario').value;
localStorage.setItem ('registroNombre', regName )
const regPass = document.getElementById('contrasenia').value;
localStorage.setItem ('registroPass', regPass )
clickModal.click()
window.location.reload()
})





//Guardado de log in//

const nombreBarra = document.getElementById('nameOnNav')

 if (localStorage.getItem('registroNombre')){
        
    const div = document.createElement('div')
    div.classList.add("saludo")
    div.innerHTML= `Bienvenido, ${localStorage.getItem("registroNombre")} !  
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-2-front" viewBox="0 0 16 16">
      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
      <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
    </svg>
    `

    nameOnNav.append(div)
    
    
 }else {
    const div = document.createElement('div')
    div.classList.add("saludo")
    div.innerHTML= `Logueate !
    `

    nameOnNav.append(div)
    
    
 }


 
const cargaBorra = ()=> {
    localStorage.clear() 
    window.location.reload()
}

