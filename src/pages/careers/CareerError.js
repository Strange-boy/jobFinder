import { useRouteError, Link } from "react-router-dom";

export default function CareerError() {
	const errorElement = useRouteError();

	return (
		<div className="career-error">
			<h2>Error</h2>
			<h2>{errorElement.message}</h2>
			<Link to="/">Back to home page</Link>
		</div>
	);
}
