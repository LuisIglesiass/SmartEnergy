import React from 'react';
import Image1About from '../../../images/image1about.png';
import Image2About from '../../../images/image2about.png';
import Image3About from '../../../images/image3about.png';
import Image4About from '../../../images/image4about.png';
import Image5About from '../../../images/image5about.png';
import Image6About from '../../../images/image6about.png';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';


const About = () => {
    return (
        <div>
            <Navbar/>
            <div id='about-body'>

                <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <div className="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Über Uns</h1>
                            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                                CO2 Tracker ist eine innovative Anwendung, die Nutzern hilft, ihren CO2-Fußabdruck zu reduzieren. 
                                Unser Ziel ist es, personalisierte Empfehlungen auf der Grundlage täglicher Aktivitäten zu geben und 
                                Menschen dabei zu unterstützen, nachhaltigere Entscheidungen zu treffen. Durch eine detaillierte 
                                Aufschlüsselung der Emissionen aus verschiedenen Lebensbereichen befähigen wir die Nutzer, 
                                konkrete Maßnahmen für eine nachhaltigere Zukunft zu ergreifen.
                            </p>
                        </div>
                        <div className="w-full lg:w-8/12 flex flex-col justify-center">
                            <div className="flex justify-center">
                                <Image className="w-1/3 h-auto mr-2 cover" src={Image1About} alt="" priority width={300} height={200} />
                                <Image className="w-1/3 h-auto" src={Image2About} alt="" priority width={300} height={200} />
                            </div>
                        </div>
                    </div>
            
                    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                        <div className="w-full lg:w-5/12 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Unsere Geschichte</h1>
                            <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                                CO2 Tracker entstand aus dem Bedürfnis, Menschen ein klares Verständnis dafür zu vermitteln, 
                                wie ihre täglichen Handlungen zum Klimawandel beitragen. Wir wollten ein Werkzeug schaffen, 
                                das nicht nur aufklärt, sondern die Nutzer auch durch personalisierte Einblicke und 
                                Gamification-Elemente motiviert, damit jeder in seinem Alltag einen bedeutenden Beitrag leisten kann.
                            </p>
                        </div>
                        <div className="w-full lg:w-8/12 lg:pt-8">
                            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                    <div className="relative w-full h-64">
                                        <Image
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={Image3About}
                                            alt="Feature 1"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">CO2-Verfolgung</p>
                                </div>
                                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                    <div className="relative w-full h-64">
                                        <Image
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={Image4About}
                                            alt="Feature 2"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Tägliche Einblicke</p>
                                </div>
                                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                    <div className="relative w-full h-64">
                                        <Image
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={Image5About}
                                            alt="Feature 3"
                                            fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Empfehlungen</p>
                                </div>
                                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                    <div className="relative w-full h-64">
                                        <Image
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src={Image6About}
                                            alt="Feature 4"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Gamification</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};
export default About;