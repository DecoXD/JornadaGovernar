/* eslint-disable */
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  dia: number;
  hor: number;
  min: number;
  seg: number;
}

export const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft  => {
    const difference = +new Date('2024-05-26T20:00:00') - +new Date();
    let timeLeft: TimeLeft  = {
      dia: 0,
      hor: 0,
      min: 0,
      seg: 0,
    };

    if (difference > 0) {
      timeLeft = {
        dia: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hor: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        seg: Math.floor((difference / 1000) % 60),
      };
      
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft >(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpar o timer
    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key] && timeLeft[key]!=0) {
      return;
    }

    timerComponents.push(
      <p key={key} className=' items-center justify-center bg-[#f2eee9]
      text-[#6c3e04] font-bold flex flex-col text-xl  shadow-lg p-2 shadow-black/30 '>

        <span>{timeLeft[key]< 10 ? '0'+timeLeft[key] : timeLeft[key]}</span>
        <span>{key}{' '}</span> 
      </p>
    );
  });

  return (
    <div className='flex gap-4'>
      {timerComponents.length ? timerComponents : <span>Tempo esgotado!</span>}
    </div>
  );
};

export default Countdown;
