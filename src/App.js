import "./App.css";
import PropTypes from "prop-types";
import pokemon from "./pokemon.json";

const PokemonRow = ({ poke }) => {
	return (
		<tr>
			<td>{poke.name.english}</td>
			<td>{poke.type.join(", ")}</td>
		</tr>
	);
};

PokemonRow.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.shape({ english: PropTypes.string }),
		type: PropTypes.arrayOf(PropTypes.string),
	}),
};

function App() {
	return (
		<div style={{ margin: "auto", width: 800, paddingTop: "1rem" }}>
			<h1 className="title">Pokemon Search</h1>
			<table width="100%">
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
					</tr>
				</thead>
				<tbody>
					{pokemon.slice(0, 20).map((poke) => (
						<PokemonRow
							key={poke.id}
							poke={poke}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
