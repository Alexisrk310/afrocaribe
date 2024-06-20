import {
	FaInstagram,
	FaFacebook,
	FaYoutube,
	FaPhoneAlt,
	FaEnvelope,
	FaClock,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-green-500 text-white py-8">
			<div className="container mx-auto px-4 flex flex-wrap justify-between">
				<div className="flex flex-col justify-center w-full md:w-1/3 mb-6 md:mb-0">
					<img
						src="logo.jpg"
						alt="AFROCARIBE"
						className="h-32 w-8/12 mb-4 mx-auto md:mx-0"
					/>
					<p className="text-center md:text-left">
						SOMOS ASOCIACION DE AFRODESCENDIENTES DEL CARIBE COLOMBIANO,
						IDENTIFICADA CON LA SIGLA “AFROCARIBE”
					</p>
					{/* <a
						href="#"
						className="text-blue-300 hover:underline text-center md:text-left">
						Leer más &gt;&gt;
					</a> */}
				</div>
				<div className="flex flex-col justify-center w-full md:w-1/3 mb-6 md:mb-0">
					<h3 className="font-bold mb-2 text-center md:text-left">CONTACTO</h3>
					<p className="text-center md:text-left">
						Dirección UNICO CALLE 52 #3-29 CALI-VALLE
					</p>
					<p className="flex justify-center md:justify-start">
						<FaPhoneAlt className="mr-2" /> 3106461326 - 3137723725
					</p>
					<p className="flex justify-center md:justify-start">
						<FaEnvelope className="mr-2" /> fundacion@fundacionunico.org
					</p>
					<p className="flex justify-center md:justify-start">
						<FaClock className="mr-2" /> Lun. - Vie. 8AM - 6PM
					</p>
				</div>
				<div className="flex flex-col justify-center w-full md:w-1/3">
					<h3 className="font-bold mb-2 text-center md:text-left">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</h3>
					<ul className="text-center md:text-left">
						<li>
							<a href="#" className="text-blue-300 hover:underline">
								Link - href
							</a>
							<span className="text-gray-400 text-sm block">Fecha</span>
						</li>
						<li className="mt-2">
							<a href="#" className="text-blue-300 hover:underline">
								Link - href
							</a>
							<span className="text-gray-400 text-sm block">Fecha</span>
						</li>
						<li className="mt-2">
							<a href="#" className="text-blue-300 hover:underline">
								Link - href
							</a>
							<span className="text-gray-400 text-sm block">Fecha</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-8 border-t border-white pt-4">
				<p className="text-center md:text-left">AFROCARIBE </p>
				<div className="flex justify-center mt-4 md:mt-0 space-x-4">
					<a href="#" className="text-white hover:text-blue-300">
						<FaInstagram />
					</a>
					<a href="#" className="text-white hover:text-blue-300">
						<FaFacebook />
					</a>
					<a href="#" className="text-white hover:text-blue-300">
						<FaYoutube />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
