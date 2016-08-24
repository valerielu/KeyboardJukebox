import React from 'react';
import $ from 'jquery';


class Recorder extends React.Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    }

    handleStart() {
      this.props.startRecording();
      $('.start').prop("disabled", true);
      $('.stop').prop("disabled", false);
    }

    handleStop() {
      this.props.stopRecording();
      $('.start').prop("disabled", false);
      $('.stop').prop("disabled", true);
      console.log(this.props.tracks);
    }

  render() {
    return (
      <div>
        <button className="start" onClick={this.handleStart}>
          Start</button>
        <button className="stop" onClick={this.handleStop}>
          Stop</button>
      </div>
    );
  }
}

export default Recorder;
