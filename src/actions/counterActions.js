import * as actionTypes from './actionTypes';

// Action Creator
export function incCounter(data = 1) {
    // return an Action Object
    return {
        type: actionTypes.INCREMENT_COUNTER,
        payload: data
    };
}

// Action Creator
export function decCounter(data = 1) {
    return {
        type: actionTypes.DECREMENT_COUNTER,
        payload: data
    };
}