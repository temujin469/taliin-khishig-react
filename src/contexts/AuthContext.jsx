import { createContext, useEffect, useState } from "react";
import baseUrl from "../utils/axios";
// import { signin } from '../api/userApi'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const login = async (inputs) => {
    setLoading(true);
    try {
      const response = await baseUrl.post("/users/login", inputs);
      setCurrentUser(response.data.user);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErr(e);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, loading, err, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
