import {connect} from 'react-redux';
import Synth from './synth.jsx';
import * as actions from '../../actions/note_actions.js';
import {addNotes} from '../../actions/track_actions.js';


const mapStateToProps = (state) => {
  return {notes: state.notes, isRecording: state.isRecording};
};

const mapDispatchToProps = (dispatch) => (
  {
    keyPressed: key => dispatch(actions.keyPressed(key)),
    keyReleased: key => dispatch(actions.keyReleased(key)),
    addNotes: notes => dispatch(addNotes(notes))
  }
);

export default
  connect(mapStateToProps,
  mapDispatchToProps
  )(Synth);
