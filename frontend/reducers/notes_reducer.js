import {NotesConstants} from "./../actions/note_actions";
import {NOTE_NAMES} from '../util/tones.js';
import {PlayingConstants} from '../actions/playing_actions';


const notesReducer = (state = [], action) => {

  switch (action.type) {
    case NotesConstants.KEY_PRESSED:
      if (!state.includes(action.key) && NOTE_NAMES.includes(action.key)){
        return [...state, action.key];
      } else {
        return state;
      }
    case NotesConstants.KEY_RELEASED:
      if (state.includes(action.key)){
        let keyIdx = state.indexOf(action.key);
        let stateDup = state.slice();
        stateDup.splice(keyIdx, 1);
        return stateDup;
      } else {
        return state;
      }
    case PlayingConstants.GROUP_UPDATE:
      return action.notes;
    default:
      return state;
  }
};

const validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '½', '»'];
const keyMap = {};
validKeys.forEach((key, idx) => {
  keyMap[key] = NOTE_NAMES[idx];
});

export {notesReducer, keyMap};
