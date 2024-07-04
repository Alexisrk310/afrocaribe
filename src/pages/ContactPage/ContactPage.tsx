import { IFormInput } from '@/interfaces/IFormInput';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

const ContactPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute w-60 h-60 rounded-xl bg-green-300 top-40 -left-16 z-0 transform rotate-45 hidden md:block animate-fall"></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="absolute w-60 h-60 rounded-xl bg-green-300 bottom-8 right-12 transform rotate-12 hidden md:block animate-fall"></motion.div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className={cn(
					'bg-white',
					'shadow-md',
					'rounded-lg',
					'p-8',
					'max-w-4xl',
					'w-full',
					'z-20',
					'mt-10'
				)}>
				<h2
					className={cn(
						'text-4xl',
						'font-bold',
						'mb-6',
						'text-center',
						'text-green-600',
						'uppercase'
					)}>
					Contáctanos
				</h2>
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6">
						<form onSubmit={handleSubmit(onSubmit)}>
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
									{...register('name', {
										required: 'El nombre es obligatorio',
									})}
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
								/>
								{errors.name && (
									<span className="text-red-600">{errors.name.message}</span>
								)}
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
									{...register('email', {
										required: 'El correo electrónico es obligatorio',
										pattern: {
											value: /^\S+@\S+$/i,
											message: 'Correo electrónico no válido',
										},
									})}
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
								/>
								{errors.email && (
									<span className="text-red-600">{errors.email.message}</span>
								)}
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
									{...register('phone', {
										required: 'El celular es obligatorio',
										pattern: {
											value: /^\d{10}$/,
											message:
												'Número de celular no válido, debe tener 10 dígitos',
										},
									})}
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
								/>
								{errors.phone && (
									<span className="text-red-600">{errors.phone.message}</span>
								)}
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
									{...register('message', {
										required: 'El mensaje es obligatorio',
									})}
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
									)}></textarea>
								{errors.message && (
									<span className="text-red-600">{errors.message.message}</span>
								)}
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
										'bg-green-600',
										'hover:bg-green-700',
										'focus:outline-none',
										'focus:ring-2',
										'focus:ring-offset-2',
										'focus:ring-green-500',
										'w-full'
									)}>
									Enviar
								</button>
							</div>
						</form>
					</div>
					<div className="w-full md:w-1/2 flex flex-col items-center">
						{/* <h2 className={cn('text-2xl', 'font-bold', 'mb-6', 'text-center')}>
							Información
						</h2> */}
						<img
							src="logo.jpg"
							alt="Contact"
							className="w-32 h-32 mb-4 rounded-full"
						/>
						<div className="text-center">
							<p className="text-lg font-semibold">
								Dirección: Calle Falsa 123
							</p>
							<p className="text-lg font-semibold">Teléfono: 123-456-7890</p>
						</div>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-32 h-32 absolute bg-green-300 rounded-full top-40 right-4 hidden sm:block"></motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="w-32 h-32 absolute bg-green-300 rounded-full bottom-8 left-4 transform rotate-45 hidden sm:block"></motion.div>
		</div>
	);
};

export default ContactPage;
