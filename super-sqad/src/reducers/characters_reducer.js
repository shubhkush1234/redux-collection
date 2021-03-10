import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import createCharacter from './helpers';

function characters(state = characters_json, action) {
    switch (action.type) {

        case ADD_CHARACTER:
            let Characters = state.filter(item => item.id !== action.id);
            return Characters;
        case REMOVE_CHARACTER:
            Characters = [...state, createCharacter(action.id)]
            return Characters;

        default:
            return state;
    }
}

export default characters;