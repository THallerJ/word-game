import { useState, useEffect } from 'react';

const useWordMap = (word: string) => {
  const [wordMap, setWordMap] = useState<Record<string, number>>({});

  useEffect(() => {
    const tempMap: Record<string, number> = {};
    for (const letter of word) {
      tempMap[letter] = (tempMap[letter] ?? 0) + 1;
    }
    setWordMap(tempMap);
  }, [word, setWordMap]);

  return wordMap;
};

export default useWordMap;
