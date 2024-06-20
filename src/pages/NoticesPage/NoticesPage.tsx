'use client';
import {
	BentoGrid,
	BentoGridItem,
	FlipWords,
	InfiniteMovingCards,
} from '@/components';
import { items, notices, words } from '@/constant/ContantNotices';

const NoticesPage = ({}) => {
	return (
		<div>
			<div className="h-[40rem] flex justify-center items-center px-4 bg-green-200">
				<div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 ">
					En <span className="font-bold text-blue-400">AFROCARIBE</span>{' '}
					encontrarás las mejores
					<FlipWords words={words} className="text-blue-400 font-bold" /> <br />
					para poder estar informado
				</div>
			</div>
			<h1 className="text-4xl text-green-600 text-center font-bold my-12">
				NOTICIAS IMPORTANTES
			</h1>
			<BentoGrid className="max-w-4xl mx-auto">
				{items.map((item, i) => (
					<BentoGridItem
						key={i}
						title={item.title}
						description={item.description}
						header={item.header}
						icon={item.icon}
						className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
					/>
				))}
			</BentoGrid>
			<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards items={notices} direction="right" speed="slow" />
			</div>
		</div>
	);
};

export default NoticesPage;
