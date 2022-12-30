//Importacion de metodos de Firebase Auth
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//importacion de hooks
import { useState } from "react";
//importacion de hoja de estilos
import './Login.css';
//importacion de useNavigate
import {useNavigate} from 'react-router';
//importacion de libreria sweetalert2
import Swal from 'sweetalert2';


const RestablecerContraseña = () => {
 //inicializacion de variables y  hooks 
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const auth = getAuth();
    
//funcion para enviar correo de restablecimiento
  const enviarCorreo =  ()=>{
    //implementacion de metodo sendPasswordResetEmail
    sendPasswordResetEmail(auth, email) 
    .then(() => {
      //mensaje de alerta con libreria sweetalert2
      Swal.fire({
        title: 'Se envio un correo de restablecimiento',
        text: ' revisa tu bandeja de entrada y sigue las instrucciones'
      })
      //redireccionar al login
      navigate('/irAlogin');
      console.log('se envio el email')
     })
     .catch((error) => {
      //manejo de errores
       console.log(error.message)
       // ..
     });
     
  }
 

      
return(
    <div className='principal'>
      <div className="divRegistro">
          <h4 className='titulo'>Restablecimiento de contraseña</h4>  
          <h4>Ingrese su email: </h4>
              <input type='text' className="form-control mb-2" placeholder='ingrese email'  onChange={(event)=> {setEmail(event.target.value)}}/>
              <button className="botones btn btn-warning mx-auto" onClick={enviarCorreo}>Enviar correo</button>
      </div>
    </div>
)

}

export default RestablecerContraseña;



