import axios from 'axios';

const baseUrl = 'https://api.geoapify.com/v1/geocode/reverse';

type FetchFn = (lat: number | string, long: number | string) => void

export const fetchLocation: FetchFn = async function (lat, long) {
  try {
    const data = await axios.get(`${baseUrl}/?lat=${lat}&lon=${long}&apiKey=${process.env.API_KEY}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
    let location 
    const dataObj = data?.features[0]?.properties;
    if (dataObj.country && dataObj.city) {
    location =  `${dataObj.country}, ${dataObj.city}`
    } else if (dataObj.country) {
    location = dataObj.country
    } else if (dataObj.name) {
    location = dataObj.name
    }
    return location;
  } catch (error) {
    console.log(error);
  }
}