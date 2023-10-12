"use client"

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";

import blueDress from "../../../public/icons/blue-dress.svg"
import redDress from "../../../public/icons/red-dress.svg"
import blueShirtFolded from "../../../public/icons/blue-shirt-folded.svg"
import redShirtFolded from "../../../public/icons/red-shirt-folded.svg"

type CrewCardProps = {
  gender: "male" | "female"
  side: "his" | "her"
  role: "parent" | "padrinho"
  name: string
  photoUrl: string
  instagramUsername: string
}

export default function CrewCard({ gender, side, role, name, photoUrl, instagramUsername }: CrewCardProps) {
  const responsability = (
    gender === "male" ?
      (role === "padrinho" ? "Padrinho" : "Pai")
      :
      (role === "padrinho" ? "Madrinha" : "Mãe")
  )
  const connector = (side === "his" ? " do " : " da ")
  const engaged = (side === "his" ? "Noivo" : "Noiva")
  const description = responsability + connector + engaged

  const alignDirection = (gender === "male" ? "left" : "right")
  const itemsDirection = (gender === "male" ? "start" : "end")
  const sideColor = (side === "his" ? "primary" : "destructive")

  const genderIcon = (gender === "male" ?
    <Image src={(side === "his" ? blueShirtFolded : redShirtFolded)} alt="shirtFolded" className={`w-44 h-44 absolute bottom-2 left-16 opacity-5`} />
    :
    <Image src={(side === "his" ? blueDress : redDress)} alt="dress" className={`w-40 h-40 absolute bottom-2 right-16 opacity-5`} />
  )

  const photoImage = (
    <Image className="object-cover h-full" src={photoUrl} width={150} height={150} alt={"Foto " + responsability} />
  )

  return (
    <Card className="aspect-video flex overflow-hidden justify-between">
      {gender === "female" && photoImage}
      <CardHeader className="p-3 relative">
        <CardTitle className={`text-lg text-${alignDirection}`}>{name}</CardTitle>
        <CardDescription className={`text-sm text-${alignDirection} flex flex-col items-${itemsDirection} justify-between h-full`}>
          <p>{description}</p>
          <a href={"https://www.instagram.com/" + instagramUsername} className={`text-${sideColor}`} target="_blank">
            <Instagram className={`w-7 h-7 text-${sideColor}`} />
          </a>
        </CardDescription>
        {genderIcon}
      </CardHeader>
      {gender === "male" && photoImage}
    </Card>
  )
}