"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import { QrCodePix } from 'qrcode-pix';
import { CheckCircle, Copy, Gift } from "lucide-react";
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
import { formatPriceInPtBR } from "./card";

type pixDialogProps = {
  total: number
  message?: string
}

export default function PixDialog({ total, message }: pixDialogProps) {
  const [wasCopied, setWasCopied] = useState(false)
  const [qrCodeImage, setQrCodeImage] = useState<string>("")

  message = message || 'Desejo muitas felicidades a vocês, Thais & Tiago :)'

  const qrCodePix = QrCodePix({
    version: '01',
    key: '43986337822', //or any PIX key
    name: 'Tiago Almeida Cardoso',
    city: 'SAO PAULO',
    message: message,
    value: total,
  });

  useEffect(() => {
    const fetchImage = async () => {
      const response = await qrCodePix.base64()
      setQrCodeImage(response)
    }
    fetchImage()
  }, [qrCodePix])

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => { setWasCopied(false) }}
        className="font-bold md:text-lg sm:text-lg text-sm text-white flex flex-row items-center py-2 px-4 border border-white rounded-lg w-fit h-fit hover:bg-secondary/10 transition"
      >
        <Gift className='h-5 w-5 sm:mr-2' strokeWidth={1.5} /> <p className="hidden sm:block">Presentear</p>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-[50vw] md:max-w-[35vw]">
        <DialogHeader>
          <DialogTitle>Agora é só fazer o Pix</DialogTitle>
          <DialogDescription>
            <p>No aplicativo do banco, você pode escanear o QR Code  ou copiar e colar</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <span className="text-emerald-600 font-semibold mb-1">{formatPriceInPtBR(total)}</span>
          <p className="text-center border rounded-lg py-1 px-2">&ldquo; {message} &rdquo;</p>
          <div className="w-40 h-40 lg:w-60 lg:h-60">
            <Image unoptimized src={qrCodeImage} height={1000} width={1000} alt="QR Code" />
          </div>
          <CopyToClipboard text={qrCodePix.payload()}
            onCopy={() => { setWasCopied(true) }}>
            <Button className={wasCopied ? "bg-emerald-400 hover:bg-emerald-500" : ""}>
              {wasCopied ? <CheckCircle className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
              {wasCopied ? "Copiado" : "Pix Copia e Cola"}
            </Button>
          </CopyToClipboard>
        </div>
      </DialogContent>
    </Dialog>
  )
}