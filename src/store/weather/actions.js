import types from './types';

const fetchRequest = () => ({
  type: types.FETCH_REQUEST,
});

const fetchSuccess = weather => ({
  type: types.FETCH_SUCCESS,
  payload: weather,
});

const fetchError = error => ({
  type: types.FETCH_ERROR,
  payload: error,
});

export default {
  fetchRequest,
  fetchSuccess,
  fetchError,
};