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
