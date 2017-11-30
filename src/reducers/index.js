import { combineReducers } from 'redux';
import appData from './dataReducer';
import influences from './allDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  appData,
  influences,
  routing: routerReducer
});

export default rootReducer;
