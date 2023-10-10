import AddToCalendarButton from '@/components/addToCalendar'
import H1, { h1IconClasses } from '@/components/content/h1'
import Countdown from '@/components/countdown'
import { cn } from '@/lib/utils'
import { CalendarHeart, Map } from 'lucide-react'
import Image from 'next/image'

export const responsiveWidth = "w-screen md:w-[80vw] lg:w-[70vw]"

export default function Home() {
  return (
    <div className="">
      <div className="relative w-screen aspect-video flex justify-center">
        <Image src="/Segura.jpg" className='absolute object-cover' fill alt={"Cambio"}></Image>
        <div className={cn('absolute top-0 h-full flex items-end pb-12', responsiveWidth)}>
          <div className='flex flex-col justify-center pl-4'>
            <span className='font-semibold text-xs md:text-lg lg:text-2xl xl:text-3xl drop-shadow text-secondary leading-relaxed'>12 de maio de 2024</span>
            <h1 className={'text-4xl md:text-6xl lg:text-9xl drop-shadow text-white text-right'}>Thaís & <br></br>Tiago</h1>
          </div>
        </div>
      </div>

      <div className='flex justify-center py-8 bg-secondary'>
        <div className={cn("flex justify-center flex-col items-center gap-2 px-2", responsiveWidth)}>
          <H1
            icon={<CalendarHeart className={h1IconClasses} strokeWidth={1.5} />}
          >Faltam</H1>
          <Countdown />
          <AddToCalendarButton />
        </div>
      </div>

      <div className='flex justify-center py-8 border-t border-dashed border-secondary'>
        <div className='overflow-hidden relative w-screen flex justify-center flex-col items-center'>
          <H1
            icon={<Map className={h1IconClasses} strokeWidth={1.5} />}
            subtitle='Recanto Santa Bárbara, Rod. dos Tamoios, Km 22,5, Jambeiro - SP, 12270-000'
          >Local da Cerimônia & Festa</H1>
          <iframe
            className={cn('h-[50vh]', responsiveWidth)}
            src="https://maps.google.com/maps?hl=pt&amp;q=Recanto%20Santa%20Barbara+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
            scrolling="no"
          ></iframe>
        </div>
        <br />
      </div>
    </div >
  )
}
