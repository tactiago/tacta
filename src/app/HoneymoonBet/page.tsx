"use client"

import { useState } from "react";
import { Flag, Info, ShoppingBag } from "lucide-react";

import { responsiveWidth } from "../page";

import { cn, formatPriceInPtBR } from "@/lib/utils";
import H1, { h1IconClasses } from "@/components/content/h1";

import { countryList } from "./countries";
import GamblerDialog from "@/components/honeymoonBet/gamblerDialog";
import CountryCard from "@/components/honeymoonBet/card";

export type Country = {
  id: string
  title: string
  imageSrc: string
  price: number
}

export default function Gifts() {
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([])

  const quantity = selectedCountries.length
  const total = selectedCountries.reduce((accumulator, { price }) => {
    return accumulator + price
  }, 0)

  function handleChangeCountrySelection(country: Country, isSelected: boolean) {
    if (isSelected) {
      addCountryToSelection(country)
    } else if (isSelected === false) {
      deleteCountryToSelection(country)
    }
  }

  function addCountryToSelection(countryToAdd: Country) {
    setSelectedCountries([...selectedCountries, countryToAdd])
  }

  function deleteCountryToSelection(countryToDelete: Country) {
    const countriesWithoutDeletedOne = selectedCountries.filter((country) => {
      return country !== countryToDelete
    })

    setSelectedCountries(countriesWithoutDeletedOne)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Flag className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Pra onde o Tiago vai levar a Thaís?"
        >
          Bolão da Lua de Mel
        </H1>
      </div>

      <div className="flex flex-row justify-center items-center mb-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
        <Info strokeWidth={1.5} />
        <ul className="list-disc px-6">
          <li>Aposte para onde o casal irá passar a Lua de Mel!</li>
          <li>Essa grande surpresa será revelada durante a festa.</li>
          <li>Quem acertar receberá um prêmio!</li>
          <li>Coloque seu nome na barra verde abaixo.</li>
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {
          countryList.map((country) => {
            return (
              <CountryCard
                country={country}
                handleChangeCountrySelection={handleChangeCountrySelection}
                key={country.id} />
            )
          })
        }
      </div>

      {
        total > 0 && (
          <div className="w-screen max-w-screen sticky bottom-0 z-50 flex justify-center bg-emerald-400 h-fit sm:py-3 py-2">
            <div className={cn('flex justify-evenly items-center gap-x-6 h-auto', responsiveWidth)}>
              <span className="text-white md:text-lg sm:text-lg text-base flex items-end sm:items-center">
                {formatPriceInPtBR(total)} <ShoppingBag className="mx-1" strokeWidth={1.5} />{quantity}
              </span>
              <div className="flex items-center justify-center row-span-2">
                <GamblerDialog total={total} selectedCountries={selectedCountries} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
