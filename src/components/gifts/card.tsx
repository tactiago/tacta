"use client"

import { Check, CheckCircle, CircleDashed } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type cardProps = {
  imageSrc: string
  title: string
  price: number
  selected?: boolean
  sumToTotal: (value: number) => void
}

export function formatPriceInPtBR(price: number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}

export default function Card({ imageSrc, title, price, selected = false, sumToTotal }: cardProps) {
  const [isSelected, setIsSelected] = useState(selected)

  function handleSelectGiftCard() {
    setIsSelected(!isSelected)

    sumToTotal(price * (isSelected ? -1 : 1))
  }

  return (
    <div
      aria-selected={isSelected}
      className="border h-fit rounded-lg hover:border-primary overflow-hidden aria-selected:border-emerald-400"
      onClick={() => handleSelectGiftCard()}
    >
      <div className="relative overflow-hidden h-40  w-40 max-w-40 flex flex-col">
        <Image src={imageSrc} alt={"Imagem: " + title} fill className="w-40 aspect-square object-cover transition-all hover:scale-105" />
        {
          isSelected ? <CheckCircle className="w-5 h-5 z-10 text-emerald-400 mt-2 ml-2 drop-shadow-sm" strokeWidth={2} /> : <CircleDashed className="w-5 h-5 z-10 text-white mt-2 ml-2 drop-shadow-sm" strokeWidth={2} />
        }
      </div>
      <div className="p-2 gap-2 flex flex-col items-center">
        <p className="w-36 text-center leading-relaxed break-normal">{title}</p>
        <span className="text-muted-foreground">{formatPriceInPtBR(price)}</span>
      </div>
    </div>
  )
}