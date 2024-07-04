'use client';
import { ImagesSlider, RevealOnScroll, WobbleCard } from '@/components';
import { imagesPrograms } from '@/constant/ContantPrograms';
import { motion } from 'framer-motion';

const ProgramsPage = ({}) => {
	return (
		<>
			<ImagesSlider className="h-[40rem]" images={imagesPrograms}>
				<motion.div
					initial={{
						opacity: 0,
						y: -80,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.6,
					}}
					className="z-50 flex flex-col justify-center items-center">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="font-bold text-white text-xl md:text-6xl text-center bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
						PROGRAMAS
					</motion.p>
					<button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
						<span>Ver mas →</span>
						<div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
					</button>
				</motion.div>
			</ImagesSlider>
			<RevealOnScroll>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-10">
					<WobbleCard
						containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
						className="">
						<div className="max-w-xs">
							<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h2>
							<p className="mt-4 text-left  text-base/6 text-neutral-200">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
								ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
						<img
							src="https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/DFWH5T33KZMG3NMVMNPK4IDIBI.jpg"
							width={500}
							height={500}
							alt="linear demo image"
							className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
						/>
					</WobbleCard>
					<WobbleCard containerClassName="col-span-1 min-h-[300px]">
						<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</WobbleCard>
					<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
						<div className="max-w-sm">
							<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</h2>
							<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
						</div>
						<img
							src="https://www.mininterior.gov.co/wp-content/uploads/2022/07/Conformacion-Comisiones-DACNARP.jpg"
							width={500}
							height={500}
							alt="linear demo image"
							className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
						/>
					</WobbleCard>
				</div>
			</RevealOnScroll>
		</>
	);
};

export default ProgramsPage;
