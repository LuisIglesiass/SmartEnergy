"use client"
import React from 'react';
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
import CO2Display from '../../components/CO2Display';
import autoImage from '../../../images/autoImage.png';
import flugImage from '../../../images/flugImage.png';
import zugImage from '../../../images/zugImage.png';
import schiffImage from '../../../images/schiffImage.png';
import mobilitaetHeader from '../../../images/mobilitaetHeader.png';
import NavigationButtons from '../../components/NavigationButtons';
import Header from '../../components/Header';

const Mobilitaet = () => {
    const { co2Value, incrementCO2, resetCO2 } = useCO2Context();
    const router = useRouter();

    return (
        <div>
            <Header backgroundImage={mobilitaetHeader.src} title="Mobilität" />
            <div className="max-w-auto mx-auto ml-12 mr-12">
                <div className="flex justify-center space-x-4">
                    <Card
                        imageSrc={autoImage}
                        fill
                        title="Autofahrt Verbrenner 20 Minuten"
                        description="Eine 20-minütige Autofahrt mit einem Verbrenner verursacht etwa 3 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(3)}
                        category="Mobilität"
                    />
                    <Card
                        imageSrc={flugImage}
                        title="Flug 1 Stunde"
                        description="Ein einstündiger Flug verursacht etwa 250 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(250)}
                        category="Mobilität"
                    />
                    <Card
                        imageSrc={zugImage}
                        title="Zugfahrt 20 Minuten"
                        description="Eine 20-minütige Zugfahrt verursacht etwa 0,4 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(0.40)}
                        category="Mobilität"
                    />
                    <Card
                        imageSrc={schiffImage}
                        title="Schiffahrt 1 Stunde"
                        description="Eine einstündige Schifffahrt verursacht etwa 115 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(115)}
                        category="Mobilität"
                    />
                </div>
                <div id="co2-component" className="flex justify-center items-center mt-2">
                    <CO2Display co2Value={co2Value} resetCO2={resetCO2} />
                </div>
                <NavigationButtons nextLink="/pages/ernaehrung" prevLink="/pages/energie" />
            </div>
        </div>
    );
};

export default Mobilitaet;


