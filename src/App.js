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
  const [volume, setCurrentVolume] = useState(25);
  const [offset, setOffset] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  let count = 0;

  useEffect(() => {
    for (let i = 0; i < wave.length; ++i) {
      wave2[i] = WaveSurfer.create({
        container: '#waveform' + i
      });
      wave2[i].setVolume(0.25);
      wave2[i].load(wave[i].link);
      setOffset(offset => {
        return { ...offset, [i]: 0 };
      });
      setIsChecked(isChecked => {
        return { ...isChecked, [i]: false };
      });
    }
  }, []);

  return (
    <div className="App" style={container}>
      <div>
        <button
          onClick={() => {
            wave2.forEach(w2 => {
              if (isChecked[count] === true) {
                setTimeout(function() {
                  w2.playPause();
                }, offset[count]);
              }
              count++;
            });
            count = 0;
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
            <input
              type="checkbox"
              name="tracks"
              id={w.id}
              onChange={e => {
                setIsChecked(isChecked => {
                  return { ...isChecked, [w.id]: !isChecked[w.id] };
                });
              }}
            />
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
              min="0"
              max="1000"
              step="50"
              value={offset[w.id]}
              className="slider2"
              id="myRange"
              onChange={e => {
                const newOffset = e.target.value;
                setOffset(offset => {
                  return { ...offset, [w.id]: newOffset };
                });
              }}
            />
            <p>Offset: {offset[w.id]} ms</p>
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
