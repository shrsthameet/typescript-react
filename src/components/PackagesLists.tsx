import { useState } from "react";
import { useActions } from "../customHooks/useActions";
import { useTypedselector } from "../customHooks/useTypedSelector";

const listStyle = {
	listStyle: "none",
};

const PackagesLists: React.FC = () => {
	const [term, setTerm] = useState<string>("");
	const { searchRepo } = useActions();
	const { loading, data, error } = useTypedselector((state) => state.repositories);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepo(term);
	};

	return (
		<div>
			<h1>Packages Lists</h1>
			<form onSubmit={handleSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button type="submit">Search</button>
			</form>
			{loading && <p>Loading..</p>}
			{error && <p>{error}</p>}
			<ul style={listStyle}>{!loading && !error && data.map((item) => <li key={item}>{item}</li>)}</ul>
		</div>
	);
};

export default PackagesLists;
