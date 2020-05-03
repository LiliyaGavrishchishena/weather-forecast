import axios from 'axios';
import actions from './actions';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeather = (city) => async dispatch => {
  //dispatch(actions.fetchRequest());

  try {
    const response = await axios.get(URL, {
    params: {
      q: city,
      appid: '7f9476a3ca504c98ce8dc0e252a50e13'
    }
  });
  const {data} = response
  if(data) dispatch(actions.fetchSuccess(response.data));

  } catch (error) {
    dispatch(actions.fetchError(error));
  }
};


export default { fetchWeather }