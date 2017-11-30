import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants/actionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  deleted: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case 'DELTE_SUCCESS':
      return {
        ...state,
        deleted: true
      }
    default:
      return state
  }
}