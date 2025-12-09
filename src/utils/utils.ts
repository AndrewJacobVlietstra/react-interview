// Function accepts array of words and n, n is the nth most frequent word to return
export const wordFrequency = (words: string[], n: number) => {
	const wordCache: Record<string, number> = {};

	// Create cache by looping through each word in array and incrementing frequency as encountered
	words.forEach((word) => {
		if (wordCache[word] == null) {
			wordCache[word] = 1;
		} else {
			wordCache[word] += 1;
		}
	});

	// Create an array to push in the computed frequency of words from wordCache
	const sortedWords = [];

	// Loop through wordCache by each word and push object containing word and frequency
	// into an array which we will sort by frequency
	for (const word in wordCache) {
		const frequency = wordCache[word];
		sortedWords.push({ word, frequency });
	}

	// Sort words in descending order by frequency to grab nth most frequent word
	sortedWords.sort((a, b) => b.frequency - a.frequency);

	// Initialize values to return from function
	let nthWord;
	let nthFrequency;
	let result;

	// Grab the nth element in array, subtract 1 cause array is 0 index based
	// If nth word does not exist return null
	if (!sortedWords[n - 1]) {
		nthWord = null;
		nthFrequency = null;
		result = null;

		return [result, sortedWords];
	}

	// Else take note of the frequency of the nth word cause next we will filter
	// for all additional words at same frequency
	nthWord = sortedWords[n - 1];
	nthFrequency = nthWord.frequency;

	// Return all words that are equal to the nthWord's frequency, filter out words otherwise,
	// cause we want the nth most frequent word(s)
	result = sortedWords.filter(
		(sortedWord) => sortedWord.frequency === nthFrequency
	);

	return [result, sortedWords];
};
