import PokemonType from "../PokemonType";

const PokemonInfo = ({ name, base, type }) => {
	return (
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
	);
};

PokemonInfo.propTypes = PokemonType;

export default PokemonInfo;
