import "./styles.css";
import { WORDS } from "./common";
import { useState } from "react";
import Board from "./Board";
import GameOverModal from "./GameOverModal";
import { useHandleTyping } from "./hooks";

function App() {
	const [word] = useState(getWord());
	const [curr, setCurr] = useState("");
	const [currGuess, setCurrGuess] = useState("");
	const [guessCount, setGuessCount] = useState(0);
	useHandleTyping(curr, setCurr, setCurrGuess, setGuessCount);

	return (
		<div className="app">
			<div className="body">
				<div className="game">
					<h1 className="title">Word Game</h1>
					<Board curr={curr} guess={currGuess} word={word} />
					<GameOverModal
						guess={currGuess}
						word={word}
						guessCount={guessCount}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

const getWord = () =>
	WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
