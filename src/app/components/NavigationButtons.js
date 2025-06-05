import React from 'react';
import { useRouter } from 'next/navigation';

const NavigationButtons = ({ nextLink, prevLink }) => {
    const router = useRouter();

    return (
        <div className="flex justify-between items-center mb-12">
            <div className="flex justify-start">
                <a
                    className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => router.push(prevLink)}
                >
                    <span className="sr-only"> Return </span>
                    <svg
                        className="size-5 rtl:rotate-180 transform rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-end">
                <a
                    className="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => router.push(nextLink)}
                >
                    <span className="sr-only"> Next </span>
                    <svg
                        className="size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default NavigationButtons;
