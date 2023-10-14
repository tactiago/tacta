"use client"

import CountryCard, { formatPriceInPtBR } from "@/components/gifts/card";
import { Flag, Info, ShoppingBag } from "lucide-react";
import { responsiveWidth } from "../page";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PixDialog from "@/components/gifts/pixDialog";
import H1, { h1IconClasses } from "@/components/content/h1";
import { countryList } from "./countries";

export default function Gifts() {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [name, setName] = useState("")

  function sumToTotal(value: number) {
    setTotal(total + value)
    setQuantity(quantity + (value > 0 ? 1 : -1))
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
          countryList.map((country, index) => {
            return (
              <CountryCard
                imageSrc={country.imageSrc}
                title={country.title}
                price={country.price}
                sumToTotal={sumToTotal}
                key={index} />
            )
          })
        }
      </div>

      {
        total > 0 && (
          <div className="w-screen max-w-screen border-b sticky bottom-0 z-50 flex justify-center bg-emerald-400 h-fit pb-2">
            <div className={cn('grid grid-cols-3 gap-2 my-2 px-4 h-auto ', responsiveWidth)}>
              <span className="text-white font-bold col-span-2 md:text-lg sm:text-lg text-sm flex items-end sm:items-center ml-2">
                {formatPriceInPtBR(total)} <ShoppingBag className="mx-1" strokeWidth={1.5} />{quantity}
              </span>
              <div className="flex items-center justify-center row-span-2">
                <PixDialog total={total} message={name} />
              </div>
              <input
                type="text"
                className="bg-transparent col-span-2 border-b placeholder:text-muted placeholder:text-sm text-sm text-white px-2 sm:mr-4"
                placeholder="Seu nome e sobrenome..."
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}
