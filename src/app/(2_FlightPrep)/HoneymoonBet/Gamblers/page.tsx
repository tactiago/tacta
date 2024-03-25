import H1, { h1IconClasses } from '@/components/content/h1';
import prisma from '@/lib/prisma';
import { Flag } from 'lucide-react';
import { formatCreatedDateToPtBr, generateDistanceToNowText } from '@/lib/utils';
import { countryList } from '../countries';
import Image from 'next/image';

export default async function Gamblers() {

  const gamblers = await prisma.bet.findMany({
    orderBy: {
      author: 'asc'
    }
  });

  return (
    <div className='flex flex-col items-center my-4 px-2'>
      <H1
        icon={<Flag className={h1IconClasses} strokeWidth={1.5} />}
        subtitle={`Lista das pessoas que apostaram`}
      >
        Apostadores
      </H1>
      <ul className='mt-4'>
        {gamblers.map((bet) => (
          <li key={bet.id} className='border my-2 rounded-lg p-2'>

            <div className="flex items-center justify-center content-center place-items-center max-w-full gap-2">
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
            <div className='flex items-center gap-2'>
              <b>{bet.author}</b> em {" "}
              {formatCreatedDateToPtBr(bet.createdAt)} {" "}
              ({generateDistanceToNowText(bet.createdAt)}) apostou em: {" "}
              {bet.country.join(', ')}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
