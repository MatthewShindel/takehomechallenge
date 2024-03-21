import './App.css';
import { useState, useEffect } from 'react';
import { getArticles, getSourceArticles } from '../../ApiCalls';
import { testArticles } from '../../testData';
import { Route, Routes } from 'react-router-dom';
import Article from '../Article/Article';



function App() {
	const [articles, setArticles] = useState([]);
	const [selectedSource, setSelectedSource] = useState('');

	const getBaselineArticles = () => {
		getArticles()
			.then(data => data.json())
			.then(data => setArticles(data.articles))
	}

	const handleSourceButtonClick = (source) => {
		setSelectedSource(source);
		getSourceArticles(source)
			.then(data => data.json())
			.then(data => setArticles(data.articles))
	}

	useEffect(() => {
		getBaselineArticles();
	}, [])


	return (
		<div className="App">
			<header>
				<h1>The Compendiunm</h1>
			</header>
			<nav>
				<button className='nav-button' onClick={() => getBaselineArticles()}>Home</button>
				<button className='nav-button' onClick={() => handleSourceButtonClick('bbc')}>BBC</button>
				<button className='nav-button' onClick={() => handleSourceButtonClick('NBC')}>NBC</button>
				<button className='nav-button' onClick={() => handleSourceButtonClick('abc')}>ABC</button>
			</nav>
			<main>
				<Article articles={articles} />
			</main>
		</div>
	);
}

export default App;
