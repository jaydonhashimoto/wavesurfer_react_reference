import React, { useEffect, useState } from 'react';
import './App.css';
import WaveSurfer from 'wavesurfer.js';

function App() {
  const [wave, setWave] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      wave[i] = WaveSurfer.create({
        container: '#waveform' + i
      });
      wave[i].setVolume(0.25);
    }

    for (let i = 0; i < 3; i++) {
      if (i === 0) {
        wave[0].setWaveColor('blue');
        wave[0].load(
          'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/drums1.wav'
        );
      } else if (i === 1) {
        wave[1].setWaveColor('red');
        wave[1].load(
          'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/rhythm1.wav'
        );
      } else if (i === 2) {
        wave[2].setWaveColor('green');
        wave[2].load(
          'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/lead1.wav'
        );
      }
      wave[i].on('ready', () => {
        wave[i].play();
      });
    }
  });

  return (
    <div className="App" style={container}>
      <div>
        <button
          onClick={() => {
            wave[0].playPause();
            wave[1].playPause();
            wave[2].playPause();
          }}
        >
          Play/Pause
        </button>
        <button
          onClick={() => {
            wave[0].stop();
            wave[1].stop();
            wave[2].stop();
          }}
        >
          Reset
        </button>
      </div>
      <div>
        <div id="waveform0"></div>
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
      </div>

      <div>
        <div id="waveform1"></div>
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

      <div>
        <div id="waveform2"></div>
        <button
          id="playBtn2"
          onClick={() => {
            wave[2].play();
          }}
        >
          Play
        </button>
        <button
          id="pauseBtn2"
          onClick={() => {
            wave[2].pause();
          }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}

const container = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '2rem',
  alignItems: 'center',
  justifyContent: 'center'
};

export default App;
