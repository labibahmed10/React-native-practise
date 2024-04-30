import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setuser] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setisLoggedIn(true);
          setuser(res);
        } else {
          setisLoggedIn(false);
          setuser(null);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
