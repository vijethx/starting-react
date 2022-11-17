import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
	text-align: center;
`;
const TwoColumnLayout = styled.div`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-column-gap: "1rem";
`;
const Container = styled.div`
	margin: auto;
	width: 800px;
	padding-top: 1rem;
`;
// const Input = styled.input`
// 	width: 100%;
// 	font-size: x-large;
// 	padding: 0.2rem;
// `;

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
		<PokemonContext.Provider
			value={{
				filter,
				setFilter,
				selectedItem,
				setSelectedItem,
				pokemon,
			}}>
			<Container>
				<Title>Pokemon Search</Title>

				<PokemonFilter />
				<TwoColumnLayout>
					<div className="">
						<PokemonTable />
					</div>
					{selectedItem && (
						<div className="">
							<PokemonInfo />
						</div>
					)}
				</TwoColumnLayout>
			</Container>
		</PokemonContext.Provider>
	);
}

export default App;
