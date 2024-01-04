"use client"

import { CalendarHeart, CheckCircle, Copy, Map, PartyPopperIcon, TheaterIcon } from "lucide-react";

import H1, { h1IconClasses } from "@/components/content/h1";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"

import { responsiveWidth } from "@/app/page";
import { cn } from "@/lib/utils";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/countdown";
import AddToCalendar from "@/components/addToCalendar";
import Image from "next/image";
import { addHours } from "date-fns";
import { weddingDay, weddingLocation } from "./details";

export default function WhenAndWhere() {
  const [wasCopied, setWasCopied] = useState(false)

  const rangeToWeddingDay = {
    from: new Date(),
    to: weddingDay
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center pt-4">
        <H1
          icon={<CalendarHeart className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Voo confirmado para 12 de Maio de 2024.<br />Para garantir seu lugar a bordo, reserve a data de embarque em sua agenda."
        >
          Dia e Hora
        </H1>

        <div className="flex flex-col items-center gap-2 my-2">
          <Calendar
            mode="range"
            selected={rangeToWeddingDay}
            className="rounded-md border"
            defaultMonth={weddingDay}
            disabled
          />
          <Countdown />
          <AddToCalendar
            title="Casamento Thaís e Tiago"
            location={weddingLocation}
            startDate={weddingDay}
            endDate={addHours(weddingDay, 6)}
            description="Chegue com antecedência para esse voo inesquecível. Mais informações em: tacta-one.vercel.app"
          />
        </div>
      </div>

      <div className={cn(responsiveWidth, "flex flex-col items-center border-t pt-4")}>
        <H1
          icon={
            <div className="flex gap-8">
              <TheaterIcon className={h1IconClasses} strokeWidth={1.5} />
              <PartyPopperIcon className={h1IconClasses} strokeWidth={1.5} />
            </div>
          }
          subtitle="A escolha desse destino foi amor à primeira vista<br />A cerimônia e a festa serão no mesmo local."
        >
          Cerimônia e Festa
        </H1>

        <div className="flex flex-col items-center gap-2 mt-0">
          <p className="text-primary text-lg">12 de Maio de 2024</p>
          <span className="font-bold text-lg">15:00</span>
          <div className="flex flex-col items-center bg-destructive/10 rounded-lg p-2">
            <p className="text-destructive underline underline-offset-2">Atenção Tripulação</p>
            <p className="text-muted-foreground text-center">Em primeiro lugar, contamos com sua pontualidade. Nosso voo para esse dia inesquecível tem horário marcado.<br />Por isso, chegue com antecedência.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center border-t pt-4">
        <H1
          icon={<Map className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="A escolha desse destino foi amor à primeira vista<br />A cerimônia e a festa serão no mesmo local."
        >
          Local
        </H1>

        <div className="flex flex-col items-center gap-2">
          <CopyToClipboard text={weddingLocation}
            onCopy={() => { setWasCopied(true) }}>
            <Button variant="outline" className={cn("h-auto text-left mx-2", (wasCopied ? " border-emerald-400" : ""))}>
              {weddingLocation}
              {wasCopied ? <CheckCircle className="w-5 h-5 ml-2 text-emerald-400" /> : <Copy className="w-5 h-5 ml-2" />}
            </Button>
          </CopyToClipboard>

          <iframe
            className={cn('h-[50vh] px-2', responsiveWidth)}
            src="https://maps.google.com/maps?hl=pt&amp;q=Recanto%20Santa%20Barbara+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
            scrolling="no"
          ></iframe>

          <Image
            src="https://www.rsbarbara.com.br/explorer/galeria/7_800x600.jpg"
            className='aspect-video object-cover'
            alt="Recanto Santa Bárbara"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}