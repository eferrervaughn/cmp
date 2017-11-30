import * as types from '../constants/actionTypes';
import Airtable from 'airtable';

// import {getFormattedDateTime} from '../utils/dates';

const API_KEY = 'keysmOnboBG8IYPwR';

var base = new Airtable({apiKey: API_KEY}).base('appwS8caNUMzpsFwb');


export function getData() {
  return {
    type: types.FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: types.FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: types.FETCHING_DATA_FAILURE
  }
}

export function fetchData(id) {
  return (dispatch) => {
    dispatch(getData())
    base('Influences').find(id)
      .then((data) => {
        dispatch(getDataSuccess({id, data: data.fields}))
      })
      .catch((err) => console.log('err:', err))
  }
}
// fetching all data 

export function getAllData() {
  return {
    type: types.FETCHING_ALL_DATA
  }
}

export function getAllDataSuccess(data) {
  return {
    type: types.FETCHING_ALL_DATA_SUCCESS,
    data,
  }
}

export function getAllDataFailure() {
  return {
    type: types.FETCHING_DATA_FAILURE
  }
}

export function fetchAllData(args) {
  return (dispatch) => {
    dispatch(getAllData())
    let results = []
    base('Influences').select({
      // maxRecords: 3,
      view: "*"
    }).eachPage( function page(records, fetchNextPage) {
      records.forEach(record => {
        results.push({id: record.id, details: record.fields})
      });
      fetchNextPage();
    }).then((data) => {
        dispatch(getAllDataSuccess(results))
      })
      .catch((err) => {
        dispatch(getAllDataFailure())
        console.log('err:', err)
      })
  }
}