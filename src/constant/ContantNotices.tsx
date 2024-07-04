import { AiFillQuestionCircle } from 'react-icons/ai';

export const words = ['NOTICIAS', 'NOVEDADES', 'PRIMICIAS'];
export const items = [
	{
		title: 'Avances en los Derechos de las Comunidades Afrocolombianas',
		description:
			'El gobierno implementa nuevas políticas para mejorar la calidad de vida de las comunidades afro.',
		header: (
			<img
				src="data:image/jpeg;base64,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"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br object-cover"
				alt="Avances en los Derechos de las Comunidades Afrocolombianas"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Celebración del Día de la Afrocolombianidad',
		description:
			'Eventos y actividades conmemorativas marcan el Día de la Afrocolombianidad en todo el país.',
		header: (
			<img
				src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3w0NjA3MDB8MHwxfGFsbHwyfHx8fHx8fHwxNjg3MTg4NzI4&auto=format&fit=crop&w=500&q=60"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
				alt="Celebración del Día de la Afrocolombianidad"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Innovaciones Tecnológicas en Comunidades Afro',
		description:
			'Emprendedores afrocolombianos lideran el camino en tecnología e innovación.',
		header: (
			<img
				src="https://www.ucatolica.edu.co/portal/wp-content/uploads/2022/06/Noticia-19.jpg"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
				alt="Innovaciones Tecnológicas en Comunidades Afro"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Arte y Cultura: Expresiones Afrocolombianas',
		description:
			'Exploramos la rica herencia artística y cultural de las comunidades afro en Colombia.',
		header: (
			<img
				src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/node/article/field_image/200504-MinCultura-aporte-poblacion-afrodescendiente-pais-1800.jpg"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br object-cover object-top"
				alt="Arte y Cultura: Expresiones Afrocolombianas"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Educación y Oportunidades para la Juventud Afro',
		description:
			'Programas educativos abren nuevas oportunidades para jóvenes afrocolombianos.',
		header: (
			<img
				src="https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/YNI5SGKNIJFD7IDUTYV4SEWHBU.jpeg"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
				alt="Educación y Oportunidades para la Juventud Afro"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Liderazgo Afro en el Cambio Climático',
		description:
			'Líderes afrocolombianos toman la iniciativa en proyectos de sostenibilidad y medio ambiente.',
		header: (
			<img
				src="https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/ZTQYS5FNQBCG7NUETKVZ3DV2NY.JPG"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
				alt="Liderazgo Afro en el Cambio Climático"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: 'Historias de Éxito: Emprendedores Afrocolombianos',
		description:
			'Conoce a los emprendedores afrocolombianos que están marcando la diferencia.',
		header: (
			<img
				src="https://bogota.gov.co/sites/default/files/styles/1050px/public/2023-04/johanna.jpg"
				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br object-cover object-top"
				alt="Historias de Éxito: Emprendedores Afrocolombianos"
			/>
		),
		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	},
];

export const notices = [
	{
		quote:
			'Asesinatos selectivos, reclutamiento forzado, estigmatización, despojo de tierras, trabajos forzados y violencia sexual son algunos de los delitos que se denuncian en los informes y que las 178 comunidades afro esperan que sean estudiados y juzgados por esta justicia transicional.',
		name: 'El Espectador',
		title:
			'Informes sobre la violencia contra los afros en Colombia ya están en manos de la JEP',
	},
	{
		quote:
			'El joven no estaba haciendo nada, iba pasando cuando la policía lo abordó. Fue tanto el maltrato que este muchacho recibió que quedó en shock y por miedo no quiere salir de la casa; entonces, es una situación compleja, pero además repetitiva la forma como algunos agentes de policía se dirigen a los jóvenes.',
		name: 'Semana',
		title:
			'Los casos de racismo sistemáticos que denuncia la comunidad Afrocolombiana',
	},
	{
		quote:
			'Mediante el decreto 725 de 2001, el expresidente Andrés Pastrana instituyó el 21 de mayo como el Día de la Afrocolombianidad, la fecha en la que durante estos dieciocho años se ha conmemorado la abolición de la esclavitud en el país.',
		name: 'El Espectador',
		title:
			'Día de la Afrocolombianidad: 168 años de celebración y lucha por los derechos del pueblo afro',
	},
	{
		quote:
			'La comunidad afrocolombiana celebra el Día de la Afrocolombianidad recordando figuras históricas como Benkos Biohó, quien lideró la primera comunidad libre de América.',
		name: 'El Espectador',
		title:
			'Día de la Afrocolombianidad: 168 años de celebración y lucha por los derechos del pueblo afro',
	},
	{
		quote:
			'La violencia, denunciaron, está cada vez peor. Hace tan dos días hubo un atentado en contra del líder Henry Chaverra, defensor en Belén de Bajirá. Los mayores avances que hay de protección a líderes por parte del Gobierno están relacionados con medidas materiales.',
		name: 'El Espectador',
		title:
			'Informes sobre la violencia contra los afros en Colombia ya están en manos de la JEP',
	},
];
