import { useEffect, useState } from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // With Dependency and example Of Cleanup  
  // This way we reduce the use sideeffects for every keystrock while we take user input .
  // So,If we use API request we just send one times , not for every keystocks that will increase the network traffic

  useEffect(() => {
    
    const identifyer = setTimeout(() => {

      console.log('Checking Form Validity !');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );

    },500);
    return () => {

      console.log('Clean UP');
      clearTimeout(identifyer);
      
    }

  },[ enteredEmail, enteredPassword ]);


  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
