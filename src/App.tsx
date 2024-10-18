import './styles.css';
import { WORDS } from './common';
import { useState } from 'react';
import Board from './Board';
import GameOverModal from './GameOverModal';
import { useHandleTyping } from './hooks';

const App = () => {
  const [word, setWord] = useState(getWord());
  const [curr, setCurr] = useState('');
  const [currGuess, setCurrGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  useHandleTyping(curr, setCurr, setCurrGuess, setGuessCount);

  const resetGame = () => {
    setCurr('');
    setCurrGuess('');
    setGuessCount(0);
    setWord(getWord());
  };

  return (
    <div className="app">
      <div className="body">
        <div className="game">
          <h1 className="title">Word Game</h1>
          <Board
            curr={curr}
            guess={currGuess}
            word={word}
            guessCount={guessCount}
          />
          <button type="button" className="btn" onClick={resetGame}>
            Reset Game
          </button>
          <GameOverModal
            guess={currGuess}
            word={word}
            guessCount={guessCount}
            onReset={resetGame}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

const getWord = () =>
  WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
