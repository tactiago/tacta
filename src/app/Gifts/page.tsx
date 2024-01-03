"use client"

import Card from "@/components/gifts/card";
import { Gift, ShoppingBag } from "lucide-react";
import { responsiveWidth } from "../page";
import { cn, formatPriceInPtBR } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import H1, { h1IconClasses } from "@/components/content/h1";
import { giftsList } from "./gifts";
import MessageDialog from "@/components/gifts/messageDialog";
import Link from "next/link";

export default function Gifts() {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)

  function sumToTotal(value: number) {
    setTotal(total + value)
    setQuantity((state) => {
      return state + (value > 0 ? 1 : -1)
    })
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
                key={index}
              />
            )
          })
        }
      </div>

      <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
        <p className="text-lg font-bold text-center mb-2">Onde os noivos vão na Lua de Mel?</p>
        <Button variant="default"><Link href="/HoneymoonBet">Participe do Bolão</Link></Button>
      </div>

      {
        total > 0 && (
          <div className="w-screen max-w-screen sticky bottom-0 z-50 flex justify-center bg-emerald-400 h-fit sm:py-3 py-2">
            <div className={cn('flex justify-evenly items-center gap-x-6 h-auto', responsiveWidth)}>
              <span className="text-white md:text-lg sm:text-lg text-base flex items-end sm:items-center">
                {formatPriceInPtBR(total)} <ShoppingBag className="mx-2 mb-1" strokeWidth={1.5} />{quantity}
              </span>
              <div className="flex items-center justify-center">
                <MessageDialog total={total} />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
