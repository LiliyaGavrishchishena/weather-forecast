import { combineReducers } from 'redux';
import types from './types';

function weatherReducer(state = null, { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;

    case types.FETCH_REQUEST:
    case types.FETCH_SUCCESS:
      return null;

    default:
      return state;
  }
}

function historyReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
     const withoutAlreadyExist = state.filter(item=> item.id !== payload.id)
     const newState = [payload, ...withoutAlreadyExist]
     if(newState.length >=5) return newState.slice(0, 5);
      return newState;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  weather: weatherReducer,
  history: historyReducer
});

export default rootReducer