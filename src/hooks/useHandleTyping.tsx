import { useEffect } from "react";

const useHandleTyping = (
	curr: string,
	setCurr: React.Dispatch<React.SetStateAction<string>>,
	setCurrGuess: React.Dispatch<React.SetStateAction<string>>,
	setGuessCount: React.Dispatch<React.SetStateAction<number>>
) => {
	useEffect(() => {
		const handleTyping = (e: KeyboardEvent) => {
			if (e.key === "Enter" && curr.length === 5) {
				setCurrGuess(curr);
				setCurr("");
				setGuessCount((prev) => prev + 1);
			}
			if (e.key === "Backspace") {
				setCurr((prev) => prev.slice(0, -1));
			} else if (curr.length !== 5 && e.key.match(`^[a-zA-z]$`)) {
				setCurr((prev) => prev + e.key.toUpperCase());
			}
		};

		window.addEventListener("keydown", handleTyping);

		return () => {
			window.removeEventListener("keydown", handleTyping);
		};
	}, [curr, setCurr, setCurrGuess, setGuessCount]);
	return <div>useHandleTyping</div>;
};

export default useHandleTyping;
