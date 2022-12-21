import { NavLink } from 'react-router-dom';
import "./Header.css"

export function Header() {
	return (
		<header className='d-flex justify-content-between align-item-center shadow px-5 py-2 bg-light header'>
			<NavLink className='logo' to={'/'}>
				The Rick and Morty
			</NavLink>
			<nav>
				<ul className='d-flex align-item-center gap-3 list-unstyled'>
					<li>
						<NavLink  to={'/'}>Character</NavLink>
					</li>
					<li>
						<NavLink  to={'/location'}>Location</NavLink>
					</li>
					<li>
						<NavLink  to={'/episode'}>Episode</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
