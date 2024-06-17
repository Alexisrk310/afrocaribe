import { NavBar } from '@/components';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import {
	AboutUsPage,
	ContactPage,
	HomePage,
	NoticesPage,
	ProgramsPage,
} from '@/pages';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export const AppRouter = () => {
	return (
		<Router>
			<NavBar />
			<FloatingWhatsApp
				phoneNumber="3012266530"
				accountName="Asesor de Afrocaribe"
				placeholder="Escribenos..."
				avatar="https://prensarural.org/spip/IMG/jpg/26082022-web-fmm-evento-ley-70_.jpg"
				statusMessage="En linea"
				chatMessage="Hola, buenas"
				// raro
				messageDelay={1000}
				notification={true}
				notificationSound={true}
			/>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/acerca-de-nosotros" element={<AboutUsPage />} />
				<Route path="/programas" element={<ProgramsPage />} />
				<Route path="/noticias" element={<NoticesPage />} />
				<Route path="/contacto" element={<ContactPage />} />
			</Routes>
		</Router>
	);
};
