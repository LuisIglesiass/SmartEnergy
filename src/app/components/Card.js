import React from 'react';
import Image from 'next/image';

const Card = ({ imageSrc, title, description, buttonText, onButtonClick, category }) => {
    return (
        <div className="group relative bg-black mt-6 w-1/4 h-80 flex flex-col">
            <a href="#">
                <Image
                    alt=""
                    src={imageSrc}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="absolute inset-0 h-full w-full opacity-75 transition-opacity group-hover:opacity-50"
                />
            </a>
            <div className="relative flex-grow p-2 sm:p-3 lg:p-4 flex flex-col justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">{category}</p>
                    <p className="text-sm font-bold text-white sm:text-lg">{title}</p>
                    <div className="mt-6 sm:mt-8 lg:mt-10">
                        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">{description}</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center mt-2">
                    <a
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
                        onClick={onButtonClick}
                    >
                        Hinzufügen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
