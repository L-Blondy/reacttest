import React, { useContext } from 'react'
import { UserContext } from "../Store.js"

function UserData() {

	const [ userData ] = useContext( UserContext )

	return (
		<div>
			{ userData }
		</div>
	)
}

export default UserData
