import types from './types';

const fetchRequestWeather = () => ({
  type: types.FETCH_REQUEST_WEATHER,
});

const fetchSuccessWeather = weather => ({
  type: types.FETCH_SUCCESS_WEATHER,
  payload: weather,
});

const fetchErrorWeather = error => ({
  type: types.FETCH_ERROR_WEATHER,
  payload: error,
});

const fetchRequestForecast = () => ({
  type: types.FETCH_REQUEST_FORECAST,
});

const fetchSuccessForecast = forecast => ({
  type: types.FETCH_SUCCESS_FORECAST,
  payload: forecast,
});

const fetchErrorForecast = error => ({
  type: types.FETCH_ERROR_FORECAST,
  payload: error,
});

export default {
  fetchRequestWeather,
  fetchSuccessWeather,
  fetchErrorWeather,
  fetchRequestForecast,
  fetchSuccessForecast,
  fetchErrorForecast
};