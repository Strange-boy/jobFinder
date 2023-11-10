import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
	// const { id } = useParams();
	const career = useLoaderData();

	return (
		<div className="career-details">
			<h2>Position: {career.title}</h2>
			<p>Location: {career.location}</p>
			<p>Starting Salary:{career.salary}</p>
			<div className="details">
				We are looking for a candidate for the {career.title} at{" "}
				{career.location} and are willing to offer a approx amount of $
				{career.salary}
			</div>
		</div>
	);
}

export const careerDetailsLoader = async ({ params }) => {
	try {
		const { id } = params;

		const response = await fetch("http://localhost:4000/careers/" + id);

		if (!response.ok) {
			throw Error("Could not find the details of the career");
		}
		return response.json();
	} catch (error) {
		console.log("Error fetching the data:", error);
		throw error;
	}
};
