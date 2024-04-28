import H1, { h1IconClasses } from "@/components/content/h1";
import { TreesIcon } from "lucide-react";
import Image from "next/image";

export default function Seats() {
  return (
    <div className='flex flex-col items-center my-4 px-2'>
      <H1
        icon={<TreesIcon className={h1IconClasses} strokeWidth={1.5} />}
        subtitle="Disposição dos bancos na Ilha do bosque"
      >
        Assentos na cerimônia
      </H1>

      <Image className="mt-4" src="/disposition_cerimony_seats.png" alt="Assentos na cerimônia" width={1000} height={1000} />
    </div>
  )
}