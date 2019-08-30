import React from 'react';
import './App.css';
import Titles from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

// This is the API key, that will be used.
const API_KEY = "dfee6d599fb2e462aac80fe4502b2adb"

// This will render and display the content needed.
// The state is being set to undefined, so it has no value on load.
// A function 'getWeather' is made, where the content gets fetched. The API call is being made and converted to 'JSON'
// The values of the input is then grabbed, to set the state.
// A condition is then placed, so that if the values are not entered correctly, an error message will appear.
class App extends React.Component {
    state = {
        temperature: undefined,
        min: undefined,
        max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
        	console.log(data)
            this.setState({
                temperature: data.main.temp,
                min: data.main.temp_min,
                max: data.main.temp_max,
                pressure: data.main.pressure,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                clouds: data.weather[0].main,
                description: data.weather[0].description,
                wind: data.wind.speed,
                direction: data.wind.deg,
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                min: undefined,
                max: undefined,
                pressure: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                clouds: undefined,
                description: undefined,
                wind: undefined,
                direction: undefined,
                error: "Enter a valid location!"
            });
        }
    }
    // All content is now being loaded.
    render() {
        return (
            <div className="App">
            <Titles />
            <Form getWeather={this.getWeather} />
            <Weather 
            temperature={this.state.temperature}
            min={this.state.min}
            max={this.state.max}
            pressure={this.state.pressure}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            clouds={this.state.clouds}
            description={this.state.description}
            wind={this.state.wind}
            direction={this.state.direction}
            error={this.state.error}
             />
      </div>
        );
    }
}

export default App;