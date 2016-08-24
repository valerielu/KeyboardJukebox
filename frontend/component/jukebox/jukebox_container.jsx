import {connect} from 'react-redux';
import * as actions from '../../actions/playing_actions.js';
import Jukebox from "./jukebox";

const mapStateToProps = (state) => ({
  isRecording: state.isRecording,
  isPlaying: state.isPlaying,
  tracks: state.tracks
});

const onPlay = track => e => {
  () => dispatch(actions.startPlaying());
  () => dispatch(actions.startPlaying());
}

const mapDispatchToProps = (dispatch) => ({
  // startPlaying: () => {actions.startPlaying()},
  // startPlaying: () => {actions.startPlaying()},
});



export default connect(mapStateToProps, mapDispatchToProps)(Jukebox);
