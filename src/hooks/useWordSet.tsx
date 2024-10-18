import { useState, useEffect } from "react";

const useWordSet = (word: string) => {
	const [wordSet, setWordSet] = useState<Set<string>>(new Set());

	useEffect(() => {
		const set = new Set<string>();
		for (const letter of word) {
			set.add(letter);
		}
		setWordSet(set);
	}, [word, setWordSet]);

	return wordSet;
};

export default useWordSet;
