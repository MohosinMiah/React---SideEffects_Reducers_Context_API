## React JS Advance Topic : Side Effect, Reducer and Context API

## Side Effect

`useSideEffect()`

<p> For More Details Eample useEffects function used : <strong>Based on Dependency</strong> and <strong>Without Dependency</strong></p>

https://reactjs.org/docs/hooks-effect.html

## React Context API

<p> We can use React Context API two way </P>
<p>Provider and Consumer</p>
<p>Useing useContext Hock</p>

## Code snap for Send Request or validate for user inputs : `useEffects`

`
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
`

## Building and Using a Custom Context Provider. So that we can use all functions and data in a seperate file

This way we can store all the function and variable in a seperate file.

## Where To Use Context API and Props

Context API : Where we need common task or goal.
Example, logoput method. This method always logout a user.

Props : Example , In a button onClick method event. onClick={method}. method task may vari based on components.
