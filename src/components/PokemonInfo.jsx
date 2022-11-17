import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonType from "../PokemonType";

const PokemonInfo = () => {
	const { selectedItem } = useContext(PokemonContext);
	const { name, base } = selectedItem;
	return selectedItem ? (
		<div className="">
			<h1>{name.english}</h1>
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
	) : null;
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
