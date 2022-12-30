import React, { useState, useContext, createContext } from "react";

export const LoginContext = createContext();


export function UserProvider(props) {

  
    const [saveLogin, setSaveLoginEmail]= useState()
    const valor= {saveLogin,setSaveLoginEmail};

    return (
        <LoginContext.Provider value={valor}>
       {props.children}
       </LoginContext.Provider>
    );
}
export function useLoginContext () {
    const context = useContext(LoginContext);
    return context;
}