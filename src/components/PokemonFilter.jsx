import { TextField } from "@mui/material";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonFilter = () => {
	const { filter, setFilter } = useContext(PokemonContext);
	return (
		<TextField
			fullWidth
			value={filter}
			onChange={(e) => setFilter(e.target.value)}
		/>
	);
};

export default PokemonFilter;
