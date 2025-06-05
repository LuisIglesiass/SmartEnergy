"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function App() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      router.push('/pages/start');
    }, 700);
  };

  return (
      <div>
        <section className={`bg-gray-50 ${isAnimating ? 'animate-slide-out' : ''}`}>
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Werde umweltbewusster.
                <strong className="font-extrabold text-teal-600 sm:block"> Reduziere Deinen CO2-Fußabdruck. </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Berechne Deinen persönlichen CO2-Fußabdruck und erhalte individuelle Tipps zur Reduzierung.
                Mach kleine Schritte zu einem nachhaltigeren und bewussteren Leben.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-[#acf2a1] sm:w-auto"
                  href="/pages/tutorial"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAnimating(true);
                    setTimeout(() => {
                      router.push('/pages/start');
                    }, 700);
                  }}
                >
                  Jetzt Starten
                </a>

                <a
                  className="block w-full rounded px-12 py-3 text-sm font-medium text-black shadow hover:text-teal-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                  href="/pages/about"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
export default App;