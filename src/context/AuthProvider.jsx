import { createContext, useEffect, useState } from "react";
import { useQueryClient } from "react-query";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({});
    const querryClient=useQueryClient();

    useEffect(()=>{
        const current_user=JSON.parse(localStorage.getItem('user'));
        if(current_user){
            setAuth(current_user);
            querryClient.setQueryData('authUser',current_user);
        }
        else{
            setAuth(null);
        }
    },[querryClient])
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;