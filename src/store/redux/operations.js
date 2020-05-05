import axios from 'axios';
import actions from './actions';

const URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather';
const URL_FORECAST = 'https://api.openweathermap.org/data/2.5/forecast';

const fetchWeather = city => async dispatch => {
  try {
    const response = await axios.get(URL_WEATHER, {
      params: {
        q: city,
        appid: '7f9476a3ca504c98ce8dc0e252a50e13',
      },
    });
    const { data } = response;
    if (data) dispatch(actions.fetchSuccessWeather(response.data));
  } catch (error) {
    dispatch(actions.fetchErrorWeather(error));
  }
};

export default { fetchWeather };
