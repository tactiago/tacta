import H1, { h1IconClasses } from '@/components/content/h1';
import prisma from '../../../lib/prisma';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { TrophyIcon } from 'lucide-react';

const honneymoonLocationId = "ARG"

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

  function formatCreatedDateToPtBr(date: Date) {
    return format(
      date,
      "d' de 'LLLL' de 'yyyy', às 'H:mm'h'",
      { locale: ptBR },
    )
  }

  function generateDistanceToNowText(date: Date) {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    })
  }

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