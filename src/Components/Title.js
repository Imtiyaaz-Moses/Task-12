import React from 'react';
import '../App.css';

class Titles extends React.Component {

// This component will render the heading and description, informing the user what to do.

    render() {
        return (
            <div>
				<h1>Weather Finder</h1>
				<p className="header">Find out what the weather forecast is</p>
				<p className="header">Enter a valid location below:</p>
			</div>
        );
    }
}

export default Titles;