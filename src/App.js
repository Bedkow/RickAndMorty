import React from 'react';
import './App.css';
import mainLogo from './img/logoRNM.svg';
import searchIcon from './img/search-icon.svg';
import { useState, useEffect } from 'react';
import OutputCharacters from './components/OutputCharacters';

function App() {
	const [characters, setCharacters] = useState(null);

	const handleFilter = (event) => {
		console.log('clicked');
		event.preventDefault();
	};

	useEffect(() => {
		fetch(`https://rickandmortyapi.com/api/character`)
			.then((res) => res.json())
			.then((response) => {
				setCharacters(response);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className='App'>
			<header>
				<img src={mainLogo} alt='logo' className='main-logo'></img>

				<form className='character-search-form'>
					<div className='search-bar'>
						<div className='bar-title'>Search by</div>
						<input className='search-by'></input>
						<input className='search-input'></input>
						<button className='search-button' onClick={handleFilter}>
							<img src={searchIcon} alt='search'></img>
						</button>
					</div>
				</form>
			</header>
			<button>All Characters</button>
			<button>Favorites</button>

			{characters && (
				<OutputCharacters characters={characters}></OutputCharacters>
			)}
		</div>
	);
}

export default App;
