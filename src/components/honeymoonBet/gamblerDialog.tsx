import { useState } from "react";

import { Gift } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import PixDialog from "./pixDialog";
import { Country } from "@/app/(2_FlightPrep)/HoneymoonBet/page";
import Image from "next/image";
import { Progress } from "../ui/progress";

interface messageDialogProps {
  total: number
  selectedCountries: Country[]
}

export default function GamblerDialog({ total, selectedCountries }: messageDialogProps) {
  const [gambler, setGambler] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const marginBetweenCountriesLogo = selectedCountries.length >= 10 ? '6' : (
    selectedCountries.length >= 7 ? '5' : '1'
  )

  function closeDialog() {
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger
        onClick={() => { }}
        className="font-bold md:text-lg sm:text-lg text-sm text-white flex flex-row items-center py-2 px-4 border border-white rounded-lg w-fit h-fit bg-emerald-400 hover:bg-emerald-500 transition"
      >
        <Gift className='h-5 w-5 mr-1 sm:mr-2' strokeWidth={1.5} /> <p className="">Prosseguir</p>
      </DialogTrigger>

      <DialogContent >
        <DialogHeader>
          <Progress value={33} className="w-full my-2" />
          <DialogTitle>Confirme sua aposta</DialogTitle>
          <DialogDescription>
            Coloque seu nome e sobrenome para registrar no Bolão
          </DialogDescription>
        </DialogHeader>

        <div>
          <div className="grid grid-flow-col-dense items-center justify-center content-center place-items-center max-w-full">
            {
              selectedCountries.map((country, index) => (
                <Image
                  key={country.id}
                  src={country.imageSrc}
                  alt={"Imagem: " + country.title}
                  width={80}
                  height={80}
                  className={`aspect-square object-cover border-emerald-400 border rounded-full transition-all hover:scale-105 -mx-${marginBetweenCountriesLogo}`}
                />
              ))
            }
          </div>
          <div className="flex items-center mt-4 gap-4">
            <label className="w-fit whitespace-nowrap" htmlFor="messageFrom">Nome:</label>
            <input
              type="text"
              className="flex-1 bg-transparent border-b placeholder:text-muted-foreground/50 placeholder:text-sm text-sm focus:border-0"
              placeholder="Seu nome e sobrenome..."
              id="messageFrom"
              value={gambler}
              onChange={(e) => setGambler(e.target.value)}
              maxLength={30}
            />
          </div>

        </div>

        <DialogFooter className="flex items-center">
          <PixDialog gambler={gambler} selectedCountries={selectedCountries} onConfirmMessage={closeDialog} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}