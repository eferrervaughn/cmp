import { FETCHING_ALL_DATA, FETCHING_ALL_DATA_SUCCESS, FETCHING_ALL_DATA_FAILURE } from '../constants/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_ALL_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_ALL_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      }
    case FETCHING_ALL_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}