import { createContext, useContext } from "react";
import { getDocs, query, where } from "firebase/firestore";
import { favRef } from "../firebaseConfig";
import { useLoginContext } from "../UserProvider";

//Tomo email para armar la query de la BD
let emailLogged = "";
function CatchEmail() {
  const { saveLogin } = useLoginContext();
  const emailData = useContext(useLoginContext);
  emailLogged = { saveLogin };
  return emailLogged;
}
// Otra forma de traer datos, verifico si es posible con Get para pasar a OnSnapshot 
//ya que este ultimo es Online, pero no se si admite querys.



// FAv desde la bd
let favByEmail = [];

export const getFavByEmail = async () => {
  const emailWithFav = CatchEmail();
  const q = query(favRef, where("email", "==", emailWithFav.saveLogin));
  const sinQ = query(favRef);
  getDocs(q).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      favByEmail.push({ ...doc.data() });
      //``
      // favByEmail.push(`${doc.id} ;${doc.data().movieId}`)
    });
    console.log(JSON.stringify(favByEmail));
  });
};
// Terminan Favoritos desde la BD


export const Favcontext = createContext();
export function FavcontextProvider(props) {
  getFavByEmail();
  
  const contextFavData = favByEmail;
  const valor = contextFavData;
  // console.log(contextFavData)
  return (
    <Favcontext.Provider value={valor}>{props.children}</Favcontext.Provider>
  );
}
