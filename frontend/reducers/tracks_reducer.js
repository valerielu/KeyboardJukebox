import {TrackConstants} from '../actions/track_actions';
import {merge} from 'lodash';
let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  let timeSlice;
  let newState = merge({},state);

  switch (action.type) {
    case TrackConstants.ADD_NOTES:
      timeSlice = (action.timeNow - state[currTrackId].timeStart);
      newState[currTrackId].roll.push({notes: action.notes, timeSlice: timeSlice});

      return newState;

    case TrackConstants.START_RECORDING:
      currTrackId++;
      let newTrack = {
        id: currTrackId,
        name: `track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      newState[currTrackId] = newTrack;

      return newState;

    case TrackConstants.STOP_RECORDING:
      timeSlice = (action.timeNow - state[currTrackId].timeStart);
      newState[currTrackId].roll.push({notes: [], timeSlice: timeSlice});

      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
