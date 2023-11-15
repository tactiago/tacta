"use client"

import Card, { formatPriceInPtBR } from "@/components/gifts/card";
import { Gift, ShoppingBag } from "lucide-react";
import { responsiveWidth } from "../page";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PixDialog from "@/components/gifts/pixDialog";
import { Button } from "@/components/ui/button";
import H1, { h1IconClasses } from "@/components/content/h1";
import { giftsList } from "./gifts";

export default function Gifts() {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [message, setMessage] = useState("")

  function sumToTotal(value: number) {
    setTotal(total + value)
    setQuantity(quantity + (value > 0 ? 1 : -1))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Gift className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Escolha tudo o gostaria de presentear os noivos"
        >
          Presentes
        </H1>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {
          giftsList.map((gift, index) => {
            return (
              <Card
                imageSrc={gift.imageSrc}
                title={gift.title}
                price={gift.price}
                sumToTotal={sumToTotal}
                key={index} />
            )
          })
        }
      </div>

      <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
        <p className="text-lg font-bold text-center mb-2">Onde os noivos vão na Lua de Mel?</p>
        <Button variant="default"><a href="/HoneymoonBet">Participe do Bolão</a></Button>
      </div>

      {
        total > 0 && (
          <div className="w-screen max-w-screen border-b sticky bottom-0 z-50 flex justify-center bg-emerald-400 h-fit pb-2">
            <div className={cn('grid grid-cols-3 gap-2 my-2 px-4 h-auto ', responsiveWidth)}>
              <span className="text-white font-bold col-span-2 md:text-lg sm:text-lg text-sm flex items-end sm:items-center ml-2">
                {formatPriceInPtBR(total)} <ShoppingBag className="mx-1" strokeWidth={1.5} />{quantity}
              </span>
              <div className="flex items-center justify-center row-span-2">
                <PixDialog total={total} message={message} />
              </div>
              <input
                type="text"
                className="bg-transparent col-span-2 border-b placeholder:text-muted placeholder:text-sm text-sm text-white px-2 sm:mr-4"
                placeholder="Mensagem pra eles..."
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}
