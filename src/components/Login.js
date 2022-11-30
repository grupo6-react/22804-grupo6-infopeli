
import React, {useState} from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

import{auth} from '../firebaseConfig';

const Login = () =>{
    //declaracion de variables
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser]= useState({})

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })


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
        }
      catch(error) {
        console.log(error.message)
      }
    } 

    const cierreSesion = async ()  =>{
      await signOut(auth);
    } 
    //
    return (
        <div className='login'>
            <div className='divRegistro'>
                <h3>Registro de usuario</h3>
                <input placeholder='ingrese sue email' autoComplete='off' onChange={(event)=> {setRegisterEmail(event.target.value)}}/>
                <input placeholder='ingrese sue coontraseña' autoComplete='off'  onChange={(event)=> {setRegisterPassword(event.target.value)}}/>

                <button onClick={registro}>Crear usuario</button>
            </div>

            <div className='divLogin'>
                <h3>Inicia sesion</h3>
                <input placeholder='ingrese sue email' autoComplete='off' onChange={(event)=> {setLoginEmail(event.target.value)}}/>
                <input placeholder='ingrese sue coontraseña' autoComplete='off' onChange={(event)=> {setLoginPassword(event.target.value)}}/>

                <button onClick={inicioSesion}>iniciar sesion</button>
            </div>
            <h4>Usuario actual</h4>
            {user?.email}

            <button onClick={cierreSesion}>Cerrar sesion</button>
        </div>
    )
}

export default Login; 
