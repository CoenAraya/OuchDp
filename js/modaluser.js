const clickModal = document.getElementById('abrirUser')
const clickEnviar = document.getElementById('cerrarModal')
const activarModal = document.getElementById('modalusuario')
const propagarOff = document.getElementById('propagar')

clickModal.addEventListener('click',() =>{
    activarModal.classList.toggle('users-active')
})

clickEnviar.addEventListener('click',() =>{
    activarModal.classList.toggle('users-active')
})

activarModal.addEventListener('click', () =>{
    clickModal.click()
})   

propagarOff.addEventListener('click', (event)=>{
    event.stopPropagation()
})