'use client';
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
	children: ReactNode;
	showRadialGradient?: boolean;
}

const AuroraBackground = ({
	className,
	children,
	showRadialGradient = true,
	...props
}: AuroraBackgroundProps) => {
	return (
		<main>
			<div
				className={cn(
					'relative flex flex-col  h-[80vh] items-center justify-center bg-green-100 dark:bg-zinc-900  text-slate-950 transition-bg',
					className
				)}
				{...props}>
				<div className="absolute inset-0 overflow-hidden">
					<div
						//   I'm sorry but this is what peak developer performance looks like // trigger warning
						className={cn(
							`
           [--white-gradient:repeating-linear-gradient(100deg,#FF6347_0%,#FF6347_7%,transparent_10%,transparent_12%,#FF6347_16%)]
  [--dark-gradient:repeating-linear-gradient(100deg,#32CD32_0%,#32CD32_7%,transparent_10%,transparent_12%,#32CD32_16%)]
  [--aurora:repeating-linear-gradient(100deg,#1E90FF_10%,#9370DB_15%,#1E90FF_20%,#9370DB_25%,#1E90FF_30%)]

  [background-image:var(--white-gradient),var(--aurora)]
  dark:[background-image:var(--dark-gradient),var(--aurora)]
  [background-size:300%,_200%]
  [background-position:50%_50%,50%_50%]
  filter blur-[10px] invert dark:invert-0
  after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
  after:dark:[background-image:var(--dark-gradient),var(--aurora)]
  after:[background-size:200%,_100%]
  after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
  pointer-events-none
  absolute -inset-[10px] opacity-50 will-change-transform`,

							showRadialGradient &&
								`[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
						)}></div>
				</div>
				{children}
			</div>
		</main>
	);
};

export default AuroraBackground;
