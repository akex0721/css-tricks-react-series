/**
 * External Resources
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal Resources
 */
import './App.css';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<h2>Hello, El Reacto!</h2>
			</div>
		)
	}
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );
