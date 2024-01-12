"use client"

import Card from "@/components/gifts/card";
import { ArrowDownRightIcon, ArrowUpRightIcon, Gift, ShoppingBag } from "lucide-react";
import { cn, formatPriceInPtBR } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import H1, { h1IconClasses } from "@/components/content/h1";
import { giftsList } from "@/app/(2_FlightPrep)/Gifts/gifts";
import MessageDialog from "@/components/gifts/messageDialog";
import Link from "next/link";
import { responsiveWidth } from "@/app/page";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";

export default function Gifts() {
  const [total, setTotal] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const [currentGiftsList, setCurrentGiftsList] = useState(giftsList)

  function sumToTotal(value: number) {
    setTotal(total + value)
    setQuantity((state) => {
      return state + (value > 0 ? 1 : -1)
    })
  }

  async function orderGiftsByPrice(order: "desc" | "asc") {
    let giftsListToOrder = [...currentGiftsList]

    if (order === "asc") {
      giftsListToOrder.sort((a, b) => {
        return a.price - b.price
      })
    }
    else if (order === "desc") {
      giftsListToOrder.sort((a, b) => {
        return b.price - a.price
      })
    }

    setCurrentGiftsList(giftsListToOrder)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Gift className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Escolha tudo o que gostaria de presentear os noivos"
        >
          Presentes
        </H1>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="border mb-4">Ordenar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => orderGiftsByPrice("desc")}>
              Primeiro o mais caro <MenubarShortcut><ArrowUpRightIcon /></MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => orderGiftsByPrice("asc")}>
              Primeiro o mais barato <MenubarShortcut><ArrowDownRightIcon /></MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        {
          currentGiftsList.map((gift) => {
            return (
              <Card
                imageSrc={gift.imageSrc}
                title={gift.title}
                price={gift.price}
                sumToTotal={sumToTotal}
                key={gift.title}
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
