import { Heart } from "lucide-react";
import H1, { h1IconClasses } from "@/components/content/h1";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Crew() {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Heart className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Conheça os comandantes do nosso voo"
        >
          Os Noivos
        </H1>
      </div>



      <Card className="overflow-hidden">
        <Image
          src="/Cambio.jpg"
          className='aspect-video object-cover h-[27rem] w-[48rem] transform -scale-x-100'
          alt="Noivos"
          width={2000}
          height={2000}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 place-content-center max-w-sm sm:max-w-full md:max-w-3xl lg:max-w-4xl">
          <div className="flex justify-center border-r">
            <h1 className="text-lg font-bold text-destructive">Thaís</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-lg font-bold text-primary">Tiago</h1>
          </div>
        </div>

      </Card>
    </div >
  )
}