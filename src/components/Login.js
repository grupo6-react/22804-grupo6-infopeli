
import React, {useState, useContext} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import{auth} from '../firebaseConfig';

import {useNavigate} from 'react-router';

import {useLoginContext} from '../UserProvider';



const Login = () =>{
    //declaracion de variables
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    //Variable useContext
     const {saveLogin, setSaveLoginEmail} = useLoginContext()
    

    //funciones
    const registro = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword);
            setRegisterEmail('');
            setLoginPassword('');
        }
      catch(error) {
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
    const inicioSesion = async() =>{
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
           await setSaveLoginEmail(loginEmail)
            navigate('/');
        }
      catch(error) {
        console.log(error.message)
      }
    } 

    const cierreSesion = async ()  =>{
      await signOut(auth);
      setSaveLoginEmail('');
    } 
    
    return (
        <div className='login'>
            <div className='divRegistro'>
                <h3>Registro de usuario</h3>
                <div id='register'>
                <input  placeholder='ingrese su email'  onChange={(event)=> {setRegisterEmail(event.target.value)}}/>
                <input placeholder='ingrese su coontraseña'  onChange={(event)=> {setRegisterPassword(event.target.value)}}/>
                <button onClick={registro}>Crear usuario</button>
                
                </div>
            </div>

            <div className='divLogin'>
                <h3>Inicia sesion</h3>
                <input placeholder='ingrese su email'  onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                <input placeholder='ingrese su coontraseña'  onChange={(event)=> {setLoginPassword(event.target.value)}}/>
                <button onClick={inicioSesion}>iniciar sesion</button>
            </div>
            <h4 >Usuario actual {saveLogin}</h4>
           
            <button onClick={cierreSesion}>Cerrar sesion</button>
        </div>
    )
}

export default Login; 
