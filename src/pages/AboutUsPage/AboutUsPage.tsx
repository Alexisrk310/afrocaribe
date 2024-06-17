'use client';
import { HeroHighlight, Highlight, StickyScroll } from '@/components';
import { motion } from 'framer-motion';
import '../../../public/representativa.jpg';
const AboutUsPage = ({}) => {
	const content = [
		{
			title: 'MISIÓN',
			description:
				'AFROCARIBE, es una unión que trabaja por los derechos humanos del pueblo afrocolombiano y sus intereses colectivos, articula las diferentes iniciativas de organizaciones afrocolombianas, a través de la construcción de capacidades en incidencia política y legislativa; fortalecimiento organizacional; comunicación estratégica, territorio y territorialidad.',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./mision.jpg"
						width={300}
						height={300}
						className="h-full w-full object-cover"
						alt="Misión"
					/>
				</div>
			),
		},
		{
			title: 'VISIÓN',
			description:
				'AFROCARIBE se visualiza como una unión proactiva y planificada, que diseña, desarrolla y evalúa sus acciones de forma colectiva y participativa, además:',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./vision.jpg"
						width={300}
						height={300}
						className="h-full w-full object-cover"
						alt="Visión"
					/>
				</div>
			),
		},
		{
			title: 'Representativa',
			description:
				'Una unión representativa a nivel nacional e internacional, como referente para la participación, la promoción, la formulación de políticas públicas con un enfoque étnico-racial.',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./representativa.jpg"
						width={300}
						height={300}
						className="h-full w-full object-cover"
						alt="representativa"
					/>
				</div>
			),
		},
		{
			title: 'Integral',
			description:
				'Una unión con alianzas estratégicas, con organizaciones de la sociedad civil, el sector empresarial, la cooperación internacional y el Estado, mediante compromisos de ayuda o apoyo mutuo para lograr un fin determinado.',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./integral.jpg"
						width={300}
						height={300}
						className="h-full w-full object-cover"
						alt="integral"
					/>
				</div>
			),
		},
		{
			title: 'Comprometida',
			description:
				'Una unión con alianzas estratégicas, con organizaciones de la sociedad civil, el sector empresarial, la cooperación internacional y el Estado, mediante compromisos de ayuda o apoyo mutuo para lograr un fin determinado.',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./comprometida.jpg"
						width={300}
						height={300}
						className="h-full w-full object-cover"
						alt="comprometida"
					/>
				</div>
			),
		},
		{
			title: 'Proactiva',
			description:
				'Una unión que fortalece, capacidades a líderes y lideresas con un compromiso de forjar relaciones de equidad que inviten a participar a nuevos liderazgos.',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./proactiva.jpg"
						width={300}
						height={300}
						className="h-full w-full object-cover"
						alt="proactiva"
					/>
				</div>
			),
		},
		{
			title: '',
			description: '',
			content: (
				<div className="h-full w-full  flex items-center justify-center text-white">
					<img
						src="./logo.jpg"
						width={300}
						height={300}
						className="h-full w-full"
						alt="proactiva"
					/>
				</div>
			),
		},
		{
			title: '',
			description: '',
			content: <></>,
		},
	];
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
			<>
				<StickyScroll content={content} />
				<h1 className="font-bold text-center text-2xl p-10">PRINCIPIOS</h1>
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
			</>
		</>
	);
};

export default AboutUsPage;
