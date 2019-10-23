import React, { useEffect, useState } from 'react';
import './App.css';
import WaveSurfer from 'wavesurfer.js';

function App() {
  const [wave, setWave] = useState([
    {
      id: 0,
      link:
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/drums1.wav'
    },
    {
      id: 1,
      link:
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/rhythm1.wav'
    },
    {
      id: 2,
      link:
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/lead1.wav'
    }
  ]);
  const [wave2, setW2] = useState([]);
  useEffect(() => {
    for (let i = 0; i < wave.length; ++i) {
      wave2[i] = WaveSurfer.create({
        container: '#waveform' + i
      });
      wave2[i].setVolume(0.25);
      wave2[i].load(wave[i].link);
    }
  });

  return (
    <div className="App" style={container}>
      <div>
        <button
          onClick={() => {
            wave2.forEach(wave => {
              wave.playPause();
            });
          }}
        >
          Play/Pause
        </button>
        <button
          onClick={() => {
            wave2.forEach(wave => {
              wave.stop();
            });
          }}
        >
          Reset
        </button>
      </div>
      {wave.map(w => (
        <div>
          <div key={w.id} id={'waveform' + w.id}></div>
          <button
            onClick={() => {
              wave2[w.id].playPause();
            }}
          >
            Play/Pause
          </button>
          <p>{w.id}</p>
        </div>
      ))}
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
