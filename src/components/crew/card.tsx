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
  const opositeAlignDirection = (gender === "male" ? "right" : "left")
  const itemsDirection = (gender === "male" ? "start" : "end")
  const sideColor = (side === "his" ? "primary" : "destructive")

  const genderIcon = (gender === "male" ?
    <Image src={(side === "his" ? blueShirtFolded : redShirtFolded)} alt="shirtFolded" className={`w-44 h-44 sm:w-52 sm:h-52 absolute bottom-2 left-1/3 sm:left-1/2 opacity-5 -z-10`} />
    :
    <Image src={(side === "his" ? blueDress : redDress)} alt="dress" className={`w-40 h-40 sm:w-48 sm:h-48 absolute bottom-0 right-1/3 sm:right-1/2 opacity-5 -z-10`} />
  )

  const photoImage = (
    <Image className="object-cover h-auto w-40" src={photoUrl} width={320} height={320} alt={"Foto " + responsability} />
  )

  const CompleteCrewCard = (
    <Card className="aspect-video flex overflow-hidden justify-between bg-transparent relative">
      {gender === "female" && photoImage}
      <CardHeader className="p-3 flex-1 items-center justify-center w-full relative">
        <CardTitle className={`text-lg text-${alignDirection} w-full`}>{name}</CardTitle>
        <CardDescription className={`text-sm text-${alignDirection} flex flex-col items-${itemsDirection} justify-between h-full w-full`}>
          <p className={`text-${sideColor}`}>{description}</p>
          <p className="w-full">{about}</p>
        </CardDescription>
        {genderIcon}
      </CardHeader>
      {gender === "male" && photoImage}
      {instagramUsername && (
        <span className={`z-10 absolute m-2 ${opositeAlignDirection}-1`}>
          <Instagram className={`w-7 h-7 text-${sideColor} drop-shadow-white`} />
        </span>
      )}

    </Card>
  )

  const wrapper = instagramUsername ? (
    <a href={"https://www.instagram.com/" + instagramUsername} className="w-full" target="_blank" >
      {CompleteCrewCard}
    </a>
  ) : (
    CompleteCrewCard
  )

  return (
    wrapper
  )
}