"use client"

import Card, { formatPriceInPtBR } from "@/components/gifts/card";
import { Gift } from "lucide-react";
import { responsiveWidth } from "../page";
import { cn } from "@/lib/utils";
import { useState } from "react";
import PixDialog from "@/components/gifts/pixDialog";
import { Button } from "@/components/ui/button";

export default function Gifts() {
  const [total, setTotal] = useState(0)

  function sumToTotal(value: number) {
    setTotal(total + value)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
        <Gift className='h-10 w-10 mb-2' strokeWidth={1.5} />
        <h1 className='text-primary text-xl'>Presentes</h1>
        <p className="text-muted-foreground text-center px-2">Escolha tudo o gostaria de presentear os noivos</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
        <Card imageSrc="/NaAsa.jpg" title="Um avião pro fim de semana" price={1000} sumToTotal={sumToTotal} />
      </div>

      <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
        <p className="text-lg font-bold text-center mb-2">Não sabe o que dar de presente pros noivos?</p>
        <Button variant="default">Participe do Bolão</Button>
      </div>

      {
        total > 0 && (
          <div className="w-screen max-w-screen border-b sticky bottom-0 z-50 flex justify-center bg-emerald-400">
            <div className={cn('flex justify-evenly items-center py-2 px-4', responsiveWidth)}>
              <span className="text-white font-bold md:text-lg sm:text-lg text-sm">{formatPriceInPtBR(total)}</span>
              <PixDialog total={total} />
            </div>
          </div>
        )
      }
    </div>
  )
}
