import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CalendarHeart, Gift, Home, Map, MenuIcon, Users } from "lucide-react"

export default function Menu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger><MenuIcon /></MenubarTrigger>
        <MenubarContent>
          <a href="/">
            <MenubarItem>
              Inicial <MenubarShortcut><Home className='h-5 w-5' strokeWidth={1.5} /></MenubarShortcut>
            </MenubarItem>
          </a>
          <MenubarSeparator />
          <MenubarItem>
            Calendário <MenubarShortcut><CalendarHeart className='h-5 w-5' strokeWidth={1.5} /></MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Local <MenubarShortcut><Map className='h-5 w-5' strokeWidth={1.5} /></MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <a href="./Gifts">
            <MenubarItem>
              Presentes <MenubarShortcut><Gift className='h-5 w-5' strokeWidth={1.5} /></MenubarShortcut>
            </MenubarItem>
          </a>
          <MenubarItem>
            Padrinhos <MenubarShortcut><Users className='h-5 w-5' strokeWidth={1.5} /></MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}