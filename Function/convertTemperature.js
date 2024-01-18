// 1.Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point (0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
//  a. degF = (degC * 9/5) + 32
//  b. degC = (degF – 32) * 5/9

const convertTemperature = (temperature, scale) => {
    let result;

    switch (scale) {
        case 'C':
        case 'c':
            if (temperature >= 0 && temperature <= 100) {
                result = (temperature * 9/5) + 32;
                console.log(`${temperature} °C is equal to ${result} °F`);
            } else {
                console.log("Temperature should be between 0 °C and 100 °C.");
            }
            break;

        case 'F':
        case 'f':
            if (temperature >= 32 && temperature <= 212) {
                result = (temperature - 32) * 5/9;
                console.log(`${temperature} °F is equal to ${result} °C`);
            } else {
                console.log("Temperature should be between 32 °F and 212 °F.");
            }
            break;

        default:
            console.log("Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
    }
};
const userTemperature = 50; 
const userScale = 'C'; 
convertTemperature(userTemperature, userScale);

//-------Output-------//

// 50 °C is equal to 122 °F