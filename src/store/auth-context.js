import React, { useEffect, useState } from "react";

const AuthContext = React.createContext(
    {
        isLoggedIn : false,
        onLogin : () => {},
        onLogout : ( email, password ) => {},
    }
);


export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Without Dependency
      useEffect(() => {
         if( localStorage.getItem('isLoggedIn') === '1'){
          setIsLoggedIn(true);
         }
      },[]);
    
    
      const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
    
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.clear('isLoggedIn');
        setIsLoggedIn(false);
      };
    
return (

    <AuthContext.Provider
        value={
            {
                isLoggedIn : isLoggedIn,
                onLogout : logoutHandler,
                onLogin : loginHandler,
            }
        }
    >
        {props.children}
    </AuthContext.Provider>
);
};

export default AuthContext;