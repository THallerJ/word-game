import { useEffect, useState } from "react";
import { GAME_SIZE } from "../common";

const usePrevGuesses = (guess: string) => {
	const [prevGuesses, setPrevGuesses] = useState<string[]>([]);

	useEffect(() => {
		if (guess.length === GAME_SIZE) {
			setPrevGuesses((prev) => {
				if (prev.length < GAME_SIZE) {
					return [...prev, guess];
				} else {
					return prev;
				}
			});
		}
	}, [guess]);

	return prevGuesses;
};

export default usePrevGuesses;
