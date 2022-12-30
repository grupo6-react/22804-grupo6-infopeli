
import React, {useState} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

import './Login.css';

import{auth} from '../../firebaseConfig';

import {useNavigate} from 'react-router';

import {useLoginContext} from '../../UserProvider';
import Swal from 'sweetalert2';





const Login = () =>{
    //declaración de hooks
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //declaracion de variable  useNavigate
    const navigate = useNavigate();

    //declaración useContext
    const {saveLogin, setSaveLoginEmail} = useLoginContext()
    

    //funciones
    //funcion registro de usuario
    const registro = async () =>{
      //almacenamiento de email y contraseña utilizando libreria auth de firebase metodo 'createUserWhithEmailAndPassword'
        try{
            // const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword);
        //aviso de registro con exito utilizando libreria sweetalert2
            Swal.fire('Usuario Registrado con exito'); 
        }
       
      catch(error) {
        //validaciones
        if ((registerEmail === '' || registerPassword=== '')) {
          Swal.fire('los campos deben se rellenados')
        }
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          Swal.fire('el nombre de usuario ya esta en uso')
        } 
        if (registerPassword.length < 7 && registerPassword !=='' ) {
          Swal.fire('debe ingresar una contraseña de almenos 7 caracteres')
        }
       
        console.log(error.message)
      }
    } 
   //función de inicio de sesión 
    const inicioSesion = async() =>{
      //inicio de sesion utilizando libreria auth de firebase metodo 'signInEmailAndPassword'
        try{
            // const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
            
           await setSaveLoginEmail(loginEmail);
            navigate('/');
        }
      catch(error) {
        console.log(error.message)
      }
    } 
    
    return (
        <div className='principal '>
          {/*registro de usuario*/ }
            <div className='divRegistro'>
                <h4 className='titulo'>Registro de usuario </h4>
                <div className='formulario'>
                <input id="register" className="form-control  m-auto mb-3"   placeholder='ingrese su email'  onChange={(event)=> {setRegisterEmail(event.target.value)}}/>
                <input type='password' id="password" className="form-control m-auto mb-2" placeholder='ingrese su coontraseña'  onChange={(event)=> {setRegisterPassword(event.target.value)}}/>
                <button className="botones btn btn-warning mx-auto" onClick={registro}>Crear usuario</button>
                </div>
            </div>
            {/*incicio de sesion*/}
            <div className='divLogin'>
                <h4 className='titulo'>Inicio  de sesion</h4>
                <div className='formulario'>
                <input className="form-control  m-auto mb-3"  placeholder='ingrese su email'  onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                <input type='password' className="form-control  m-auto mb-2" placeholder='ingrese su coontraseña'  onChange={(event)=> {setLoginPassword(event.target.value)}}/>
                <button className="botones btn btn-warning mx-auto" onClick={inicioSesion}>iniciar sesion</button>
                </div>
            </div>
            <a href='/restablecerContraseña'> restablecer contraseña</a>
            {/*usuario logueado*/}
            <h4 className='titulo'> {saveLogin}</h4>           
        </div>
    )
}

export default Login; 
