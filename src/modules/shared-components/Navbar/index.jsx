import {  Link } from 'react-router-dom';
import './styles.css';

export const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/recipes/search">Search Recipes</Link></li>
				<li>Create New Recipe</li>
				<li>Account </li>
				<li>Settings</li>
				<li>Log in</li>
				<li>Log out</li>
			</ul>
		</nav>
	);
};
