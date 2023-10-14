import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ReactElement } from "react"


type aboutCrewProps = {
  about: string
  triggerIcon?: ReactElement
}

export default function AboutCrew({ triggerIcon, about }: aboutCrewProps) {
  return (
    <Popover>
      <PopoverTrigger>{triggerIcon}</PopoverTrigger>
      <PopoverContent><p className="text-sm">{about}</p></PopoverContent>
    </Popover>
  )
}