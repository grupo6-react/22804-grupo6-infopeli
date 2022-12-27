import './faq.css'


const Preguntas = props => {
    const preguntasFrecuentes = {
        "¿Que pasa si me olvido mi contraseña o nombre de usuario?":"El nombre de usuario siempre sera tu correo electronico que usaste al registrarte. Si has olvidado tu contraseña. Podemos enviarte cual es tu contraseña para que puedas entrar. Para eso es importante que respondas la pregunta que valida que eres tu el que solicita la contraseña.",
        "¿Puedo cambiar mi contraseña?":"Por el momento no contamos con esa caracteristica. Pero estamos desarrollandolo para mejorar la experiencia de usuario. Este atento a nuestras proximas actualizaciones",
        "¿Que pasa si no me llega la contraseña?":"Debes ser precavido como te estas registrando ya que utilizaremos ese correo electronico para mandarte primero la pregunta que si tu respuesta es correcta  y luego te enviaremos tu contraseña. En cualquier caso si no se encuentra en tu <span className='bold'>buzon de entrada principal</span>, buscar por favor en la carpeta de <span>Spam</span>.",
        "Perdi/olvide mi correo electronico, ¿Aun asi puedo recuperar mi cuenta?":"Lamentablemente solo podemos usar el correo electronico para poder recuperar tu cuenta. Por eso es imprencindible que te acuerdes tu correo electronico. De igual forma estamos trabajando para contar con una alternativa para esta problematica",
        "¿Que pasa si no encuentro la pelicula que busco?":"Ten en cuanta que no todas las peliculas pueden aparecer en el sitio web. Estara la posibilidad de que no encuentres la pelicula por su nombre en español, prueba escribiendo el nombres en ingles. Si aun no aparece esa pelicula en especifico. Lo mas probable es que no se encuentre. Si sucede eso estariamos agradecidos si nos brindas informacion de esa pelicula para poder agregarlo al sistema",
        "¿Puedo ver peliculas en este sitio web?":"El sitio web solo brinda informacion respecto a la trama de la pelicula, el casting, nombre de la pelicula y ademas un trailer respecto a la pelicula. Informacion brindada por la API de peliculas. La cual la informacion es verificada.",
        "¿Puedo ver mis series favoritas?":"Por el momento no se encuentras las series para poder marcar las favoritas. Estamos trabajando en esa caracteristica, en las proximas actualizaciones lo podras disfrutar",
        "¿Mis datos personales estan protegidos?":"Solo solicitamos datos basicos de registro como nombre de usuario y contraseña para poder registrarlos en la base de datos. Aun asi son datos protegidos debido a que usamos una base de datos protegido.",
        "¿Para que sirve marcar como favorito las peliculas?":"Una vez registrado y logeado el sistema identificara que sos un usuario de nuestro sitio web y te apareceran iconos de favorito para poder elegir cuales quieres que esten en tu catalogo de mejores peliculas. Una vez realizado esto puedes ir a la pestaña para visualizar todas tus favoritas.",
        "¿Puedo tener mas de una cuenta por persona?":"Una vez registrado el sistema identifica tu correo electronico. Al ser unico por persona, solo podes registrar uno por correo electronico.",
        "¿Por qué no me aparecen los iconos de favorito?":"Primero para que aparezcan los iconos de favorito debes estar logeado. En cualquier otro caso el icono no sera mostrado.",
    }

    const preguntasrender = Object.keys(preguntasFrecuentes).map((element,index) => {
        if (props.preg === "primero" && index < 4){
            return (
                <><li key={index} className='list-faq'>{element}</li><p className='text-question' dangerouslySetInnerHTML={{__html: preguntasFrecuentes[element]}}/></>
            )
        }else if (props.preg === "segundo" && index > 3 && index < 7){
            return (
                <><li key={index} className='list-faq'>{element}</li><p className='text-question'>{preguntasFrecuentes[element]}</p></>
            )
        }else if (props.preg === "tercero" && index > 6){
            return (
                <><li key={index} className='list-faq'>{element}</li><p className='text-question'>{preguntasFrecuentes[element]}</p></>
            )
        }
    })

    return (
        <ul>
            {preguntasrender}
        </ul>
    )
}

export const Faq = () => {

    return (
        <div className="container-faq">
            <div className="subcontainer-faq">
                <h2 className='h2-faq'>PREGUNTAS FRECUENTES</h2><hr />
                <div>
                    <h3 className='h3-faq'>Recuperacion de cuenta</h3>
                    <Preguntas preg="primero"/>
                </div>
                <div>
                    <h3 className='h3-faq'>Sobre la pagina</h3>
                    <Preguntas preg="segundo"/>
                </div>
                <div>
                    <h3 className='h3-faq'>Caracteristicas de tu cuenta</h3>
                    <Preguntas preg="tercero"/>
                </div>
            </div>
            
        </div>
        
    )
}