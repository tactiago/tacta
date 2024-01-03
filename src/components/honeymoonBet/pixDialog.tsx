import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { QrCodePix } from 'qrcode-pix';
import { CheckCircle, CircleDashed, Copy, Gift } from "lucide-react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { cn, formatPriceInPtBR } from "@/lib/utils";
import { Country } from "@/app/HoneymoonBet/page";

type pixDialogProps = {
  gambler: string
  selectedCountries: Country[]
  onConfirmMessage?: () => void
}

export default function PixDialog({ gambler, selectedCountries, onConfirmMessage = () => { } }: pixDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [wasQrCodeCopied, setWasQrCodeCopied] = useState(false)
  const [qrCodeImage, setQrCodeImage] = useState<string>("")

  const message = gambler + " - " + selectedCountries.map((country) => (country.id)).join(',')

  const total = selectedCountries.reduce((accumulator, { price }) => {
    return accumulator + price
  }, 0)

  const selectedCountriesIds = selectedCountries.map((country) => {
    return country.id
  })

  const qrCodePix = QrCodePix({
    version: '01',
    key: '43986337822', //or any PIX key
    name: 'Tiago Almeida Cardoso',
    city: 'SAO PAULO',
    message: message,
    value: total,
  });

  const router = useRouter()

  useEffect(() => {
    const fetchImage = async () => {
      const response = await qrCodePix.base64()
      setQrCodeImage(response)
    }
    fetchImage()
  }, [qrCodePix])

  function handleOpenChange(newIsDialogOpen: boolean) {
    if (!newIsDialogOpen) {
      onConfirmMessage()
    }
    setIsDialogOpen(newIsDialogOpen)
  }

  async function handlePaymentConfirmed() {
    if (gambler && selectedCountries.length) {
      await fetch('/api/HoneymoonBet', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          gambler,
          selectedCountriesIds
        })
      }).then((response) => {
        if (response.status === 200) {
          router.push(`/HoneymoonBet/PaymentConfirmed?gambler=${gambler}&selectedCountries=${selectedCountriesIds.join(',')}`)
        }
      })
    } else {
      alert("Nome do apostador ou países não selecionados.")
    }
  }



  return (
    <Dialog open={isDialogOpen} onOpenChange={(newIsDialogOpen) => handleOpenChange(newIsDialogOpen)}>
      <DialogTrigger
        onClick={() => setWasQrCodeCopied(false)}
        className="font-bold md:text-lg sm:text-lg text-sm text-white flex flex-row items-center py-2 px-4 border border-white rounded-lg w-fit h-fit bg-emerald-400 hover:bg-emerald-500 transition"
      >
        <Gift className='h-5 w-5 sm:mr-2' strokeWidth={1.5} /> <p className="hidden sm:block">Apostar</p>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[50vw] md:max-w-[35vw]">
        <DialogHeader>
          <DialogTitle>Depois do Pix, Confirme...</DialogTitle>
          <DialogDescription>
            No aplicativo do banco, você pode escanear o QR Code  ou copiar e colar
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <span className="text-emerald-600 font-semibold mb-1">{formatPriceInPtBR(total)}</span>
          <p className="text-center border rounded-lg py-1 px-2">&ldquo; {message} &rdquo;</p>
          <div className="w-40 h-40 lg:w-60 lg:h-60">
            <Image unoptimized src={qrCodeImage} height={1000} width={1000} alt="QR Code" />
          </div>
          <CopyToClipboard text={qrCodePix.payload()}
            onCopy={() => { setWasQrCodeCopied(true) }}>
            <Button className={wasQrCodeCopied ? "bg-emerald-400 hover:bg-emerald-500" : ""}>
              <Copy className="w-5 h-5 mr-2" />
              {wasQrCodeCopied ? "Copiado" : "Pix Copia e Cola"}
            </Button>
          </CopyToClipboard>
          <Button
            className={cn("mt-4 bg-emerald-400 hover:bg-emerald-500")}
            onClick={handlePaymentConfirmed}
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="text-lg">Fiz o Pix</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}