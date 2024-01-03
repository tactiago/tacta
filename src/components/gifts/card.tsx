"use client"

import { formatPriceInPtBR } from "@/lib/utils"
import { CheckCircle, CircleDashed } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type cardProps = {
  imageSrc: string
  title: string
  price: number
  selected?: boolean
  sumToTotal: (value: number) => void
}

export default function CountryCard({ imageSrc, title, price, selected = false, sumToTotal }: cardProps) {
  const [isSelected, setIsSelected] = useState(selected)

  function handleSelectGiftCard() {
    setIsSelected(!isSelected)

    sumToTotal(price * (isSelected ? -1 : 1))
  }

  return (
    <div
      aria-selected={isSelected}
      className="border rounded-lg border-dashed hover:border-primary overflow-hidden w-60 max-w-60 h-auto flex flex-col aria-selected:border-emerald-400 aria-selected:border-solid aria-selected:bg-emerald-50"
      onClick={() => handleSelectGiftCard()}
    >
      <div className="relative overflow-hidden h-60 w-60 flex flex-col">
        <Image src={imageSrc} alt={"Imagem: " + title} fill sizes="200" className="w-60 aspect-square object-cover transition-all hover:scale-105" />
        {
          isSelected ? <CheckCircle className="w-5 h-5 z-10 text-emerald-400 mt-2 ml-2 drop-shadow-sm" strokeWidth={2} /> : <CircleDashed className="w-5 h-5 z-10 text-white mt-2 ml-2 drop-shadow-sm" strokeWidth={2} />
        }
      </div>
      <div className="flex flex-col items-center flex-1 justify-between py-2">
        <p className="w-full text-center leading-relaxed break-normal font-thin px-2 pb-1">{title}</p>
        <span className="text-emerald-600 font-semibold text-lg border-t border-muted w-full border-dashed text-center pt-2">
          {formatPriceInPtBR(price)}
        </span>
      </div>
    </div>
  )
}