import anime from 'animejs';
import { useEffect, useMemo, useRef } from 'react';
import SessionHeaderComponent from '../common/SessionHeaderComponent';

export default function BreathingPage() {
  const ob = {
    time: 4,
  };

  const gradientColor = useMemo(() => ({
    inhale: '#E0BBE4',
    inhale2: '#957DAD',
    exhale: ['#FEC8D8', '#FFDFD3'],
  }), []);

  const currentGradient = useRef(gradientColor.inhale);

  useEffect(() => {
    anime({
      targets: ob,
      time: 0,
      duration: 4000,
      easing: 'linear',
      update: (value) => {
        const doc = document.getElementById('time');
        if (doc?.innerHTML !== undefined) {
          doc.innerHTML = JSON.stringify(Math.ceil(parseInt(value.animations[0].currentValue, 10)));
        }
      },
    });

    anime({
      targets: gradientColor,
      inhale: gradientColor.exhale[0],
      inhale2: gradientColor.exhale[1],
      duration: 1000,
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
        style={{ backgroundImage: `linear-gradient(to right, ${currentGradient.current[0]}, ${currentGradient.current[1]})` }}
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
