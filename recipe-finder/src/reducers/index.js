import { SET_RECIPES } from '../actions/index.js';

function recipes(recipes, action) {
    switch (action.type) {
        case SET_RECIPES:
            return action.items
    }
}