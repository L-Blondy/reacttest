import React from 'react'
import styled from "styled-components"
import Input from "./Input.js"
import { useInput, useFormValidation } from "../hooks"

function Form() {

	const [ email, bindEmail ] = useInput( "Enter your email" )
	const [ name, bindName ] = useInput( "Enter your Name" )
	const [ nameError, emailError, handleSubmit ] = useFormValidation( name, email )

	return (
		<FormStyled onSubmit={ handleSubmit }>
			<Input id="name" type="text" error={ nameError } { ...bindName } />
			<Input id="email" type="text" error={ emailError } { ...bindEmail } />
			<Input id="submit" type="submit" value="Submit" />
		</FormStyled>
	)
}

export default Form

const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	align-items: baseline
`

