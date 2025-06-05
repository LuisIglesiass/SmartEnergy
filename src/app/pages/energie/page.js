"use client"
import React from 'react'; 
import { CO2Provider, useCO2Context } from '@/app/context/CO2Context';
import duscheImg from '../../../images/dusche.png';
import badenImg from '../../../images/baden.png';
import heizungImg from '../../../images/heizung.png';
import lichtImg from '../../../images/licht.png';
import energieBackground from '../../../images/energieHeader2.png';
import { useRouter } from 'next/navigation';
import Card from '../../components/Card';
import CO2Display from '../../components/CO2Display';
import NavigationButtons from '../../components/NavigationButtons';
import Header from '../../components/Header';

const Energie = () => {
    const router = useRouter();
    const { co2Value, incrementCO2, resetCO2 } = useCO2Context();

    return (
        <div>
            <Header backgroundImage={energieBackground.src} title="Energie" />
            <div className="max-w-auto mx-auto ml-12 mr-12">
                <div className="flex justify-center space-x-4">
                    <Card
                        imageSrc={duscheImg}
                        title="Duschen 10 Minuten"
                        description="Durch eine 10-minütige Dusche werden etwa 2 kg CO₂ freigesetzt."
                        onButtonClick={() => incrementCO2(2)}
                        category="Energie"
                    />
                    <Card
                        imageSrc={badenImg}
                        title="Baden 20 Minuten"
                        description="Ein 20-minütiges Bad verursacht etwa 3 kg CO₂."
                        onButtonClick={() => incrementCO2(3)}
                        category="Energie"
                    />
                    <Card
                        imageSrc={heizungImg}
                        title="Heizen auf 25°C"
                        description="Das Heizen auf 25°C verursacht etwa 290 kg CO₂ pro Monat."
                        onButtonClick={() => incrementCO2(290)}
                        category="Energie"
                    />
                    <Card
                        imageSrc={lichtImg}
                        title="Licht 1 Stunde"
                        description="Eine Stunde Licht mit einer herkömmlichen Glühbirne verursacht etwa 0,40 kg CO₂."
                        onButtonClick={() => incrementCO2(0.40)}
                        category="Energie"
                    />
                </div>
                <div className="flex justify-center items-center mt-2">
                    <CO2Display co2Value={co2Value} resetCO2={resetCO2} />
                </div>
                <NavigationButtons nextLink="/pages/mobilitaet" prevLink="/pages/start"/>
            </div>
        </div>
    );
};

export default Energie;


