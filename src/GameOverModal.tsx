import { GAME_SIZE } from "./common";

type VictoryModalProps = {
	guess: string;
	word: string;
	guessCount: number;
};
const GameOverModal = ({ guess, word, guessCount }: VictoryModalProps) => {
	const gameOver = guessCount === GAME_SIZE || guess === word;

	return (
		<>
			<div
				className={`modal_background ${
					gameOver ? "modal_background_visible" : null
				}`}
			/>
			<div className={`modal ${gameOver ? "modal_slide_up" : null}`}>
				<div className="modal_body">{`${
					guessCount === GAME_SIZE ? "You Lose!" : "You win!"
				} The word was ${word}.`}</div>
			</div>
		</>
	);
};

export default GameOverModal;
