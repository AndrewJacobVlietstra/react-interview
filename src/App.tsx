import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { wordFrequency } from "./utils/utils";
import { words } from "./constants/constants";

// # Given a list of m words, I’d like to query for the nth most frequent word(s). (e.g. Given 1000 words,
// # tell me the 5th most frequent word(s), or the 10th most frequent word(s) etc). I would like to query
// # multiple times for different n’s. The solution should be optimized for querying.

function App() {
	// -------------
	const [result_5, sortedWords] = wordFrequency(words, 5);
	const [result_10] = wordFrequency(words, 10);

	console.log("Sorted Words: ", sortedWords);
	console.log("5th most frequent word(s): ", result_5);
	console.log("10th most frequent word(s): ", result_10);

	//---------------
	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
