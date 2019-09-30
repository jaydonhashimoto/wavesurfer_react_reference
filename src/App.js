import React, { useEffect, useState } from 'react';
import './App.css';
import WaveSurfer from 'wavesurfer.js';

function App() {
  let wavesurfer = '';
  let wavesurfer2 = '';
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    wavesurfer = WaveSurfer.create({
      container: '#waveform'
    });
    wavesurfer.setVolume(0.25);
    wavesurfer.load(
      'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/Cm_Blues_BT.mp3'
    );
    wavesurfer.on('ready', () => {
      wavesurfer.play();
    });

    if (isClicked) {
      wavesurfer.playPause();
      setIsClicked(false);
    }

    wavesurfer2 = WaveSurfer.create({
      container: '#waveform2'
    });
    wavesurfer2.setVolume(0.25);
    wavesurfer2.load(
      'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/Cm_Blues_BT.mp3'
    );
    wavesurfer2.on('ready', () => {
      wavesurfer2.play();
    });
  });
  const play = () => {
    // setIsClicked(true);
    wavesurfer.play();
  };

  const pause1 = () => {
    wavesurfer.pause();
  };

  const play2 = () => {
    wavesurfer2.play();
  };

  const pause2 = () => {
    wavesurfer2.pause();
  };

  return (
    <div className="App" style={container}>
      <h1>hello</h1>
      <div id="waveform"></div>
      <button id="playBtn" onClick={play}>
        Play
      </button>
      <button id="pauseBtn" onClick={pause1}>
        Pause
      </button>
      <div id="waveform2"></div>
      <button id="playBtn2" onClick={play2}>
        Play
      </button>
      <button id="pauseBtn2" onClick={pause2}>
        Pause
      </button>
    </div>
  );
}

const container = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '2rem',
  alignItems: 'center',
  justifyContent: 'center'
};

export default App;
