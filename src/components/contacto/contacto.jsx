import './contacto.css'


export const Contacto = () => {


    const submitContacto = e => e.preventDefault() 

    return (
        <div>
            <form className='form-contacto' onSubmit={submitContacto}>
                <div className='container-name-email'>
                    <label 
                        htmlFor="name">
                            Nombre:
                    </label>
                    <input 
                        id="name" 
                        placeholder="Tu nombre"
                        name='nombre'
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
                        name='comentario'
                        required
                        onInvalid={F => F.target.setCustomValidity('Debe rellenar este espacio')}
                        onInput={F => F.target.setCustomValidity('')} 
                        >
                    </textarea>
                    <button type="submit" className='btn btn-primary'>Enviar</button>
            </form>
        </div>
    )

}