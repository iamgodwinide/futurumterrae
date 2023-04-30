import React from 'react'
import { useRef } from 'react';

function App() {
  const audio = useRef();
  const bgAudio = useRef();
  const preloadWrap = useRef();
  const startButton = useRef();
  const overlay = useRef();

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
    audio.current.play();
    overlay.current.style.display = "none";
  }

  const handleEnd = () => {
    preloadWrap.current.style.display = "none";
    bgAudio.current.play();
  }

  return (
    <>
    <div className='main'>
      <nav>
        <ul>
          <li><a href="https://twitter.com/FuturumTerrae"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-telegram"></i></a></li>
          <li><a href="#">
            <img src='dextools.png'/>
            </a></li>
        </ul>
      </nav>


      <div className="preloader" ref={preloadWrap}>
        <button
          ref={startButton}
          onClick={handlePlay}
          >Click To Start
        </button>
        <audio 
          src='/ElevenLabs_2023-04-18T05_35_32.000Z_Josh_bCLiPIexUeHOI6FuOxom.mp3' 
          ref={audio}
          onEnded={handleEnd}
          preload='auto'
        />
        <audio 
          src='/Theme.mp3' 
          ref={bgAudio}
          loop
          preload='auto'
        />
        <div className='overlay' ref={overlay}/>
        
      </div>

    </div>
    <iframe
      src="https://app.uniswap.org/#/swap?outputCurrency=0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
      height="660px"
      width="100%"
    />
    </>
  )
}

export default App