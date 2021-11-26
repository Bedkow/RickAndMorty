import { useState, useEffect } from 'react';
import starInactive from '../img/star-inactive.svg';
import starActive from '../img/star-active.svg';
import maleIcon from '../img/male.svg';
import femaleIcon from '../img/female.svg';
import genderlessIcon from '../img/genderless.svg';
import unknownIcon from '../img/unknown-gender.svg';

function SingleCharacter({ character }) {
	const [episode, setEpisode] = useState([]);
	let [favorite, setFavorite] = useState(starInactive);
	let [genderImage, setGenderImage] = useState(null);

	useEffect(() => {
		const smth = async (data) => {
			let fetchingData = await fetch(data.episode[data.episode.length - 1]);
			let episode = await fetchingData.json();
			setEpisode(episode.episode);
		};
		smth(character);
	}, [character]);

	// @@@
	useEffect(() => {
		if (character.gender.toLowerCase() === 'male') {
			setGenderImage(maleIcon);
		} else if (character.gender.toLowerCase() === 'female') {
			setGenderImage(femaleIcon);
		} else if (character.gender.toLowerCase() === 'unknown') {
			setGenderImage(unknownIcon);
		} else {
			setGenderImage(genderlessIcon);
		}
	}, [character.gender]);

	// @@
	let handleSetFavorite = () => {
		if (favorite === starInactive) {
			favorite = starActive;
			// let isFavorite = true;
		} else {
			favorite = starInactive;
			// let isFavorite = false;
		}
		setFavorite(favorite);
	};
	//@@

	return (
		<tr key={character.id} className='table-row'>
			<td>
				<img src={character.image} alt={character.name} width='80px'></img>
			</td>
			<td>{character.id}</td>
			<td> {character.name}</td>
			<td>
				<img src={genderImage} alt=''></img>
				{character.gender}
			</td>
			<td>{character.species}</td>
			<td>{episode}</td>
			<td>
				<img onClick={handleSetFavorite} src={favorite} alt=''></img>
			</td>
		</tr>
	);
}

export default SingleCharacter;
