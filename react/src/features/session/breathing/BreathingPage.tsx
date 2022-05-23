import anime from 'animejs';
import { useEffect, useMemo } from 'react';
import SessionHeaderComponent from '../common/SessionHeaderComponent';

export default function BreathingPage() {
  const gradientColor = useMemo(() => ({
    current1: '#FFFFFF',
    current2: '#FFFFFF',
    inhale1: '#5433FF',
    inhale2: '#20BDFF',
    hold1: '#3BB98C',
    hold2: '#76FFA9',
    exhale1: '#FF5F6D',
    exhale2: '#FFC371',
  }), []);

  const breathingUnit = {
    repetition: 3,
    inhale: 3,
    holdInhale: 3,
    exhale: 3,
    holdExhale: 3,
  };

  const ob = {
    time: 4,
  };

  useEffect(() => {
    anime({
      targets: ob,
      time: 0,
      duration: 4000,
      easing: 'linear',
      update: (value) => {
        const doc = document.getElementById('time');
        if (doc?.innerHTML !== undefined) {
          doc.innerHTML = JSON.stringify(
            Math.round(parseInt(value.animations[0].currentValue, 10)),
          );
        }
      },
    });

    anime({
      targets: gradientColor,
      current1: [
        { value: gradientColor.inhale1, duration: 0 },
        { value: gradientColor.exhale1, duration: 200, delay: 3000 },
      ],
      current2: [
        { value: gradientColor.inhale2, duration: 0 },
        { value: gradientColor.exhale2, duration: 200, delay: 3000 },
      ],
      easing: 'easeOutQuad',
      update: (value) => {
        const val = value.animations[0].currentValue;
        const val2 = value.animations[1].currentValue;
        const el = document.getElementById('bg');
        if (el?.style !== undefined) {
          el.style.backgroundImage = `linear-gradient(180deg, ${val}, ${val2}`;
        }
      },
    });
  }, []);

  return (
    <div
      className="h-screen w-screen flex"
    >
      <div
        id="bg"
        className="absolute h-full w-full bg-cover bg-center transition"
        style={{ backgroundImage: `linear-gradient(to right, ${gradientColor.current1}, ${gradientColor.current2})` }}
      />
      <div className="h-full w-full z-[1] p-8 flex flex-col items-center justify-between">
        <SessionHeaderComponent />
        <div
          id="ball"
          className="w-48 h-48 rounded-full flex items-center justify-center"
        >
          <p id="time" className="text-black font-light font-poppins text-7xl">{ob.time}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-white font-semibold font-poppins text-4xl">Exhale</h2>
          <div className="h-8" />
          <h3 className="text-white font-poppins text-2xl">Next: Hold (4)</h3>
        </div>
      </div>
    </div>
  );
}
