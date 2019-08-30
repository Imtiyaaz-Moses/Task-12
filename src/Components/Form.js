import React from 'react';
import '../App.css';

class Form extends React.Component {

// The form will contain an button that will render the information.
// It also has an input box, for the user to enter the city name and country.
// When the button is clicked, the information will display.

    render() {
        return (
            <div>
            	<form  onSubmit={this.props.getWeather}>
            		<input type="text" name="city" placeholder="City..."/>
            		<input type="text" name="country" placeholder="Country..."/>
            		<button>Get Weather</button>
            	</form>
			</div>
        );
    }
}

export default Form;