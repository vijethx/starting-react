import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import "./App.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";

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
		<Container>
			<Title>Pokemon Search</Title>

			<PokemonFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<TwoColumnLayout>
				<div className="">
					<PokemonTable
						pokemon={pokemon}
						filter={filter}
						setSelectedItem={setSelectedItem}
					/>
				</div>
				{selectedItem && (
					<div className="">
						<PokemonInfo {...selectedItem} />
					</div>
				)}
			</TwoColumnLayout>
		</Container>
	);
}

export default App;
