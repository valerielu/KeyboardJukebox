import {connect} from 'react-redux';
import Recorder from './recorder.jsx';
import * as actions from '../../actions/track_actions.js';

const mapStateToProps = (state) => {
  return {tracks: state.tracks, isRecording: state.isRecording};
};

const mapDispatchToProps = (dispatch) => (
  {
    startRecording: () => dispatch(actions.startRecording()),
    stopRecording: () => dispatch(actions.stopRecording())
  }
);

export default
  connect(mapStateToProps,
  mapDispatchToProps
  )(Recorder);
