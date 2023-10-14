"use client"

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Info } from "lucide-react";

import blueDress from "../../../public/icons/blue-dress.svg"
import redDress from "../../../public/icons/red-dress.svg"
import blueShirtFolded from "../../../public/icons/blue-shirt-folded.svg"
import redShirtFolded from "../../../public/icons/red-shirt-folded.svg"
import AboutCrew from "./about";

export type CrewCardProps = {
  gender: "male" | "female"
  side: "his" | "her"
  role: "parent" | "padrinho"
  name: string
  photoUrl: string
  instagramUsername: string
  about: string
}

export default function CrewCard({ gender, side, role, name, photoUrl, instagramUsername, about }: CrewCardProps) {
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
    <Image src={(side === "his" ? blueShirtFolded : redShirtFolded)} alt="shirtFolded" className={`w-44 h-44 absolute bottom-2 left-20 opacity-5 -z-10`} />
    :
    <Image src={(side === "his" ? blueDress : redDress)} alt="dress" className={`w-40 h-40 absolute bottom-2 right-20 opacity-5 -z-10`} />
  )

  const photoImage = (
    <Image className="object-cover h-auto w-40" src={photoUrl} width={320} height={320} alt={"Foto " + responsability} />
  )

  return (
    <Card className="aspect-video flex overflow-hidden justify-between bg-transparent">
      {gender === "female" && photoImage}
      <CardHeader className="p-3 relative flex-1">
        <CardTitle className={`text-lg text-${alignDirection}`}>{name}</CardTitle>
        <CardDescription className={`text-sm text-${alignDirection} flex flex-col items-${itemsDirection} justify-between h-full`}>
          <p>{description}</p>
          <div className="flex items-center gap-4 w-full justify-between">
            <a href={"https://www.instagram.com/" + instagramUsername} className={`text-${sideColor} z-10`} target="_blank">
              <Instagram className={`w-7 h-7 text-${sideColor} `} />
            </a>
            <AboutCrew about={about} triggerIcon={<Info className={`w-7 h-7 text-${sideColor}`} />} />
          </div>
        </CardDescription>
        {genderIcon}
      </CardHeader>
      {gender === "male" && photoImage}
    </Card>
  )
}