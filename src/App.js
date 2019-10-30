import React, { useEffect, useState } from 'react';
import './App.css';
import WaveSurfer from 'wavesurfer.js';

function App() {
  const [wave, setWave] = useState([
    {
      id: 0,
      offset: 0,
      link:
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/drums1.wav'
    },
    {
      id: 1,
      offset: 0,
      link:
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/rhythm1.wav'
    },
    {
      id: 2,
      offset: 0,
      link:
        'https://jaydon-hashimoto-test-bucket.s3-us-west-1.amazonaws.com/lead1.wav'
    }
  ]);
  const [wave2, setW2] = useState([]);
  const [volume, setCurrentVolume] = useState(25);
  let count = 0;

  useEffect(() => {
    for (let i = 0; i < wave.length; ++i) {
      wave2[i] = WaveSurfer.create({
        container: '#waveform' + i
      });
      wave2[i].setVolume(0.25);
      wave2[i].load(wave[i].link);
    }
  }, []);

  return (
    <div className="App" style={container}>
      <div>
        <button
          onClick={() => {
            wave2.forEach(w2 => {
              setTimeout(function() {
                w2.playPause();
              }, wave[count].offset);
              count++;
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
        <div className="slidecontainer">
          <input
            type="range"
            min="0"
            max="50"
            value={volume}
            className="slider"
            id="myRange"
            onChange={e => {
              setCurrentVolume(e.target.value);
              wave2.forEach(wave => {
                wave.setVolume(e.target.value / 100);
              });
            }}
          />
          <p>Volume: {volume / 100}</p>
        </div>
      </div>
      {wave.map(w => (
        <div key={w.id} style={container2}>
          <div id={'waveform' + w.id}></div>
          <div>
            <button
              onClick={() => {
                wave2[w.id].playPause();
              }}
            >
              Play/Pause
            </button>
            <button>Button1</button>
            <button>Button2</button>
            <input
              type="range"
              min="-10"
              max="10"
              value={w.offset}
              className="slider2"
              id="myRange"
              onChange={e => {
                setWave({
                  ...wave,
                  w: {
                    offset: e.target.value
                  }
                });

                // setWave((w.offset = e.target.value));
              }}
            />

            <p>Offset: {w.offset}</p>
          </div>
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

const container2 = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridGap: '2rem',
  alignItems: 'center',
  justifyContent: 'center'
};

export default App;
