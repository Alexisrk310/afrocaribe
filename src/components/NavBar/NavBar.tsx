import { Navbar } from 'flowbite-react';
import Logo from '@/assets/logo.jpg';
import { useEffect, useState, useRef } from 'react';

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
			className={`fixed w-full *:justify-around transition-colors duration-300 z-10 ${
				navbarBg ? 'bg-blue-300' : 'bg-transparent'
			}`}>
			<Navbar.Brand href="https://flowbite-react.com">
				<img src={Logo} className="mr-3 h-11 sm:h-20" alt="Afrocaribe" />
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Navbar.Link href="#" active>
					Home
				</Navbar.Link>
				<Navbar.Link href="#">About</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
