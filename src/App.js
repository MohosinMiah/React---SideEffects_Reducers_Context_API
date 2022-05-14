import { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
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

  <AuthContext.Provider value={{
       isLoggedIn : isLoggedIn,
       onLogout : logoutHandler,
       onLogin : loginHandler,
    }}>

      <MainHeader   />

      <main>
        {!isLoggedIn && <Login/>}
        {isLoggedIn && <Home  />}
      </main>
    </AuthContext.Provider>
    

  );
}

export default App;
