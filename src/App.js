import React from 'react'

function App() {

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

  return (
    <div className='main'>
      <img src='/1.gif'/>
      <button onClick={handleTwwet}>
        Enter the Golden Age
      </button>
    </div>
  )
}

export default App