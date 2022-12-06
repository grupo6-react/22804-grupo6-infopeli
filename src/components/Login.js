
import React, {useState, useContext} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import '../Login.css';

import{auth} from '../firebaseConfig';

import {useNavigate} from 'react-router';

import {useLoginContext} from '../UserProvider';
import Swal from 'sweetalert2';



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
            Swal.fire('Usuario Registrado con exito');
           
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
                <h3 className='titulo'>Registro de usuario </h3>
                <div className='registro'>
                <input className="form-control  m-auto mb-3"   placeholder='ingrese su email'  onChange={(event)=> {setRegisterEmail(event.target.value)}}/>
                <input className="form-control m-auto mb-3" placeholder='ingrese su coontraseña'  onChange={(event)=> {setRegisterPassword(event.target.value)}}/>
                <button className="mx-auto" onClick={registro}>Crear usuario</button>
                </div>
            </div>

            <div className='divLogin'>
                <h3 className='titulo'>Inicio  de sesion</h3>
                <div className='login'>
                <input className="form-control  m-auto mb-3"  placeholder='ingrese su email'  onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                <input className="form-control  m-auto mb-3" placeholder='ingrese su coontraseña'  onChange={(event)=> {setLoginPassword(event.target.value)}}/>
                <button className="mx-auto" onClick={inicioSesion}>iniciar sesion</button>
                </div>
            </div>
            <h4 className='titulo'> {saveLogin}</h4>
           
           {/*} <button className="mx-auto" onClick={cierreSesion}>Cerrar sesion</button>*/}
        </div>
    )
}

export default Login; 
