"use client"; // Asegúrate de que este componente sea un Client Component

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../images/logoSmartEnergy.png';

const Navbar = () => {
    const router = useRouter();

    return (
        <header className="bg-white mt-8">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-8 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="/pages/start">
                            <span className="sr-only">Home</span>
                            <Image src={logo} alt="Logo" width={70} height={70} />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-4 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/pages/about"> About </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/pages/start"> Home </a>
                                </li>
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="/pages/result"> Dashboard </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;