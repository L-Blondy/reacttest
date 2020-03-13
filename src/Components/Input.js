import React from 'react'
import styled from "styled-components"

function Input( { error, id, ...props } ) {
	return (
		<InputWrapper>
			<InputStyled { ...props } id={ id } name={ id } />
			<EM htmlFor={ id }>{ error }</EM>
		</InputWrapper>
	)
}

export default Input

const InputWrapper = styled.span`
	display: inline-block;
	position: relative;
`
const InputStyled = styled.input`
	display: block;
`
const EM = styled.label`
	position: absolute;
	left: 100%;
	top: 0;
	color: red;
	white-space:nowrap;
`



