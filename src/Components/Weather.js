import React from 'react';
import '../App.css';

class Weather extends React.Component {

// In this component, the state is being used. The content is being called from the 'app.js' file.
// It's then placed in paragraph tags, so that each item can be underneath each other. If all were in one tag, everything will be next to each other.

    render() {
        return (
            <div>    
            { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
            { this.props.temperature && <p>Current Temperature: { this.props.temperature }  °C</p> }
            { this.props.min && <p>Lo: { this.props.min }  °C</p> }
            { this.props.max && <p>Hi: { this.props.max }  °C</p> }
            { this.props.pressure && <p>Air Pressure: { this.props.pressure }  Pa</p> }
            { this.props.humidity && <p>Humidity: { this.props.humidity }  %</p> }
            { this.props.clouds && <p>Conditions: { this.props.clouds }</p> }
            { this.props.description && <p>Description: { this.props.description }</p> }
            { this.props.wind && <p>Wind Speed: { this.props.wind }  km/h</p> }
            { this.props.direction && <p>Wind Direction: { this.props.direction }  °</p> }
            { this.props.error && <h3>Error 404. { this.props.error }</h3> }
			</div>
        );
    }
}

export default Weather;