import {
	AuroraBackground,
	BentoGrid,
	BentoGridItem,
	WaveMask,
} from '@/components';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

const HomePage = ({}) => {
	// const items = [
	// 	{
	// 		title: 'The Dawn of Innovation',
	// 		description: 'Explore the birth of groundbreaking ideas and inventions.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// 	{
	// 		title: 'The Digital Revolution',
	// 		description: 'Dive into the transformative power of technology.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// 	{
	// 		title: 'The Art of Design',
	// 		description: 'Discover the beauty of thoughtful and functional design.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// 	{
	// 		title: 'The Power of Communication',
	// 		description:
	// 			'Understand the impact of effective communication in our lives.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br im"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// 	{
	// 		title: 'The Pursuit of Knowledge',
	// 		description: 'Join the quest for understanding and enlightenment.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// 	{
	// 		title: 'The Joy of Creation',
	// 		description: 'Experience the thrill of bringing ideas to life.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// 	{
	// 		title: 'The Spirit of Adventure',
	// 		description: 'Embark on exciting journeys and thrilling discoveries.',
	// 		header: (
	// 			<img
	// 				src="https://afrocaribebcn.net/wp-content/uploads/2023/01/cropped-logotipo-afrocaribe-sin-fondo.png"
	// 				className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br"
	// 			/>
	// 		),
	// 		icon: <AiFillQuestionCircle className="h-4 w-4 text-neutral-500" />,
	// 	},
	// ];
	return (
		<div>
			<AuroraBackground>
				<motion.div
					initial={{ opacity: 0.0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: 'easeInOut',
					}}
					className="relative flex flex-col gap-4 items-center justify-center px-4">
					<div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
						¿QUIERES SABER MAS DE NOSOTROS?
					</div>
					<div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
						SIGUE ESTOS PASOS
					</div>
					<div className="flex *:mx-2 *:my-2   flex-wrap justify-center">
						<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
							CLICK AQUI
						</button>
						<button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
							DESPUES AQUI
						</button>
					</div>
				</motion.div>
			</AuroraBackground>
			
			
		</div>
	);
};

// const Skeleton = () => (
// 	<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
export default HomePage;
