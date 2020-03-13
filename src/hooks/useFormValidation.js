import { useState, useEffect, useContext } from 'react'
import { UserContext } from "../Store.js"

function useFormValidation( name, email ) {

	const [ nameError, setNameError ] = useState( "" )
	const [ emailError, setEmailError ] = useState( "" )
	const [ , setUserData ] = useContext( UserContext )

	const handleSubmit = ( e ) => {
		e.preventDefault()

		if ( !nameError && !emailError ) {
			setUserData( [ name, email ] )
		} else {
			setUserData( "ERROR, try again" )
		}
	}

	useEffect( () => {
		setNameError( name != "name" ? "name error" : "" )
		setEmailError( email != "email" ? "email error" : "" )
	}, [ email, name ] )

	return [ nameError, emailError, handleSubmit ]
}
export default useFormValidation