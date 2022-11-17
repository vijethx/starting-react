// import PropTypes from "prop-types";
// import PokemonType from "../PokemonType";

const PokemonRow = ({ pokemon, onSelect }) => (
	<>
		<tr key={pokemon.id}>
			<td
				style={{ cursor: "pointer" }}
				onClick={() => onSelect(pokemon)}>
				{pokemon.name.english}
			</td>
			<td>{pokemon.type.join(", ")}</td>
		</tr>
	</>
);

// PokemonRow.propTypes = {
// 	pokemon: PropTypes.arrayOf(PokemonType),
// };

export default PokemonRow;
