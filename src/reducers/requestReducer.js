import { INITIAL_REQUEST_STATE } from '../constants/initialState';
import { SET_LOADING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../constants/actionTypes';

export default function loadingReducer (state = INITIAL_REQUEST_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_LOADING :
            return Object.assign({}, state, {
                // sets the loading boolean at this scope
                [`${payload.scope}Loading`]: payload.loading,
            });
        case FETCHING_SUCCESS :
            return Object.assign({}, state, {
                [`${payload.scope}Data`]: payload.data,
                [`${payload.scope}DataSuccess`]: payload.success,
                [`${payload.scope}Loading`]: false,
            });
        case FETCHING_FAILURE :
            return Object.assign({}, state, {
                [`${payload.scope}DataFailure`]: true,
                [`${payload.scope}Loading`]: false,
            });
        default:
            return state
    }
}
