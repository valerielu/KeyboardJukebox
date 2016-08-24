import {TrackConstants} from '../actions/track_actions';

const recordingReducer = (state = false, action) => {
  switch (action.type) {
    case TrackConstants.START_RECORDING:
      return true;
    case TrackConstants.STOP_RECORDING:
      return false;
    default:
      return state;
  }
};

export default recordingReducer;
