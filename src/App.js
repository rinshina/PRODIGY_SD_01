import React, { useState } from 'react';
import './App.css';

// Main component for the Temperature Converter application
function App() {
  const [temperature, setTemperature] = useState('');  
  const [unit, setUnit] = useState('C'); 
  const [convertedTemperature, setConvertedTemperature] = useState({}); 
  // Function to convert temperatures between C,F,K
  const convertTemperature = (temp, unit) => {  
    //conversion functions
    const celsiusToFahrenheit = (celsius) => (9 / 5) * celsius + 32;  
    const celsiusToKelvin = (celsius) => celsius + 273.15;  
    const fahrenheitToCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);  
    const fahrenheitToKelvin = (fahrenheit) => (5 / 9) * (fahrenheit - 32) + 273.15;  
    const kelvinToCelsius = (kelvin) => kelvin - 273.15;  
    const kelvinToFahrenheit = (kelvin) => (9 / 5) * (kelvin - 273.15) + 32;  
     

    let celsius, fahrenheit, kelvin;  
    // To handle conversion based on the unit of the temperature
    switch (unit) {  
      case 'C':
        celsius = temp;
        fahrenheit = celsiusToFahrenheit(temp);
        kelvin = celsiusToKelvin(temp);
        break;
      case 'F':
        celsius = fahrenheitToCelsius(temp);
        fahrenheit = temp;
        kelvin = fahrenheitToKelvin(temp);
        break;
      case 'K':
        celsius = kelvinToCelsius(temp);
        fahrenheit = kelvinToFahrenheit(temp);
        kelvin = temp;
        break;
      default:
        return {}; // Return an empty object for unsupported units
    }
    return { celsius, fahrenheit, kelvin };  // Return converted temperatures
  }
  // Function to handle the conversion button click
  const handleConvert = () => {  
    const temp = parseFloat(temperature);
    if (!isNaN(temp)) {
      const results = convertTemperature(temp, unit);
      setConvertedTemperature(results);
    } else {
      setConvertedTemperature({});
    }
  };
 
  return (
    <div className='App'>
      <h1>Temperature Converter</h1>
      <div>
        <input
          type='text'
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder='Enter Temperature'
        />
        
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
        { convertedTemperature.celsius !== undefined && (  
          <div>
            <p>{temperature} {unit} is:</p>
            <p>{convertedTemperature.celsius} degrees Celsius</p>
            <p>{convertedTemperature.fahrenheit} degrees Fahrenheit</p>
            <p>{convertedTemperature.kelvin} Kelvin</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
