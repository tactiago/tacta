"use client"

import Clock from "./clock"

export default function Countdown() {
  const deadline = "May, 12, 2024"

  return (
    <Clock deadline={deadline} />
  )
}