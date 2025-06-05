"use client"
import React from 'react';
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
import CO2Display from '../../components/CO2Display';
import kochenImage from '../../../images/kochenImage.png';
import veganeImage from '../../../images/veganeImage.png';
import fleischImage from '../../../images/fleischImage.png';
import mikrowelleImage from '../../../images/mikrowelleImage.png';
import ernaehrungHeader from '../../../images/foodHeader2.png';
import NavigationButtons from '../../components/NavigationButtons';

const Ernaehrung = () => {
    const router = useRouter();
    const { co2Value, incrementCO2, resetCO2 } = useCO2Context();

    return (
        <div>
            <header className="relative border-b border-gray-200 h-64 overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: `url(${ernaehrungHeader.src})`, backgroundSize: '120%', backgroundPosition: 'center', backgroundColor: 'rgba(255, 255, 255, 0.5)', filter: 'blur(5px)' }}></div>
                <div className="relative z-10">
                    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                            <h2 className="text-2xl font-bold text-white sm:text-3xl" style={{ textShadow: '0 0 1px black' }}>Ernährung</h2>
                            <div className="flex items-center gap-4">
                                <button className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring" type="button" onClick={() => router.push('/pages/start')}>
                                    <span className="text-sm font-medium"> Home </span>
                                </button>
                                <button className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring" type="button" onClick={() => router.push('/pages/about')}>
                                    About
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="max-w-auto mx-auto ml-12 mr-12">
                <div className="flex justify-center space-x-4">
                    <Card
                        imageSrc={kochenImage}
                        title="Kochen 20 Minuten"
                        description="20 Minuten Kochen setzen etwa 0,5 kg CO₂ frei."
                        onButtonClick={() => incrementCO2(0.5)}
                        category="Ernährung"
                    />
                    <Card
                        imageSrc={veganeImage}
                        title="Vegane Mahlzeit 600 kcal"
                        description="Eine vegane Mahlzeit von 600 kcal setzt etwa 0,3 kg CO₂ frei."
                        onButtonClick={() => incrementCO2(0.3)}
                        category="Ernährung"
                    />
                    <Card
                        imageSrc={fleischImage}
                        title="Mahlzeit mit Fleisch 600 kcal"
                        description="Eine Mahlzeit mit Fleisch von 600 kcal setzt etwa 2,5 kg CO₂ frei."
                        onButtonClick={() => incrementCO2(2.5)}
                        category="Ernährung"
                    />
                    <Card
                        imageSrc={mikrowelleImage}
                        title="Aufwärmen Mikrowelle"
                        description="Das Erwärmen einer Mahlzeit in der Mikrowelle für 5 Minuten setzt etwa 0,05 kg CO₂ frei."
                        onButtonClick={() => incrementCO2(0.05)}
                        category="Ernährung"
                    />
                </div>
                <div id="co2-component" className="flex justify-center items-center mt-2">
                    <CO2Display co2Value={co2Value} resetCO2={resetCO2} />
                </div>
                <NavigationButtons nextLink="/pages/konsum" prevLink="/pages/mobilitaet" />
            </div>
        </div>
    );
};

export default Ernaehrung;


