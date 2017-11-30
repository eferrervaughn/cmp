import * as types from '../constants/actionTypes';
import firebase from 'firebase';
import firestore from 'firebase/firestore';

var config = {
  apiKey: "AIzaSyBj5uaevyH9QNKMjNMKg8wv7dXY7s3GHYs",
  authDomain: "cmyp-55b60.firebaseapp.com",
  databaseURL: "https://cmyp-55b60.firebaseio.com",
  projectId: "cmyp-55b60",
  storageBucket: "cmyp-55b60.appspot.com",
  messagingSenderId: "618577637588"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();

const prayerRef = db.collection('prayers');
// function moose(){
//   prayerRef.add({text: 'he'}).then(() => {console.log('prayer saved')}).catch(
//     (error) => {console.log('Got an error: ', error)}
//   )
// }
// moose();


// import {getFormattedDateTime} from '../utils/dates';


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

export function fetchPrayer(id) {
  return (dispatch) => {
    dispatch(getData())
    prayerRef.doc(id).get()
      .then((doc) => {
        dispatch(getDataSuccess(doc.data()))
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

export function fetchAllPrayers() {
  return (dispatch) => {
    dispatch(getAllData())
    let results = []
    prayerRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        results.push({id: doc.id, data: doc.data()})
      });
    })
    .then((data) => {
        dispatch(getAllDataSuccess(results))
      })
      .catch((err) => {
        dispatch(getAllDataFailure())
        console.log('err:', err)
      })
  }
}