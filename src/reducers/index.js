import { combineReducers } from 'redux';
import appData from './dataReducer';
import influences from './allDataReducer';
import loading from './loadingReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  appData,
  influences,
  loading,
  routing: routerReducer
});

export default rootReducer;
