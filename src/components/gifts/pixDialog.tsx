"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

import { QrCodePix } from 'qrcode-pix';
import Image from "next/image";
import { useEffect, useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

type pixDialogProps = {
  total: number
}

export default function PixDialog({ total }: pixDialogProps) {
  const qrCodePix = QrCodePix({
    version: '01',
    key: '43986337822', //or any PIX key
    name: 'Tiago Almeida Cardoso',
    city: 'SAO PAULO',
    message: 'Desejo muitas felicidades a vocês, Thais & Tiago :)',
    value: total,
  });

  const [qrCodeImage, setQrCodeImage] = useState<string>("")
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
        <Button variant="outline" className="font-bold md:text-lg sm:text-lg text-sm">Presentear <Gift className='h-5 w-5 ml-2' strokeWidth={1.5} /></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agora é só fazer o Pix</DialogTitle>
          <DialogDescription>
            <p className="w-full break-words">Você pode escanear o QR Code no app do seu banco ou fazer o Copia e Cola</p>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <div className="w-40 h-40">
            <Image unoptimized src={qrCodeImage} height={1000} width={1000} alt="QR Code" />
          </div>
          <CopyToClipboard text={qrCodePix.payload()}
            onCopy={() => { }}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        </div>
      </DialogContent>
    </Dialog>
  )
}