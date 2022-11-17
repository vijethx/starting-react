import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";

const PokemonTable = () => {
	const { pokemon, filter, setSelectedItem } = useContext(PokemonContext);
	return (
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
							pokemon={poke}
							onSelect={setSelectedItem}
						/>
					))}
			</tbody>
		</table>
	);
};

export default PokemonTable;
