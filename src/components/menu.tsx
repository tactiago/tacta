import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CalendarClock, CalendarHeart, Flag, Gift, Heart, Home, MenuIcon, Ratio, SearchCheck, Send, Shirt, Ticket, Users, UtensilsIcon } from "lucide-react"
import Link from "next/link"

export default function Menu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger><MenuIcon className="text-primary drop-shadow-white" /></MenubarTrigger>
        <MenubarContent>
          <Link href="/">
            <MenubarItem>
              <Home className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Inicial</span></MenubarShortcut>
            </MenubarItem>
          </Link>

          <MenubarSeparator />

          <MenubarItem disabled>
            <b className="font-bold text-primary">Nossa Tripulação</b>
          </MenubarItem>
          <Link href="/Captains" >
            <MenubarItem>
              <Heart className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Os Noivos</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/Crew">
            <MenubarItem>
              <Users className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Pais e Padrinhos</span></MenubarShortcut>
            </MenubarItem>
          </Link>

          <MenubarSeparator />

          <MenubarItem disabled>
            <b className="font-bold text-primary">Preparação Pré-Voo</b>
          </MenubarItem>
          <Link href="/WorkInProgress">
            <MenubarItem>
              <SearchCheck className='h-5 w-5 text-secondary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm text-secondary text-secondary">Indicações</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/Messages">
            <MenubarItem>
              <Send className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Mensagens</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/Gifts">
            <MenubarItem>
              <Gift className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Presentes</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/HoneymoonBet">
            <MenubarItem>
              <Flag className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Bolão Lua de Mel</span></MenubarShortcut>
            </MenubarItem>
          </Link>

          <MenubarSeparator />

          <MenubarItem disabled>
            <b className="font-bold text-primary">Dia do Voo</b>
          </MenubarItem>
          <Link href="/WhenAndWhere">
            <MenubarItem>
              <CalendarHeart className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Quando e Onde</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/DressCode">
            <MenubarItem>
              <Shirt className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">O que vestir</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/WorkInProgress">
            <MenubarItem>
              <CalendarClock className='h-5 w-5 text-secondary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm text-secondary">Cronograma</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/WorkInProgress">
            <MenubarItem>
              <Ticket className='h-5 w-5 text-secondary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm text-secondary">Assentos na Cerimônia</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/Tables">
            <MenubarItem>
              <Ratio className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Mesas na Recepção</span></MenubarShortcut>
            </MenubarItem>
          </Link>
          <Link href="/Menu">
            <MenubarItem>
              <UtensilsIcon className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Cardápio</span></MenubarShortcut>
            </MenubarItem>
          </Link>

        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}