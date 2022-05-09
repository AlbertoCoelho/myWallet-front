import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api,makeLogin } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ( {children} ) => {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect( () => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem("token");

    if(recoveredUser && token){
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);

  }, [])

  const login = async (email,password,isLoading,setIsLoading) => {
    const formData = {
      email:email,
      password:password
    }
    try {
      const response = await makeLogin(formData);
      console.log(response);

      const loggedUser = response.data;
      const token = response.data.token;

      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser(loggedUser);
      navigate("/cash-income");
    } catch{
      alert("User not registered, make your registration!");
      isLoading.placeholder = "Entrar";
      isLoading.disabled = false;
      setIsLoading({...isLoading});
    }
  }

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");      
    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value= { {authenticated: !!user,user,login,logout,loading } }>
      {children}
    </AuthContext.Provider>
  );
}