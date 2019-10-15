import React, { useEffect, useState } from 'react';
import './App.css';
import WaveSurfer from 'wavesurfer.js';

function App() {
  const [wave, setWave] = useState([]);
  let count = 0;
  useEffect(() => {
    const waveArray = [
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
    ];
    setWave([...waveArray]);
    // for (let i = 0; i < wave.length; i++) {
    //   wave[i] = WaveSurfer.create({
    //     container: '#waveform' + i
    //   });
    //   wave[i].setVolume(0.25);
    //   wave[i].load(wave[i].link);
    //   // wave[i].on('ready', () => {
    //   //   wave[i].play();
    //   // });
    // }
    // console.log(wave);
  }, []);
  /**
   * @TODO Figure out how to programmtically do this
   */
  wave[0] = WaveSurfer.create({
    container: '#waveform' + 0
  });
  wave[0].setVolume(0.25);
  wave[0].load(wave[0].link);
  return (
    <div className="App" style={container}>
      <div id="waveform0"></div>
      {wave.map(w => (
        <div>
          <div key={w.id} id={'waveform' + w.id}></div>
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
