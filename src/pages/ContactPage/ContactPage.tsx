import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
('use client');

const ContactPage = ({}) => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute w-60 h-60 rounded-xl bg-purple-300 dark:bg-slate-700 top-40 -left-16 z-0 transform rotate-45 hidden md:block animate-fall"></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute w-60 h-60 rounded-xl bg-purple-300 dark:bg-slate-700 bottom-8 right-12 transform rotate-12 hidden md:block animate-fall"></motion.div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className={cn(
					'bg-white',
					'shadow-md',
					'rounded-lg',
					'p-8',
					'max-w-md',
					'w-full',
					'z-20'
				)}>
				<h2 className={cn('text-2xl', 'font-bold', 'mb-6')}>Contáctanos</h2>
				<form>
					<div className="mb-4">
						<label
							htmlFor="name"
							className={cn(
								'block',
								'text-sm',
								'font-medium',
								'text-gray-700'
							)}>
							Nombre
						</label>
						<input
							type="text"
							id="name"
							className={cn(
								'mt-1',
								'block',
								'w-full',
								'rounded-md',
								'border-gray-300',
								'shadow-sm',
								'focus:border-indigo-500',
								'focus:ring-indigo-500',
								'sm:text-sm'
							)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className={cn(
								'block',
								'text-sm',
								'font-medium',
								'text-gray-700'
							)}>
							Correo Electrónico
						</label>
						<input
							type="email"
							id="email"
							className={cn(
								'mt-1',
								'block',
								'w-full',
								'rounded-md',
								'border-gray-300',
								'shadow-sm',
								'focus:border-indigo-500',
								'focus:ring-indigo-500',
								'sm:text-sm'
							)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="phone"
							className={cn(
								'block',
								'text-sm',
								'font-medium',
								'text-gray-700'
							)}>
							Celular
						</label>
						<input
							type="tel"
							id="phone"
							className={cn(
								'mt-1',
								'block',
								'w-full',
								'rounded-md',
								'border-gray-300',
								'shadow-sm',
								'focus:border-indigo-500',
								'focus:ring-indigo-500',
								'sm:text-sm'
							)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className={cn(
								'block',
								'text-sm',
								'font-medium',
								'text-gray-700'
							)}>
							Mensaje
						</label>
						<textarea
							id="message"
							rows={4}
							className={cn(
								'mt-1',
								'block',
								'w-full',
								'rounded-md',
								'border-gray-300',
								'shadow-sm',
								'focus:border-indigo-500',
								'focus:ring-indigo-500',
								'sm:text-sm'
							)}
							required></textarea>
					</div>
					<div>
						<button
							type="submit"
							className={cn(
								'justify-center',
								'py-2',
								'px-4',
								'border',
								'border-transparent',
								'shadow-sm',
								'text-sm',
								'font-medium',
								'rounded-md',
								'text-white',
								'bg-indigo-600',
								'hover:bg-indigo-700',
								'focus:outline-none',
								'focus:ring-2',
								'focus:ring-offset-2',
								'focus:ring-indigo-500',
								'w-full'
							)}>
							Enviar
						</button>
					</div>
				</form>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-32 h-32 absolute bg-purple-300 rounded-full top-40 right-4 hidden sm:block"></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-32 h-32 absolute bg-purple-300 rounded-full bottom-8 left-4 transform rotate-45 hidden sm:block"></motion.div>
		</div>
	);
};

export default ContactPage;
