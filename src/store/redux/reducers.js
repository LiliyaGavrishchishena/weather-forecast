import { combineReducers } from 'redux';
import types from './types';

function weatherReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS_WEATHER:
      return payload;

    case types.FETCH_REQUEST_WEATHER:
    case types.FETCH_SUCCESS_WEATHER:
      return null;

    default:
      return state;
  }
}

function historyReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS_WEATHER:
      const withoutAlreadyExist = state.filter(item => item.id !== payload.id);
      const newState = [payload, ...withoutAlreadyExist];
      if (newState.length >= 5) return newState.slice(0, 5);
      return newState;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather: weatherReducer,
  historyOfSearch: historyReducer,
});

export default rootReducer;
