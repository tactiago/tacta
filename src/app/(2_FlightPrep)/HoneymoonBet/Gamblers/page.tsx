"use client"

import React, { useEffect, useState } from 'react';
import { Flag } from 'lucide-react';
import Image from 'next/image';
import { countryList } from '../countries';
import H1, { h1IconClasses } from '@/components/content/h1';
import { Bet } from '@prisma/client';
import { formatCreatedDateToPtBr, generateDistanceToNowText } from '@/lib/utils';

export const revalidate = 5;
export const dynamic = 'force-dynamic';

export default function Gamblers() {
  const [gamblers, setGamblers] = useState<Bet[]>([]);

  useEffect(() => {
    const fetchGamblers = async () => {
      const response = await fetch('/api/Gamblers');
      const fetchedGamblers = await response.json()
      setGamblers(fetchedGamblers);
    };

    fetchGamblers();

    const intervalId = setInterval(() => {
      fetchGamblers();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className='flex flex-col items-center my-4 px-2'>
      <H1
        icon={<Flag className={h1IconClasses} strokeWidth={1.5} />}
        subtitle={`Confira todas as apostas registradas no Bolão da Lua de Mel`}
      >
        Apostas
      </H1>
      <ul className='mt-4'>
        {gamblers && gamblers.map((bet) => (
          <li key={bet.id} className={'border my-2 rounded-lg p-2 ' + (generateDistanceToNowText(new Date(bet.createdAt)) === "há menos de um minuto" ? "bg-emerald-200" : "")}>
            <div className="flex items-center justify-center content-center place-items-center max-w-full gap-2 overflow-hidden">
              {
                bet.country.map((betCountry) => {
                  return <Image
                    key={betCountry}
                    src={countryList.find((e) => betCountry === e.id)?.imageSrc || ""}
                    alt={"Imagem: " + betCountry}
                    width={80}
                    height={80}
                    className={`aspect-square object-cover border-emerald-400 border rounded-full transition-all hover:scale-105`}
                  />
                })
              }
            </div>
            <div className='flex items-center gap-2 mt-2'>
              <b>{bet.author}</b> em {" "}
              {formatCreatedDateToPtBr(new Date(bet.createdAt))} {" "}
              ({generateDistanceToNowText(new Date(bet.createdAt))}) apostou em: {" "}
              {bet.country.join(', ')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}