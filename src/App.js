import React, { useEffect, useState } from 'react';
import './App.css';
import WaveSurfer from 'wavesurfer.js';

function App() {
  const [wave, setWave] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 2; i++) {
      wave[i] = WaveSurfer.create({
        container: '#waveform'
      });
      wave[i].setVolume(0.25);
    }

    for (let i = 0; i < 2; i++) {
      wave[i].load(
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/Cm_Blues_BT.mp3'
      );
      // wave[i].on('ready', () => {
      //   wave[i].play();
      // });
    }
  });

  return (
    <div className="App" style={container}>
      <div id="waveform"></div>
      <button
        id="playBtn"
        onClick={() => {
          wave[0].play();
        }}
      >
        Play
      </button>
      <button
        id="pauseBtn"
        onClick={() => {
          wave[0].pause();
        }}
      >
        Pause
      </button>
      <div id="waveform2"></div>
      <button
        id="playBtn2"
        onClick={() => {
          wave[1].play();
        }}
      >
        Play
      </button>
      <button
        id="pauseBtn2"
        onClick={() => {
          wave[1].pause();
        }}
      >
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
