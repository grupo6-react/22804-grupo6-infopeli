// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import {getAuth} from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";

import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByvz0bRGVQkU4YCCjQpZ_J3Y2_VWywH3U',
  authDomain: 'bd-infopelis.firebaseapp.com',
  projectId: 'bd-infopelis',
  storageBucket: 'bd-infopelis.appspot.com',
  messagingSenderId: '647398341537',
  appId: '1:647398341537:web:3bd4243b11181141ff29e0',
  measurementId: 'G-2VJSKLMYFF',
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app); 

export const auth = getAuth(app)

// Dejo referencia a la coleccion
export const favRef = collection(db, 'favoritos')

// Agregar Favs a la coleccion
export const saveFav = (email, movieId) => {
 
  addDoc(favRef, { email, movieId });
  

};

//Obtener todos los favoritos
export const getFav =  () => {
   getDocs(favRef)
   .then((snapshot)=>{
    let favoritos = [];
    snapshot.docs.forEach((doc)=>{
      favoritos.push({ ...doc.data(), id:doc.id})
    })
    //  console.log(favoritos)
    
   })
   .catch(err =>{
    console.log(err.message)
   })
  console.log("llego desde firebaseconfig");
  
};
// Borrar favorito
export function deleteFav(uid){
  
  const delRef = doc(db, 'favoritos', uid)
  deleteDoc(delRef)
  
}
  
