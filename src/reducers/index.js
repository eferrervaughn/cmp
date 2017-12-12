import { combineReducers } from 'redux';
import data from './requestReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  data,
  routing: routerReducer
});

export default rootReducer;
