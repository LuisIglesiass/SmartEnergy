"use client"
import React from 'react';
import resultHeader from '../../../images/resultHeader.png';
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Mobilitaet = () => {
    const router = useRouter();
    const { co2Value} = useCO2Context();

    const gesamtCO2Ausstoss = co2Value;
    const anzahlTage = 7;
    const taeglicherDurchschnitt = gesamtCO2Ausstoss / anzahlTage;
    const durchschnittAndereNutzer = 400;
    const vergleichMitAnderen = gesamtCO2Ausstoss - durchschnittAndereNutzer;

    return (
		<div>
			<header 
                className="relative border-b border-gray-200 h-64 overflow-hidden"
            >
                <div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundImage: `url(${resultHeader.src})`, 
                        backgroundSize: '120%',
                        backgroundPosition: 'center', 
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        filter: 'blur(5px)'
                    }}
                ></div>
                <div className="relative z-10">
                    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl" style={{ textShadow: '0 0 1px black' }}>Dein CO2-Fußabdruck</h2>

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
			<div className="mx-auto max-w-screen-xl px-6 py-10 sm:px-6 sm:py-12 lg:px-8">
			<div className="mx-auto max-w-3xl text-center">
			<h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Zusammenfassende Indikatoren</h2>
		
			<p className="mt-4 text-gray-500 sm:text-xl">
				Ergebnisse deines kumulierten CO2-Verbrauchs
			</p>
			</div>
		
			<dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
			<div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
				<dt className="order-last text-lg font-medium text-gray-500">Gesamter CO2-Ausstoß</dt>
		
				<dd className="text-4xl font-extrabold text-blue-600 md:text-4xl mb-6">{gesamtCO2Ausstoss} kg CO₂</dd>
			</div>
		
			<div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
				<dt className="order-last text-lg font-medium text-gray-500">Täglicher Durchschnitt der Emissionen</dt>
		
				<dd className="text-4xl font-extrabold text-blue-600 md:text-4xl mb-6">{taeglicherDurchschnitt.toFixed(2)} kg CO₂</dd>
			</div>
			<div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
				<dt className="order-last text-lg font-medium text-gray-500">Vergleich mit ähnlichen Nutzern</dt>
		
				<dd className="text-4xl font-extrabold text-blue-600 md:text-4xl mb-6">
					{vergleichMitAnderen > 0 ? `+${vergleichMitAnderen.toFixed(2)}` : vergleichMitAnderen.toFixed(2)} kg CO₂
				</dd>
			</div>
			</dl>
		</div>
	  </div>
    );
};

export default Mobilitaet;


