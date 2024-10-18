import { useEffect, useState } from "react";
import { GAME_SIZE } from "../common";

const usePrevGuesses = (guess: string, guessCount: number) => {
	const [prevGuesses, setPrevGuesses] = useState<string[]>([]);

	useEffect(() => {
		if (guess.length === GAME_SIZE && guessCount > 0) {
			setPrevGuesses((prev) => {
				if (prev.length < GAME_SIZE) {
					return [...prev, guess];
				} else {
					return prev;
				}
			});
		}
	}, [guess, guessCount]);

	return prevGuesses;
};

export default usePrevGuesses;
