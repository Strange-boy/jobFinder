import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
	const data = useLoaderData();

	return (
		<div className="careers">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
			neque omnis architecto culpa libero alias commodi corporis consequuntur
			aperiam labore facilis doloribus consequatur odio maxime quis ex error
			vero autem?
			{data.map((option) => (
				<Link to="/" key={option.id}>
					<p>{option.title}</p>
					<p>Location: {option.location}</p>
				</Link>
			))}
		</div>
	);
};

export default Careers;

export const careerLoader = async () => {
	const response = await fetch(" http://localhost:4000/careers");
	return response.json();
};
