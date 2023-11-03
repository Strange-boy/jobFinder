import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
	return (
		<div className="help-layout">
			<h2>Website help</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio
				veniam officia laborum incidunt beatae animi corporis iusto assumenda
				voluptate nulla numquam eius rerum saepe a deleniti sit, excepturi
				distinctio.
			</p>
			<nav>
				<NavLink to="faq">View The FAQ</NavLink>
				<NavLink to="contact">Contact Us</NavLink>
			</nav>
			<Outlet />
		</div>
	);
};

export default HelpLayout;
