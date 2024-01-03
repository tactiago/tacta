"use client"

import { CheckCircle, CircleDashed } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Country } from "@/app/HoneymoonBet/page"
import { formatPriceInPtBR } from "@/lib/utils"

type cardProps = {
  country: Country
  selected?: boolean
  handleChangeCountrySelection: (country: Country, isSelected: boolean) => void
}

export default function CountryCard({ country, selected = false, handleChangeCountrySelection }: cardProps) {
  const [isSelected, setIsSelected] = useState(selected)

  function handleSelectGiftCard() {
    const newIsSelected = !isSelected

    setIsSelected(newIsSelected)

    handleChangeCountrySelection(country, newIsSelected)
  }

  return (
    <div
      aria-selected={isSelected}
      className="border rounded-lg border-dashed hover:border-primary overflow-hidden w-60 max-w-60 h-auto flex flex-col aria-selected:border-emerald-400 aria-selected:border-solid aria-selected:bg-emerald-50"
      onClick={() => handleSelectGiftCard()}
    >
      <div className="relative overflow-hidden h-60 w-60 flex flex-col">
        <Image src={country.imageSrc} alt={"Imagem: " + country.title} fill sizes="200" className="w-60 aspect-square object-cover transition-all hover:scale-105" />
        {
          isSelected ? <CheckCircle className="w-5 h-5 z-10 text-emerald-400 mt-2 ml-2 drop-shadow-sm" strokeWidth={2} /> : <CircleDashed className="w-5 h-5 z-10 text-white mt-2 ml-2 drop-shadow-sm" strokeWidth={2} />
        }
      </div>
      <div className="flex flex-col items-center flex-1 justify-between py-2">
        <p className="w-full text-center leading-relaxed break-normal font-thin px-2 pb-1">{country.title}</p>
        <span className="text-emerald-600 font-semibold text-lg border-t border-muted w-full border-dashed text-center pt-2">
          {formatPriceInPtBR(country.price)}
        </span>
      </div>
    </div>
  )
}