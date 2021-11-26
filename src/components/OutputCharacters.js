import SingleCharacter from './SingleCharacter';

function OutputCharacters(props) {
	const characters = props.characters.results.map((character) => {
		return <SingleCharacter character={character}></SingleCharacter>;
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Photo</th>
						<th>Character ID</th>
						<th>Name</th>
						<th>Gender</th>
						<th>Species</th>
						<th>Last Episode</th>
						<th>Add To Favorites</th>
					</tr>
				</thead>
				<tbody>{characters}</tbody>
			</table>
		</div>
	);
}

export default OutputCharacters;
