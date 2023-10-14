"use client"

import { CalendarHeart, CheckCircle, Copy, Map } from "lucide-react";

import H1, { h1IconClasses } from "@/components/content/h1";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"

import { responsiveWidth } from "../page";
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
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-4">
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

        <Tabs defaultValue="cerimony" className={cn(responsiveWidth, "border-b py-4 px-2 rounded-xl ")}>
          <TabsList className="w-full h-auto mb-2 px-2">
            <TabsTrigger className="w-full text-base sm:text-lg" value="cerimony">
              Cerimônia
            </TabsTrigger>
            <TabsTrigger className="w-full text-base sm:text-lg" value="party">
              Festa
            </TabsTrigger>
          </TabsList>
          <TabsContent className="flex flex-col items-center gap-2 mt-0" value="cerimony">
            <p className="text-primary text-lg">12 de Maio de 2024</p>
            <span className="font-bold text-lg">15:30</span>
            <p className="text-destructive underline underline-offset-2">Atenção Tripulação</p>
            <p className="text-muted-foreground text-center">Em primeiro lugar, contamos com sua pontualidade. Nosso voo para esse dia inesquecível tem horário marcado.<br />Por isso, chegue com antecedência.</p>

          </TabsContent>
          <TabsContent className="flex flex-col items-center gap-2 mt-0" value="party">
            <p className="text-primary text-lg">12 de Maio de 2024</p>
            <span className="font-bold text-lg">16:30</span>
            <p className="text-destructive">Pontualmente</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col items-center my-4 gap-2">
        <H1
          icon={<Map className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="A escolha desse destino foi amor à primeira vista<br />A cerimônia e a festa serão no mesmo local."
        >
          Local
        </H1>

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
  )
}