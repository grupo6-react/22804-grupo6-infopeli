import './contacto.css'
import Swal from 'sweetalert2'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'



export const Contacto = () => {

    const form = useRef();

    const submitContacto = e => {
        e.preventDefault() 

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su comentario fue enviado',
            iconColor: '#000',
            showConfirmButton: false,
            timer: 1500
        })

        emailjs.sendForm('service_9c8v8d8', 'template_sklht4n', form.current, '6JqKTTGAO1wxKEXTD')
        
        e.target.reset()

    }

    return (
        <div className='container-contacto'>
            <div className='subcontainer-contacto'>
                <h2 className='h2-contacto'>CONTACTATE CON NOSOTROS</h2><hr />
                <form className='form-contacto' ref={form} id='form-contacto' onSubmit={submitContacto}>
                    <div className='container-name-email'>
                        <label 
                            htmlFor="name">
                                Nombre:
                        </label>
                        <input 
                            id="name" 
                            placeholder="Tu nombre"
                            name='name'
                            required
                            onInvalid={F => F.target.setCustomValidity('Ingrese su nombre')}
                            onInput={F => F.target.setCustomValidity('')} 
                        />
                        <label 
                            htmlFor="email">
                                Email:
                        </label>
                        <input
                            id="email"
                            placeholder="Tu correo electronico"
                            name='email'
                            required
                            pattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                            onInvalid={F => F.target.setCustomValidity('Ingrese un correo electronico valido')}
                            onInput={F => F.target.setCustomValidity('')} 
                        />
                    </div>
                        <label
                            htmlFor="comentario">
                                Tu comentario:
                        </label>
                        <textarea
                            id='comentario'
                            placeholder="Tu comentario aqui..."
                            name='message'
                            required
                            onInvalid={F => F.target.setCustomValidity('Debe rellenar este espacio')}
                            onInput={F => F.target.setCustomValidity('')} 
                            >
                        </textarea>
                        <button type="submit" className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </div>
    )

}