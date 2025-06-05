"use client"
import React from 'react';
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
import CO2Display from '../../components/CO2Display';
import jeansImage from '../../../images/jeansImage.png';
import tshirtImage from '../../../images/tshirtImage.png';
import pulloverImage from '../../../images/pulloverImage.png';
import accesoireImage from '../../../images/accesoireImage.png';
import konsumHeader from '../../../images/konsumHeader.png';
import NavigationButtons from '../../components/NavigationButtons';
import Header from '../../components/Header';

const Konsum = () => {
    const router = useRouter();
    const { co2Value, incrementCO2, resetCO2 } = useCO2Context();

    return (
        <div>
            <Header backgroundImage={konsumHeader.src} title="Konsum" />
            <div className="max-w-auto mx-auto ml-12 mr-12">
                <div className="flex justify-center space-x-4">
                    <Card
                        imageSrc={jeansImage}
                        title="Neue Jeans"
                        description="Der Kauf neuer Jeans verursacht etwa 33 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(33)}
                        category="Konsum"
                    />
                    <Card
                        imageSrc={tshirtImage}
                        title="Neues T-Shirt"
                        description="Der Kauf eines neuen T-Shirts verursacht etwa 2,5 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(2.5)}
                        category="Konsum"
                    />
                    <Card
                        imageSrc={pulloverImage}
                        title="Neuer Pullover"
                        description="Der Kauf eines neuen Pullovers verursacht etwa 5 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(5)}
                        category="Konsum"
                    />
                    <Card
                        imageSrc={accesoireImage}
                        title="Neues Accesoire"
                        description="Der Kauf eines neuen Accessoires verursacht etwa 1 kg CO₂."
                        
                        onButtonClick={() => incrementCO2(1)}
                        category="Konsum"
                    />
                </div>
                <div id="co2-component" className="flex justify-center items-center mt-2">
                    <CO2Display co2Value={co2Value} resetCO2={resetCO2} />
                </div>
                <NavigationButtons nextLink="/pages/result" prevLink="/pages/ernaehrung" />
            </div>
        </div>
    );
};

export default Konsum;



