import { createContext, useState, useContext } from "react";

const NameContext = createContext(); 

const NameProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({fname:"", lname:"", email:"", id:""});
  const [isLogged, setIsLogged] = useState(false) 
  const serverURL = "https://url-backend-z3ta.onrender.com";

  return (
    
    <NameContext.Provider 
      value={{ currentUser, setCurrentUser, isLogged, setIsLogged, serverURL }}
    >
      {children}
    </NameContext.Provider>
  );
};

 const useGlobalContext = () => {
    return useContext(NameContext);
  };
  
  export { NameContext, NameProvider, useGlobalContext };