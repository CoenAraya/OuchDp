Hola !

Bienvenido a mi sitio web !

Ante todo quiero agradecer haberlo hecho posible, porque no lo hubiese logrado sin tu ayuda.

Paso a comentar funciones que mi web realiza para no perder ningun paso del trabajo que lleva la misma.

Seccion ACCEDER:
Al ingresar a la web, podras notar sobre el margen superior izquierdo un texto que invita a loguearte.
Este mismo al loguearte se modifica, entregando un mensaje de bienvenida que deja en evidencia el 
perfil que se esta utilizando.
No te queres loguear pero queres realizar una compra? Proba y me contas que tal te fue.
Al intentar desloguear, se abre un alert indicando las consecuencias que esto ultimo trae.

Seccion CLIENTES:
Esta parte de la pagina, toma informacion de la API de jsonHolder para simular opiniones de 
nuestros clientes satisfechos.

Seccion PRODUCTOS
Aqui podremos solicitar los articulos que deseamos adquirir.
Mostramos nuestro array del stock.
Se ve con claridad un boton para agregar el producto a nuestro carrito, que al ejecutarse nos devuelve 
un alert para informar que el mismo fue agregado con exito.

Seccion CARRITO
Al ingresar a nuestro carrito, se abre un modal que se refleja lo que se solicito desde nuestra 
seccion productos.
Nos habilita la posibilidad de sumar o restar de este mismo producto.
Nos brinda el valor del total por cada uno de los productos y el valor final total. En este modal 
tambien encontramos a modo informativo, que se nos realizara un descuento al llegar o superar 10 productos.
Con un if al igualar o superar la cantidad indicada (10) se aplica un descuento del 10% del total, 
y tambien es aplicado al valor final.
Tambien es posible vaciar la totalidad del carrito o la totalidad de 1 item en particular.

Seccion GALERIA
Se despliega mostrando un array de objetos, en este caso, productos ya elaborados por el emprendimiento 
para que sea mas visible la idea de la web.

Seccion CONTACTO
Nos brinda la posibilidad de realizar una consulta, al clickear el boton enviar, ya que no contamos 
aun con la parte de backend, simula el envio de la solicitud.
Esta se guarda en el localStorage.

Gracias una vez más, y nos vemos en React !

