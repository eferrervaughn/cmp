import { INITIAL_LOADING_STATE } from '../constants/initialState';
import { SET_LOADING } from '../constants/actionTypes';

export default function loadingReducer (state = INITIAL_LOADING_STATE, action) {
    const { type, payload } = action;
    if (type === SET_LOADING) {
      return Object.assign({}, state, {
        // sets the loading boolean at this scope
        [`${payload.scope}Loading`]: payload.loading,
      });
    } else {
      return state;
    }
}
