import {combineReducers} from 'redux';

import { SET_RECIPES } from '../actions/index.js';

function recipes(state= [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

export const rootReducer = combineReducers(recipes);