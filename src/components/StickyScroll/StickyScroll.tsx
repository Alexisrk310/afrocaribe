'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const StickyScroll = ({
	content,
	contentClassName,
}: {
	content: {
		title: string;
		description: string;
		content?: React.ReactNode | any;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = useState(0);
	const [imageTop, setImageTop] = useState('10%');
	const ref = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		offset: ['start start', 'end start'],
	});

	const cardLength = content.length;

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		const cardsBreakpoints = content.map((_, index) => index / cardLength);
		const closestBreakpointIndex = cardsBreakpoints.reduce(
			(acc, breakpoint, index) => {
				const distance = Math.abs(latest - breakpoint);
				if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
					return index;
				}
				return acc;
			},
			0
		);
		setActiveCard(closestBreakpointIndex);

		setImageTop(`${10 + 40 * latest}%`);
	});

	const backgroundColors = ['var(--blue-400)', 'var(--blue-500)'];
	const linearGradients = [
		'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
		'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
		'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
	];

	const [backgroundGradient, setBackgroundGradient] = useState(
		linearGradients[0]
	);

	useEffect(() => {
		setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
	}, [activeCard]);

	return (
		<motion.div
			animate={{
				backgroundColor: backgroundColors[activeCard % backgroundColors.length],
			}}
			className="min-h-screen flex flex-col lg:flex-row justify-center relative space-y-10 lg:space-y-0 lg:space-x-10 p-4 lg:p-10"
			ref={ref}>
			<div className="relative flex flex-col items-start px-4 w-full lg:w-2/3">
				<div className="max-w-2xl w-full">
					{content.map((item, index) => (
						<div key={item.title + index} className="my-20">
							<motion.h2
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="text-2xl font-bold text-slate-100">
								{item.title}
							</motion.h2>
							<motion.p
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: activeCard === index ? 1 : 0.3,
								}}
								className="text-lg text-slate-300 max-w-sm mt-10">
								{item.description}
							</motion.p>
						</div>
					))}
					<div className="h-40" />
				</div>
			</div>
			<div
				style={{ background: backgroundGradient, top: imageTop }}
				className={cn(
					'hidden lg:block h-60 w-80 rounded-md bg-white sticky overflow-hidden mt-20',
					contentClassName
				)}>
				{content[activeCard].content ?? null}
			</div>
		</motion.div>
	);
};

export default StickyScroll;
