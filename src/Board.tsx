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
	const wordSet = useWordSet(word);

	const renderBoard = () => {
		const cols: React.ReactNode[] = [];

		for (let r = 0; r < GAME_SIZE + 1; r++) {
			const row: React.ReactNode[] = [];

			for (let c = 0; c < GAME_SIZE; c++) {
				const elem = (
					<div
						key={`{r-${r}c-${c}}`}
						className={`box ${getBoxStyle(r, c, word, wordSet, prevGuesses)}`}>
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

const getBoxStyle = (
	r: number,
	c: number,
	word: string,
	wordSet: Set<string>,
	prevGuesses: string[]
) => {
	if (r === 0) return "top_box";
	else if (r > prevGuesses.length) return "";
	else if (prevGuesses[r - 1] && prevGuesses[r - 1][c] === word[c])
		return "correct_letter";
	else if (prevGuesses[r - 1] && wordSet.has(prevGuesses[r - 1][c]))
		return "wrong_location_letter";
	else if (prevGuesses[r - 1]) return "wrong_letter";
};
