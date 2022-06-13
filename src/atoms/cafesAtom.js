import { createAtom } from '@reatom/core';
import { Statuses } from './../shared/statuses/statuses';
import { cafesService } from '../services/cafesService';

const initialState = {
    cafes: [],
    error: null,
    status: Statuses.IDLE,
};

const actionTypes = {
    FETCH_CAFES: 'fetchCafes',
    SET_CAFES: 'setCafes',
    HANDLE_ERROR: 'handleError',
};

const actionCreators = {
    [actionTypes.FETCH_CAFES]: () => null,
    [actionTypes.HANDLE_ERROR]: (err) => err,
    [actionTypes.SET_CAFES]: (cafes) => cafes,
};

export const cafesAtom = createAtom(actionCreators, ({onAction, schedule, create}, state = initialState) => {
    onAction(actionTypes.FETCH_CAFES, () => {
        state = {...initialState, status: Statuses.PENDING};
        schedule(dispatch => (
            setTimeout(() =>
            cafesService.fetchCafes()
                .then(({ data }) => dispatch(create(actionTypes.SET_CAFES, data)))
                .catch((err) => dispatch(create(actionTypes.HANDLE_ERROR, err))), 3000)
        ));
    })
    onAction(actionTypes.SET_CAFES, (cafes) => state = {...initialState, cafes, status: Statuses.READY});
    onAction(actionTypes.HANDLE_ERROR, (err) => state = {...state, cafes: [], status: Statuses.ERROR, error: err})
    return state;
})