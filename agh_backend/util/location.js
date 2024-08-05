const axios = require("axios");

const HttpError = require("../models/http-error");

const API_KEY = process.env.GOOGLE_API_KEY;

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );
  const data = response.data;
  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location", 
      422
    );
    throw error;
  }
  console.log(data);

  const addressComponents = data.results[0].address_components;
  console.log(addressComponents)
  console.log(addressComponents + '<-----')
const city = addressComponents.find(component =>
  component.types.includes('locality')
)?.long_name;


// As of right now, Manhattan does not have neighborhood info and only populates as Manhattan for some reason. Consider switching to Bing and checking to see if that works?
console.log(city);
  const formatAddress= data.results[0].formatted_address;
  const neighborhood = addressComponents[2].long_name;
  const borough = addressComponents[3].long_name;
  const coordinates = data.results[0].geometry.location;
  console.log('this' + neighborhood +  " " + borough)

  return {coordinates, formatAddress, neighborhood, borough};
}

module.exports = getCoordsForAddress
