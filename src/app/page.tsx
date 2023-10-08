import AddToCalendarButton from '@/components/addToCalendar'
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
            <span className='font-semibold font-mono text-sm md:text-lg lg:text-2xl drop-shadow'>12/05/2024</span>
            <h1 className='text-primary font-bold text-3xl md:text-6xl lg:text-8xl drop-shadow'>Thaís & <br></br>Tiago</h1>
          </div>
        </div>
      </div>

      <div className='flex justify-center py-8'>
        <div className={cn("flex justify-center flex-col items-center gap-2", responsiveWidth)}>
          <CalendarHeart className='h-10 w-10' strokeWidth={1.5} />
          <h1 className='text-primary text-xl'>Faltam</h1>
          <Countdown />
          <AddToCalendarButton />
        </div>
      </div>

      <div className='flex justify-center py-8 border-t border-dashed border-secondary'>
        <div className='overflow-hidden relative w-screen flex justify-center flex-col items-center'>
          <Map className='h-10 w-10 mb-2' strokeWidth={1.5} />
          <h1 className='text-primary text-xl mb-2'>Local da Cerimônia & Festa</h1>
          <p className='text-center text-sm my-2'>Recanto Santa Bárbara, Rod. dos Tamoios, Km 22,5, Jambeiro - SP, 12270-000</p>
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
