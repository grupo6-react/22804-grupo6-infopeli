import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar"
import './contacto.css'
import {useForm} from 'react-hook-form'
import {useState} from 'react'


export const Contacto = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (event,data) => {
        event.preventDefault()
        console.log(data);
    }

    return (
        <div>
                <form className='form-contacto' onSubmit={handleSubmit(onSubmit)}>
                    <label 
                        htmlFor="name">
                            Nombre:
                            <input 
                                id="name" 
                                placeholder="Tu nombre"
                                {...register('name', { required: true, maxLength: 30 })} 
                            />
                    </label>
                    {errors.name && errors.name.type === "required" && <span className='danger'>Requisito completar</span>}
                    <label 
                        htmlFor="email">
                            Email:
                            <input
                                id="email"
                                placeholder="Tu correo electronico"
                                {...register('email',{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                            />
                    </label>
                    {errors.email && errors.email.type === 'required' && <span className="danger">Requisito completar</span>}
                    {errors.email && errors.email.type == 'pattern' && <span className='danger'>Ingrese un correo electronico valido</span>}
                    <textarea
                        id='comentario'
                        placeholder="Tu comentario aqui..."
                        {...register('comentario',{required: true})}>
                    </textarea>
                    {errors.comentario && errors.comentario.type === 'required' && <span className="danger">Requisito ingresar comentario</span>}
                    <input type="submit" className='btn btn-lg btn-primary' value={'Enviar'}/>
                </form>
        </div>
    )

}