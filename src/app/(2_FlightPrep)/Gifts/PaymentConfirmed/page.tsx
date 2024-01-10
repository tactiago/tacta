"use client"

import Link from "next/link"
import { CheckCircle2, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import H1, { h1IconClasses } from "@/components/content/h1"

import { cn, formatPriceInPtBR } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { responsiveWidth } from "@/app/page"

export default function PaymentConfirmed() {

  const searchParams = useSearchParams()

  const from = searchParams?.get('from')
  const message = searchParams?.get('message')
  const total = searchParams?.get('total')

  return (
    <div className={cn(responsiveWidth, "flex flex-col items-center my-4 px-2")}>
      <H1
        icon={<CheckCircle2 className={cn(h1IconClasses, 'text-emerald-400')} strokeWidth={1.5} />}
        subtitle="Agradeçemos de coração esse presente. Isso significa muito! T&T 💙"
      >
        Você confirmou o pagamento!
      </H1>
      <p className="mt-4 bg-secondary p-4 rounded text-center">{from} enviou {formatPriceInPtBR(Number(total))} com a mensagem &quot;{message}&quot;</p>

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