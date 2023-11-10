import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function BreadCrumbs() {
	const location = useLocation();

	//in order to display the current link
	let currentLink = "";

	// console.log(location);
	const crumbs = location.pathname
		.split("/")
		.filter((crumb) => {
			return crumb !== "";
		})
		.map((crumb) => {
			currentLink += `/${crumb}`;

			return (
				<div className="crumb" key={crumb}>
					<Link to={currentLink}>{crumb}</Link>
				</div>
			);
		});

	return <div className="breadcrumbs">{crumbs}</div>;
}
