import "./styles.css";
import { GAME_SIZE } from "./common";
import { usePrevGuesses, useWordSet } from "./hooks";

type BoardProps = {
	curr: string;
	guess: string;
	word: string;
	guessCount: number;
};

const Board = ({ curr, guess, word, guessCount }: BoardProps) => {
	const prevGuesses = usePrevGuesses(guess, guessCount);
	const wordMap = useWordSet(word);

	const renderBoard = () => {
		const cols: React.ReactNode[] = [];

		for (let r = 0; r < GAME_SIZE + 1; r++) {
			const row: React.ReactNode[] = [];
			const tempMap = { ...wordMap };

			if (r > 0)
				for (let c = 0; c < GAME_SIZE; c++)
					findMatches(r, c, word, tempMap, prevGuesses);

			for (let c = 0; c < GAME_SIZE; c++) {
				const elem = (
					<div
						key={`{r-${r}c-${c}}`}
						className={`box ${getBoxStyle(r, c, word, tempMap, prevGuesses)}`}>
						{getBoxText(r, c, curr, prevGuesses)}
					</div>
				);

				row.push(elem);
			}

			cols.push(
				<div key={`row-${r}`} className="row">
					{row}
				</div>
			);
		}

		return <div className="board">{cols}</div>;
	};

	return renderBoard();
};

export default Board;

const getBoxText = (
	r: number,
	c: number,
	curr: string,
	prevGuesses: string[]
) => {
	if (r === 0 && curr.length > 0) return curr[c];
	else if (prevGuesses[r - 1]) return prevGuesses[r - 1][c];
	else return "";
};

const findMatches = (
	r: number,
	c: number,
	word: string,
	wordMap: Record<string, number>,
	prevGuesses: string[]
) => {
	const prevGuess = prevGuesses[r - 1];

	if (prevGuess && prevGuess[c] === word[c])
		wordMap[prevGuess[c]] = wordMap[prevGuess[c]] -= 1;
};

const getBoxStyle = (
	r: number,
	c: number,
	word: string,
	wordMap: Record<string, number>,
	prevGuesses: string[]
) => {
	const prevGuess = prevGuesses[r - 1];

	if (r === 0) {
		return "top_box";
	} else if (r > prevGuesses.length) {
		return "";
	} else if (prevGuess && prevGuess[c] === word[c]) {
		return "correct_letter";
	} else if (prevGuess && wordMap[prevGuess[c]] > 0) {
		return "wrong_location_letter";
	} else if (prevGuess) {
		return "wrong_letter";
	}
};
