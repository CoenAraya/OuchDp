//PAGINA DE CONTACTO, SIN BACK PERO SE GUARDA EN LOCALSTPRAGE//

const consultaVal = document.getElementById('enviarConsulta')

consultaVal.addEventListener( 'click', () => {

    const nombre = document.getElementById('nombreConsulta').value
    localStorage.setItem('nombreEnviar' , document.getElementById('nombreConsulta').value)
    console.log(nombre)
    const mail = document.getElementById('mailConsulta').value
    localStorage.setItem('mailEnviar' , document.getElementById('mailConsulta').value)
    console.log(mail)
    const consulta = document.getElementById('consultaConsulta').value
    localStorage.setItem('consultaEnviar' , document.getElementById('consultaConsulta').value)
    console.log(consulta)
    
    Toastify({
        text: "Consulta enviada con exito !",
        duration: 3000,
        gravity: "bottom",
        position: `right`,
        stopOnFocus: true, 
        style: {
          background: "#eddc3d",
        }
      }).showToast();
    setTimeout(() => {
      window.location.reload()
    }, 3000)
})
