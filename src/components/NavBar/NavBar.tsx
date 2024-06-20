import { Navbar } from 'flowbite-react';
import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const [navbarBg, setNavbarBg] = useState(false);
	const windowRef = useRef<Window | null>(null); // Tipo explícito Window | null

	const handleScroll = () => {
		if (windowRef.current && windowRef.current.scrollY > 50) {
			setNavbarBg(true);
		} else {
			setNavbarBg(false);
		}
	};

	useEffect(() => {
		windowRef.current = window; // Asignar window a windowRef.current
		windowRef.current?.addEventListener('scroll', handleScroll); // Operador de opcional chaining para evitar errores
		return () => {
			windowRef.current?.removeEventListener('scroll', handleScroll); // Operador de opcional chaining para evitar errores
		};
	}, []);

	return (
		<Navbar
			className={`fixed w-full *:justify-around transition-colors duration-300 z-50 ${
				navbarBg ? 'bg-green-400' : 'bg-transparent'
			}`}>
			<Navbar.Brand>
				<img src="./logo.jpg" className="mr-3 h-11 sm:h-20" alt="Afrocaribe" />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<NavLink
					to="/"
					className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-green-300 dark:text-white md:bg-transparent md:text-cyan-700">
					INICIO
				</NavLink>
				<NavLink
					to="/acerca-de-nosotros"
					className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-green-300 dark:text-white md:bg-transparent md:text-cyan-700">
					NOSOTROS
				</NavLink>
				<NavLink
					className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-green-300 dark:text-white md:bg-transparent md:text-cyan-700"
					to="/programas">
					PROGRAMAS
				</NavLink>
				<NavLink
					className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-green-300 dark:text-white md:bg-transparent md:text-cyan-700"
					to="noticias">
					NOTICIAS
				</NavLink>
				<NavLink
					className="block py-2 pl-3 pr-4 md:p-0 text-black hover:text-green-300 dark:text-white md:bg-transparent md:text-cyan-700"
					to="contacto">
					CONTACTO
				</NavLink>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
