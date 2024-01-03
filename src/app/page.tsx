import AddToCalendar from '@/components/addToCalendar'
import H1, { h1IconClasses } from '@/components/content/h1'
import Countdown from '@/components/countdown'
import { cn } from '@/lib/utils'
import { CalendarHeart, Gift, Map, Users } from 'lucide-react'
import Image from 'next/image'
import { addHours } from 'date-fns'
import { weddingDay, weddingLocation } from './WhenAndWhere/details'
import Link from 'next/link'

export const responsiveWidth = "w-screen md:w-[70vw] lg:w-[60vw]"

export default function Home() {
  return (
    <div className="grid grid-cols-1">
      <div className="relative w-screen aspect-video flex justify-center">
        <Image src="/Segura.jpg" className='absolute object-cover max-w-[100vw]' fill alt={"Cambio"} priority={false}></Image>
        <div className={cn('absolute top-0 h-full flex items-end pb-12', responsiveWidth)}>
          <div className='flex flex-col justify-center pl-4'>
            <span className='font-semibold text-xs md:text-lg lg:text-2xl xl:text-3xl drop-shadow text-secondary leading-relaxed'>12 de maio de 2024</span>
            <h1 className={'text-4xl md:text-6xl lg:text-9xl drop-shadow text-white text-right'}>Thaís & <br></br>Tiago</h1>
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-secondary py-8'>
        <div className={cn("flex justify-center flex-col items-center gap-2 px-2", responsiveWidth)}>
          <H1
            icon={<CalendarHeart className={h1IconClasses} strokeWidth={1.5} />}
          >Faltam</H1>
          <Countdown />
          <AddToCalendar
            title="Casamento Thaís e Tiago"
            location={weddingLocation}
            startDate={weddingDay}
            endDate={addHours(weddingDay, 6)}
            description="Chegue com antecedência para esse voo inesquecível. Mais informações em: tacta-one.vercel.app"
          />
        </div>
      </div>

      <div className='flex justify-center py-8 border-t border-dashed border-secondary'>
        <div className='overflow-hidden relative w-screen flex justify-center flex-col items-center'>
          <H1
            icon={<Map className={h1IconClasses} strokeWidth={1.5} />}
            subtitle={weddingLocation}
          >Local da Cerimônia & Festa</H1>
          <iframe
            className={cn('h-[50vh] px-2', responsiveWidth)}
            src="https://maps.google.com/maps?hl=pt&amp;q=Recanto%20Santa%20Barbara+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      <div className='py-8 px-2 border border-dashed flex flex-col gap-2 items-center justify-center'>
        <Link href="/Gifts" className={cn('flex items-center justify-center flex-col hover:bg-secondary/10 rounded-lg border p-4 mx-4', responsiveWidth)}>
          <H1
            icon={<Gift className={h1IconClasses} strokeWidth={1.5} />}
            subtitle="Escolha tudo o gostaria de presentear os noivos"
          >
            Presentes
          </H1>
        </Link>

        <Link href="/Crew" className={cn('flex items-center justify-center flex-col hover:bg-secondary/10 rounded-lg border p-4 mx-4', responsiveWidth)}>
          <H1
            icon={<Users className={h1IconClasses} strokeWidth={1.5} />}
            subtitle="Conheça a tripulação do nosso voo"
          >
            Pais e Padrinhos
          </H1>
        </Link>

        <Link href="/WhenAndWhere" className={cn('flex items-center justify-center flex-col hover:bg-secondary/10 rounded-lg border p-4 mx-4', responsiveWidth)}>
          <H1
            icon={<CalendarHeart className={h1IconClasses} strokeWidth={1.5} />}
            subtitle="Para garantir seu lugar a bordo, reserve a data de embarque em sua agenda."
          >
            Quando e Onde
          </H1>
        </Link>
      </div>
    </div >
  )
}
