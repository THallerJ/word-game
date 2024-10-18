import { GAME_SIZE } from "./common";

type VictoryModalProps = {
	guess: string;
	word: string;
	guessCount: number;
	onReset: () => void;
};
const GameOverModal = ({
	guess,
	word,
	guessCount,
	onReset,
}: VictoryModalProps) => {
	const gameOver = guessCount === GAME_SIZE || guess === word;

	return (
		<>
			<div
				className={`modal_background ${
					gameOver ? "modal_background_visible" : null
				}`}
			/>
			<div className={`modal ${gameOver ? "modal_slide_up" : null}`}>
				<div className="modal_body">
					<span>
						{`${
							guess === word ? "You win!" : "You lose!"
						} The word was ${word}.`}
					</span>
					<button className="btn" onClick={onReset}>
						Play again
					</button>
				</div>
			</div>
		</>
	);
};

export default GameOverModal;
