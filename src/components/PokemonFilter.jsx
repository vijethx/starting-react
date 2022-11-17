import { TextField } from "@mui/material";
import React from "react";

const PokemonFilter = ({ filter, setFilter }) => (
	<TextField
		fullWidth
		value={filter}
		onChange={(e) => setFilter(e.target.value)}
	/>
);

export default PokemonFilter;
