import { createAtom } from '@reatom/core';
import { Statuses } from './../shared/statuses/statuses';
import { cafeService } from '../services/cafeService';

const initialState = {
    cafe: {},
    error: null,
    status: Statuses.IDLE,
};

const actionTypes = {
    FETCH_CAFE: 'fetchCafe',
    SET_CAFE: 'setCafe',
    HANDLE_ERROR: 'handleError',
};

const actionCreators = {
    [actionTypes.FETCH_CAFE]: (id) => id,
    [actionTypes.SET_CAFE]: (cafe) => cafe,
    [actionTypes.HANDLE_ERROR]: (err) => err,
};

export const cafeAtom = createAtom(actionCreators, ({ onAction, schedule, create }, state = initialState) => {
    onAction(actionTypes.FETCH_CAFE, (id) => {
        state = {...state, status: Statuses.PENDING};
        schedule((dispatch) => 
            cafeService.getCafe(id)
                .then(({ data }) => dispatch(create(actionTypes.SET_CAFE, data)))
                .catch(err => dispatch(create(actionTypes.HANDLE_ERROR, err))))
    });
    onAction(actionTypes.SET_CAFE, (cafe) => (state = { ...state, cafe, status: Statuses.READY}));
    onAction(actionTypes.HANDLE_ERROR, (err) => (state = { ...state, error: err}));
    return state;
})