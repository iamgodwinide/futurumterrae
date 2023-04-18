import React from 'react'
import { useRef } from 'react';

function App() {
  const audio = useRef();
  const preloadWrap = useRef();
  const gifImg = useRef();
  const startButton = useRef();

  function generateRandomBinaryNumber() {
    let binaryNumber = '';
    for (let i = 0; i < 11; i++) {
      binaryNumber += Math.round(Math.random());
    }
    return binaryNumber;
  }

  const handleTwwet = () => {
    const tweet = `// I have the entered the Golden Age //%0A%0A// Codex: ${generateRandomBinaryNumber()} //%0A%0AComment your Codex below the @FuturumTerrae pinned tweet`;
    window.open(`https://twitter.com/intent/tweet?text=${tweet}&url=${"https://futurumterrae.com"}`, '_blank');
  }

  const handlePlay = () => {
    startButton.current.style.display = "none";
    gifImg.current.style.visibility = "visible";
    audio.current.play();
  }

  const handleEnd = () => {
    preloadWrap.current.style.display = "none";
  }

  return (
    <div className='main'>
      <div className="preloader" ref={preloadWrap}>
        <button
        ref={startButton}
        onClick={handlePlay}
        >Click To Start</button>
        <img ref={gifImg} src='/2.gif'/>
        <audio 
        src='/ElevenLabs_2023-04-18T05_35_32.000Z_Josh_bCLiPIexUeHOI6FuOxom.mp3' 
        ref={audio}
        onEnded={handleEnd}
        preload='auto'/>
      </div>
      <img src='/1.gif'/>
      <button onClick={handleTwwet}>
        Enter the Golden Age
      </button>
    </div>
  )
}

export default App