function convertTemperature() {
    let temperature = parseFloat(document.getElementById("inputTemp").value);
    let unit = document.getElementById("selectUnit").value;
    let result = document.getElementById("result");
  
    if (unit === "celsius") {
      // Conversion formulas for Celsius to Fahrenheit and Kelvin
      let fahrenheit = (temperature * 9/5) + 32;
      let kelvin = temperature + 273.15;
  
      result.innerHTML = `Temperature in Fahrenheit: ${fahrenheit}Â°F<br>
                          Temperature in Kelvin: ${kelvin}K`;
    } else if (unit === "fahrenheit") {
      // Conversion formulas for Fahrenheit to Celsius and Kelvin
      let celsius = (temperature - 32) * 5/9;
      let kelvin = (temperature + 459.67) * 5/9;
  
      result.innerHTML = `Temperature in Celsius: ${celsius}Â°C<br>
                          Temperature in Kelvin: ${kelvin}K`;
    } else if (unit === "kelvin") {
      // Conversion formulas for Kelvin to Celsius and Fahrenheit
      let celsius = temperature - 273.15;
      let fahrenheit = (temperature * 9/5) - 459.67;
  
      result.innerHTML = `Temperature in Celsius: ${celsius}Â°C<br>
                          Temperature in Fahrenheit: ${fahrenheit}Â°F`;
    }
}
