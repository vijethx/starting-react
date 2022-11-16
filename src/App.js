import "./App.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const PokemonRow = ({ poke, onSelect }) => {
	return (
		<tr>
			<td
				style={{ cursor: "pointer" }}
				onClick={() => onSelect(poke)}>
				{poke.name.english}
			</td>
			<td>{poke.type.join(", ")}</td>
		</tr>
	);
};

PokemonRow.propTypes = {
	poke: PropTypes.shape({
		name: PropTypes.shape({ english: PropTypes.string.isRequired }),
		type: PropTypes.arrayOf(PropTypes.string.isRequired),
	}),
	onSelect: PropTypes.func.isRequired,
};

const PokemonInfo = ({ name, base, type }) => {
	return (
		<div className="">
			<h1>{name.english}</h1>
			{/* <h2>Type: {type.join(", ")}</h2> */}
			<table>
				<tbody>
					{Object.keys(base).map((key) => (
						<tr key={key}>
							<td>{key}</td>
							<td>{base[key]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

PokemonInfo.propTypes = {
	name: PropTypes.shape({ english: PropTypes.string.isRequired }),
	base: PropTypes.shape({
		HP: PropTypes.number.isRequired,
		Attack: PropTypes.number.isRequired,
		Defense: PropTypes.number.isRequired,
		"Sp. Attack": PropTypes.number.isRequired,
		"Sp. Defense": PropTypes.number.isRequired,
		Speed: PropTypes.number.isRequired,
	}),
};

function App() {
	const [filter, setFilter] = useState("");
	const [selectedItem, setSelectedItem] = useState(null);
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/starting-react/pokemon.json")
			.then((resp) => resp.json())
			.then((data) => {
				console.log("fetched pokemons");
				setPokemon(data);
			});
	}, []);

	return (
		<div style={{ margin: "auto", width: 800, paddingTop: "1rem" }}>
			<h1 className="title">Pokemon Search</h1>
			<input
				type="text"
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "70% 30%",
					gridColumnGap: "1rem",
				}}>
				<div className="">
					<table width="100%">
						<thead>
							<tr>
								<th>Name</th>
								<th>Type</th>
							</tr>
						</thead>
						<tbody>
							{pokemon
								.filter((pokemon) =>
									pokemon.name.english
										.toLowerCase()
										.includes(filter.toLowerCase())
								)
								.slice(0, 20)
								.map((poke) => (
									<PokemonRow
										key={poke.id}
										poke={poke}
										onSelect={setSelectedItem}
									/>
								))}
						</tbody>
					</table>
				</div>
				{selectedItem && (
					<div className="">
						<PokemonInfo {...selectedItem} />
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
