import H1, { h1IconClasses } from '@/components/content/h1';
import prisma from '@/lib/prisma';
import { TrophyIcon } from 'lucide-react';
import { formatCreatedDateToPtBr, generateDistanceToNowText } from '@/lib/utils';

const honneymoonLocationId = "CHI"

export default async function Winners() {

  const winners = await prisma.bet.findMany({
    where: {
      country: {
        has: honneymoonLocationId
      }
    },
    distinct: 'author',
    orderBy: {
      createdAt: 'asc'
    }
  });

  return (
    <div className='flex flex-col items-center my-4 px-2'>
      <H1
        icon={<TrophyIcon className={h1IconClasses} strokeWidth={1.5} />}
        subtitle={`Lista das pessoas que apostaram em ${honneymoonLocationId}`}
      >
        Vencedores da aposta
      </H1>
      <ul className='mt-4'>
        {winners.map((winnerBet) => (
          <li key={winnerBet.id}>
            {winnerBet.author} em {" "}
            {formatCreatedDateToPtBr(winnerBet.createdAt)} {" "}
            ({generateDistanceToNowText(winnerBet.createdAt)}) apostou em: {" "}
            {winnerBet.country.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}
