import React, { useState, createContext } from "react"

export const UserContext = createContext()

export default function Store( { children } ) {

	return (
		<UserContext.Provider value={ useState( "init" ) }>
			{ children }
		</UserContext.Provider>
	)
}