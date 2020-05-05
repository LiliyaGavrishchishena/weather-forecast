import axios from 'axios';

const URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchForecast = async city => {
  try {
    const response = await axios.get(URL_FORECAST, {
      params: {
        q: city,
        appid: '7f9476a3ca504c98ce8dc0e252a50e13',
      },
    });
    const { data } = response;
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

export default { fetchForecast };
