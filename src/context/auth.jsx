import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = localStorage.getItem("@Auth:user")
      const storageToken = localStorage.getItem("@Auth:token")
  
      if(storageUser && storageToken) {
        setUser(storageUser)
      }
    }
    loadingStoreData()
  }, [])


  const signIn = async ({email, password}) => {
    const response = await api.post("/auth", {
      email,
      password
    });

    if(response.data.error){
      alert(response.data.error)
    } else{
      setUser(response.data.user)
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`
      localStorage.setItem("@Auth:token", response.data.token)
      localStorage.setItem("@Auth:user", JSON.stringify(response.data.user))
    }
  }

  const signOut = () => {
    console.log('ola')
    localStorage.clear()
    setUser(null)
    setRedirect(true)
  }

  console.log('Autorizado:', !!user);


  return(
    <AuthContext.Provider value={{
      user,
      signIn,
      signOut,
      signed: !!user,
    }}>
      {redirect && <Navigate to="/login" />}
      {children}
    </AuthContext.Provider>
  )
}