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


// import {getFormattedDateTime} from '../utils/dates';

// Loading action
export function setLoading (scope, loading) {
  return {
    type: types.SET_LOADING,
    payload: {
      scope,
      loading
    }
  }
}

export function fetchSuccess(scope, data, success) {
  return {
    type: types.FETCHING_SUCCESS,
    payload: {
    data,
    scope,
    success
    }
  }
}

export function fetchFailure(scope) {
  return {
    type: types.FETCHING_FAILURE,
    payload: {
      scope,
    }
  }
}


// export function fetchPrayer(id) {
//   return (dispatch) => {
//     dispatch(getData())
//     prayerRef.doc(id).get()
//       .then((doc) => {
//         dispatch(getDataSuccess(doc.data()))
//       })
//       .catch((err) => console.log('err:', err))
//   }
// }
// // fetching all data 

export function deletePrayer(id) {
  return (dispatch) => {
    prayerRef.doc(id).delete()
    .then((doc) => {
      console.log('delete return:', doc);
      dispatch(deleteSuccess(doc))
    })
    .catch((err) => console.log('err:', err))
  }
}

// export function deleteSuccess(doc) {
//   return {
//     type: 'DELETE SUCCESS'
//   }
// }


export function fetchAll(scope) {
  return (dispatch) => {
    dispatch(setLoading(scope,true))
    let results = {}
    prayerRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        results[doc.id] =  doc.data()
      });
    })
    .then((data) => {
        dispatch(fetchSuccess(scope, results, true))
      })
      .catch((err) => {
        dispatch(setLoading(scope,false))
        dispatch(fetchFailure(scope))
        console.log('err:', err)
      })
  }
}

