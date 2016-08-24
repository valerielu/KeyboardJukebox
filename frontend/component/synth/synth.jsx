import React from 'react';
import {NOTE_NAMES, TONES} from '../../util/tones.js';
import Note from '../../util/note.js';
import $ from 'jquery';
import {keyMap} from "../../reducers/notes_reducer";
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [];
    NOTE_NAMES.forEach(noteName => {
      this.notes.push(new Note(TONES[noteName]));
    });
  }

  onKeyDown(e) {
    e.preventDefault();
    this.props.keyPressed(keyMap[String.fromCharCode(e.keyCode)]);
    this.props.addNotes(this.props.notes);
  }
  onKeyUp(e) {
    e.preventDefault();
    this.props.keyReleased(keyMap[String.fromCharCode(e.keyCode)]);
    this.props.addNotes(this.props.notes);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {

    this.notes.forEach((note, idx) => {
      if (this.props.notes.includes(NOTE_NAMES[idx])) {
        note.start();
      } else {
        note.stop();
      }
    });
  }

  render() {
    const noteArray = NOTE_NAMES.map((noteName) => (
      <NoteKey key={noteName} noteName={noteName} />
    ));
    this.playNotes();

    return (
      <div>
        <ul>
          {noteArray}
        </ul>
      </div>
    );
  }
}
 export default Synth;
