import { useState, useEffect } from 'react'

function useInput( placeholder, EM = "" ) {
	const [ value, setValue ] = useState( "" )
	const bindValue = ( e ) => setValue( e.target.value )
	useEffect( () => console.log( value ), [ value ] )

	return [ value, { placeholder, value, onChange: bindValue } ]
}
export default useInput
