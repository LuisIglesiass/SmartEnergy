'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const Header = ({ backgroundImage, title }) => {
	const router = useRouter();

	return (
		<header className="relative border-b border-gray-200 h-64 overflow-hidden">
			<div className="absolute inset-0" style={{ 
				backgroundImage: `url(${backgroundImage})`, 
				backgroundSize: '120%',
				backgroundPosition: 'center', 
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				filter: 'blur(5px)'
			}}></div>
			<div className="relative z-10">
				<div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
					<div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<h2 className="text-2xl font-bold text-white sm:text-3xl" style={{ textShadow: '0 0 1px black' }}>{title}</h2>
						</div>
						<div className="flex items-center gap-4">
							<button
								className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
								type="button"
								onClick={() => router.push('/pages/start')}
							>
								<span className="text-sm font-medium"> Home </span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="size-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</button>
							<button
								className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
								type="button"
								onClick={() => router.push('/pages/about')} 
							>
								About
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;