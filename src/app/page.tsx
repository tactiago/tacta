import Countdown from '@/components/countdown'
import { cn } from '@/lib/utils'
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

      <div className='flex justify-center my-8'>
        <div className={cn("flex justify-center flex-col items-center", responsiveWidth)}>
          <h1 className='text-primary text-xl mb-2'>Faltam</h1>
          <Countdown />
        </div>

      </div>
    </div >
  )
}
