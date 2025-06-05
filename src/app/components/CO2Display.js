import React from 'react';

const CO2Display = ({ co2Value, resetCO2 }) => {
    return (
        <div className="mx-auto max-w-xs px-2 py-4 sm:px-4 sm:py-2 lg:px-4">
            <dl className="mt-4 grid grid-cols-1 gap-2 sm:mt-6 justify-center">
                <div className="flex flex-col rounded-lg border border-gray-100 px-3 py-4 text-center">
                    <dt className="order-last text-sm font-medium text-gray-500 mt-2">Gesamter CO2-Ausstoß</dt>
                    <dd className="text-2xl font-extrabold text-blue-600 md:text-3xl">
                        {co2Value} kg CO₂
                    </dd>
                </div>
            </dl>
            <div className="flex justify-center">
                <a
                    className="inline-block rounded bg-[#f36d6d] px-4 py-3 text-xs font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#f36d6d] mt-2"
                    id="resetButton"
                    href="#"
                    onClick={resetCO2}
                >
                    Zurücksetzen
                </a>
            </div>
        </div>
    );
};

export default CO2Display; 