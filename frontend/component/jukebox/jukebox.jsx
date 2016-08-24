import React from 'react';
import $ from 'jquery';

class Jukebox extends React.Component {
  constructor(props) {
    super(props);
  }

  
  render() {

    return (
      <div>
        <ul>
          {this.props.tracks.map((track, idx) => (
            <li>{track.name} <button className="startPlaying" onClick={this.onPlay}>
                Play</button>
              <button className="stopPlaying" onClick={this.handleStop}>
                Stop</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


export default Jukebox;
