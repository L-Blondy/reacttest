import ReactDOM from "react-dom";
import React from "react"
import Form from "./src/Components/Form.js"
import UserData from "./src/Components/UserData.js"
import Store from "./src/Store.js"

function App() {
	return (
		<Store>
			<Form />
			<UserData />
		</Store>
	)
}

ReactDOM.render( <App />, document.getElementById( "reactroot" ) );