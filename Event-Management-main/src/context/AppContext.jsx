// import { useContext } from "react";
// import { useState } from "react";
// import { createContext, Navigate, useNavigate } from "react-router-dom";

// export const AppContext = createContext();

// export const AppContextProvider = ({children}) => {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null)
//     const [isAdmin, setIsAdmin] = useState(false)
//     const [showUserLogin, setShowUserLogin] = useState(false)

//     const value = {navigate, user, setUser, setIsAdmin, isAdmin, showUserLogin, setShowUserLogin}

   

//     return <AppContext.Provider value={value}>
//         {children}
//     </AppContext.Provider>
// }

// export const useAppContext = () => {
//     return useContext(AppContext)
// }


import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();  // Make sure this provider is inside <BrowserRouter />
  
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {
    navigate,
    user, setUser,
    isAdmin, setIsAdmin,
    showUserLogin, setShowUserLogin
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
