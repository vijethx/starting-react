import "./App.css";
import pokemon from "./pokemon.json";

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
						<tr key={poke.id}>
							<td>{poke.name.english}</td>
							<td>{poke.type.join(", ")}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
