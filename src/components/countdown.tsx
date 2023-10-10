"use client"

import React, { useEffect, useState } from "react";

type CloclProps = {
  deadline: String
}

export default function Countdown() {
  const deadline = "Sun, 12 May 2024 15:00:00 GMT-0300"

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline: String) => {
    const time = Date.parse(deadline.toString()) - Date.parse(new Date().toString());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="flex flex-row gap-5 text-base lg:text-lg font-semibold">
      <div className="flex flex-col items-center"><span>{leading0(days)}</span> <p className="font-light">Dias</p></div>
      <div className="flex flex-col items-center"><span>{leading0(hours)}</span> <p className="font-light">Horas</p></div>
      <div className="flex flex-col items-center"><span>{leading0(minutes)}</span> <p className="font-light">Minutos</p></div>
      <div className="flex flex-col items-center"><span>{leading0(seconds)}</span> <p className="font-light">Segundos</p></div>
    </div>
  );
};
