import { useState, useEffect, createContext, useContext } from "react";
import { authApi } from "../services/api";
import apiClient from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("adminToken") || null);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);

  // Attach token to Axios headers whenever it changes
  useEffect(() => {
    if (!apiClient?.defaults?.headers?.common) return;
    if (token) {
      apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete apiClient.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Fetch current user if token exists
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await authApi.getMe("/auth/me");
        setUser(response.data.user);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [token]);

  // Helper to save auth state
  const saveAuth = (token, user) => {
    localStorage.setItem("adminToken", token);
    setToken(token);
    setUser(user);
  };

  // Register
  const register = async (name, email, password) => {
    setAuthLoading(false);
    try{
        const res = await authApi.register(name, email, password );
        saveAuth(res.data.token, res.data.user);
        return res.data.user;
    }finally{
        setAuthLoading(true);
    }
  };

  // Login
  const login = async (email, password) => {
    setAuthLoading(false);
    try{
        const res = await authApi.login( email, password );
        saveAuth(res.data.token, res.data.user);
        return res.data.user;
    }finally{
        setAuthLoading(true);
    }
  };

  // Google Login
  const googleLogin = async (credential) => {
    setAuthLoading(false);
    try{
        const res = await authApi.google( {credential} );
        saveAuth(res.data.token, res.data.user);
        console.log(res.data);
        return res.data.user;
    }catch(err){
        console.error("Google Login Error:",err);
        setAuthLoading(true);
    }
    finally{
        setAuthLoading(true);
    }
  };
  
  // Logout
  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setUser(null);
  };


  const value = { user, token, loading, authLoading,register, login, googleLogin, logout };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
