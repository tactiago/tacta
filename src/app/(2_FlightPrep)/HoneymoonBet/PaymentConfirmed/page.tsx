"use client"

import Link from "next/link"
import { CheckCircle2, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import H1, { h1IconClasses } from "@/components/content/h1"

import { cn } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { responsiveWidth } from "@/app/page"
import { Progress } from "@/components/ui/progress"

export default function PaymentConfirmed() {

  const searchParams = useSearchParams()

  const gambler = searchParams?.get('gambler')
  const selectedCountries = searchParams?.get('selectedCountries')

  return (
    <div className={cn(responsiveWidth, "flex flex-col items-center my-4 px-2")}>
      <Progress value={100} className="w-full my-4 bg-emerald-500" />
      <H1
        icon={<CheckCircle2 className={cn(h1IconClasses, 'text-emerald-400')} strokeWidth={1.5} />}
        subtitle="Aposta registrada. Ansioso pra saber? Só no dia!"
      >
        Você confirmou o pagamento!
      </H1>
      <p className="mt-4 bg-secondary p-4 rounded text-center">{gambler} apostou nos países: {selectedCountries}</p>

      <div className="flex flex-1 mt-8 items-center">


        <Button variant="outline">
          <Link href="/" className="flex items-center gap-2 justify-center">
            <Home className="text-muted-foreground" strokeWidth={1.5} /> Volte ao Início
          </Link>
        </Button>
      </div>
    </div>
  )
}