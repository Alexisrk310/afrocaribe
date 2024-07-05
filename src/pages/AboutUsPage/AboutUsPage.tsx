'use client';
import {
	HeroHighlight,
	Highlight,
	RevealOnScroll,
	StickyScroll,
} from '@/components';
import { contentAbout } from '@/constant/AboutUsContant';
import { motion } from 'framer-motion';

const AboutUsPage = ({}) => {
	return (
		<>
			<HeroHighlight>
				<motion.h1
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0.0, 0.2, 1],
					}}
					className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
					SOMOS ASOCIACION DE AFRODESCENDIENTES DEL CARIBE COLOMBIANO,
					IDENTIFICADA CON LA SIGLA{' '}
					<Highlight className="text-black dark:text-white">
						“AFROCARIBE”
					</Highlight>
				</motion.h1>
			</HeroHighlight>
			<RevealOnScroll>
				<StickyScroll content={contentAbout} />
			</RevealOnScroll>
			<RevealOnScroll>
				<h1 className=" p-10 text-4xl text-green-600 text-center font-bold my-12">
					PRINCIPIOS
				</h1>
			</RevealOnScroll>
			<RevealOnScroll>
				<div className="flex justify-center gap-10 flex-wrap mb-20">
					<motion.div
						className="w-96 text-center border rounded-lg overflow-hidden p-10 shadow-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<h1 className="font-bold text-lg mb-5">Respeto</h1>
						<p>
							AFROCARIBE como unión acepta la diversidad organizativa, promueve
							la libre expresión, valora a cada individuo y su quehacer social.
							Es esencial el trato amable y cortés; el respeto es la esencia de
							las relaciones humanas, de la vida en comunidad, del trabajo en
							equipo, de cualquier relación interpersonal. El respeto es
							garantía de transparencia. Cada una de las organizaciones
							afrocolombianas aporta a la Conferencia la construcción de su
							ideal.
						</p>
					</motion.div>
					<motion.div
						className="w-96 text-center border rounded-lg overflow-hidden p-10 shadow-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<h1 className="font-bold text-lg mb-5">Equidad</h1>
						<p>
							La equidad deriva de lo entendido también como igualdad; se trata
							de la constante búsqueda de la justicia social, la que asegura a
							todas las personas condiciones de vida y de trabajo, dignas e
							igualitarias, sin hacer diferencias entre unas personas y otras a
							partir de la condición social, sexual o de género, culturales y de
							etnia, es la adopción de medidas de acción afirmativa en pro de
							generar igualdad de oportunidades para Pueblo Afrocolombiano.
						</p>
					</motion.div>
					<motion.div
						className="w-96 text-center border rounded-lg overflow-hidden p-10 shadow-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<h1 className="font-bold text-lg mb-5">Transparencia y Verdad</h1>
						<p>
							La transparencia como un mecanismo fundamental de crecimiento
							personal y organizativo, permitiendo ser responsable con cada una
							de las organizaciones que convergen en AFROCARIBE, parte
							fundamental de una buena gestión que permita el buen
							funcionamiento y un adecuado uso de recursos y el manejo adecuado
							de la comunicación donde cada organización tenga acceso a la
							misma. La verdad como práctica que da libertad de decir lo que se
							siente y se piensa, generando oportunidades de crecimiento y
							desarrollo.
						</p>
					</motion.div>
					<motion.div
						className="w-96 text-center border rounded-lg overflow-hidden p-10 shadow-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<h1 className="font-bold text-lg mb-5">
							Responsabilidad y Compromiso
						</h1>
						<p className="">
							En su accionar colectivo, cada una de las organizaciones que hace
							parte de AFROCARIBE tiene la corresponsabilidad de reconocer los
							aportes propios y de los demás en la construcción del proceso de
							consolidación. Asumir de forma consciente que cada integrante de
							la organización tiene una tarea y función propia que va articulada
							a los diferentes procesos que se realizan o se tienen planificados
							realizar, por lo cual el compromiso y responsabilidad son factores
							de gran importancia dentro del proceso.
						</p>
					</motion.div>
				</div>
			</RevealOnScroll>
		</>
	);
};

export default AboutUsPage;
