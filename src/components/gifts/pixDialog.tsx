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

type pixDialogProps = {
  total: number
}

export default function PixDialog({ total }: pixDialogProps) {
  const [wasCopied, setWasCopied] = useState(false)
  const [qrCodeImage, setQrCodeImage] = useState<string>("")

  const qrCodePix = QrCodePix({
    version: '01',
    key: '43986337822', //or any PIX key
    name: 'Tiago Almeida Cardoso',
    city: 'SAO PAULO',
    message: 'Desejo muitas felicidades a vocês, Thais & Tiago :)',
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
      <DialogTrigger>
        <Button variant="outline" className="font-bold md:text-lg sm:text-lg text-sm text-white" onClick={() => { setWasCopied(false) }}>Presentear <Gift className='h-5 w-5 ml-2' strokeWidth={1.5} /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agora é só fazer o Pix</DialogTitle>
          <DialogDescription>
            <p>No aplicativo do banco, você pode escanear o QR Code  ou copiar e colar</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
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