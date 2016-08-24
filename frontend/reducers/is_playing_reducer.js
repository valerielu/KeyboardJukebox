import {PlayingConstants} from '../actions/playing_actions';

const isPlayingReducer = (state=false, action) => {
  switch(action.type) {
    case PlayingConstants.START_PLAYING:
      return true;
    case PlayingConstants.STOP_PLAYING:
      return false;
    default:
      return state;
  }
};

export default isPlayingReducer;
