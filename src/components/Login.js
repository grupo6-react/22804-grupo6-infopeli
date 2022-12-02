
import React, {useState} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import{auth} from '../firebaseConfig';

import {useNavigate} from 'react-router';

const Login = () =>{
    //declaracion de variables
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [saveLogin, setSaveLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [usuario, setUsuario]= useState({})
    const navigate = useNavigate();

    const divRegistro = document.getElementById('register');
    console.log('auth ni bien ingresa', auth)
if (auth.currentUser != null) {
  onAuthStateChanged(auth, (currentUser)=>{
    setUsuario(currentUser)
})
}
     


    //funciones
    const registro = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword);
            console.log(user)
        }
      catch(error) {
        console.log(error.message)
      }
    } 
    const inicioSesion = async() =>{
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail, loginPassword);
            console.log(user)
            console.log('auth cuando inicia sesion', auth)
            setSaveLoginEmail(loginEmail)
            navigate('/');
           // divRegistro.style.display='none';
        }
      catch(error) {
        console.log(error.message)
      }
    } 

    const cierreSesion = async ()  =>{
      await signOut(auth);
      console.log('se deslogueo', auth)
      setSaveLoginEmail('');
    } 
    
    return (
        <div className='login'>
            <div className='divRegistro'>
                <h3>Registro de usuario</h3>
                <div id='register'>
                <input  placeholder='ingrese sue email'  onChange={(event)=> {setRegisterEmail(event.target.value)}}/>
                <input placeholder='ingrese sue coontraseña'  onChange={(event)=> {setRegisterPassword(event.target.value)}}/>
               
                <button onClick={registro}>Crear usuario</button>
                </div>
            </div>

            <div className='divLogin'>
                <h3>Inicia sesion</h3>
                <input placeholder='ingrese sue email'  onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                <input placeholder='ingrese sue coontraseña'  onChange={(event)=> {setLoginPassword(event.target.value)}}/>

                <button onClick={inicioSesion}>iniciar sesion</button>
            </div>
            <h4 >Usuario actual {saveLogin}</h4>
           
            <button onClick={cierreSesion}>Cerrar sesion</button>
        </div>
    )
}

export default Login; 
