
import React, {useState, useContext} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import '../Login.css';

import{auth} from '../firebaseConfig';

import {useNavigate} from 'react-router';

import {useLoginContext} from '../UserProvider';
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
            const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword);
        //aviso de registro con exito utilizando libreria sweetalert2
            Swal.fire('Usuario Registrado con exito'); 
        }
       
      catch(error) {
        //validaciones
        if ((registerEmail === '' || registerPassword=== '')) {
          alert('los campos deben se rellenados')
        }
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          alert('el nombre de usuario ya esta en uso')
        } 
        if (registerPassword.length < 7 && registerPassword !='' ) {
          alert('debe ingresar una contraseña de almenos 7 caracteres')
        }
       
        console.log(error.message)
      }
    } 
   //función de inicio de sesión 
    const inicioSesion = async() =>{
      //inicio de sesion utilizando libreria auth de firebase metodo 'signInEmailAndPassword'
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
            
           await setSaveLoginEmail(loginEmail)
            navigate('/');
        }
      catch(error) {
        console.log(error.message)
      }
    } 
    
    return (
        <div className='login'>
          {/*registro de usuario*/ }
            <div className='divRegistro'>
                <h3 className='titulo'>Registro de usuario </h3>
                <div className='registro'>
                <input id="register" className="form-control  m-auto mb-3"   placeholder='Ingrese su email'  onChange={(event)=> {setRegisterEmail(event.target.value)}}/>
                <input id="password" className="form-control m-auto mb-2" placeholder='Ingrese su coontraseña'  onChange={(event)=> {setRegisterPassword(event.target.value)}}/>
                <button className=" btn btn-warning mx-auto" onClick={registro}>Crear usuario</button>
                </div>
            </div>

            <div className='divLogin'>
              {/*incicio de sesion*/}
                <h3 className='titulo'>Inicio  de sesion</h3>
                <div className='login'>
                <input className="form-control  m-auto mb-3"  placeholder='Ingrese su email'  onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                <input className="form-control  m-auto mb-2" placeholder='Ingrese su coontraseña'  onChange={(event)=> {setLoginPassword(event.target.value)}}/>
                <button className=" btn btn-warning mx-auto " onClick={inicioSesion}>iniciar sesion</button>
                </div>
            </div>
            {/*usuario logueado*/}
            <h4 className='titulo'> {saveLogin}</h4>           
        </div>
    )
}

export default Login; 
