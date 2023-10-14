import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { CalendarClock, CalendarHeart, CheckSquare, Flag, Gift, Heart, Home, MenuIcon, Ratio, SearchCheck, Send, Shirt, Ticket, UserCheck, Users } from "lucide-react"

export default function Menu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger><MenuIcon className="text-primary drop-shadow-white" /></MenubarTrigger>
        <MenubarContent>
          <a href="/">
            <MenubarItem>
              <Home className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Inicial</span></MenubarShortcut>
            </MenubarItem>
          </a>

          <MenubarSeparator />

          <MenubarItem disabled>
            <b className="font-bold text-primary">Nossa Tripulação</b>
          </MenubarItem>
          <a href="/WorkInProgress">
            <MenubarItem>
              <Heart className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Os Noivos</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/Crew">
            <MenubarItem>
              <Users className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Pais e Padrinhos</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <Send className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Mensagens</span></MenubarShortcut>
            </MenubarItem>
          </a>

          <MenubarSeparator />

          <MenubarItem disabled>
            <b className="font-bold text-primary">Preparação Pré-Voo</b>
          </MenubarItem>
          <a href="/WorkInProgress">
            <MenubarItem>
              <SearchCheck className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Indicações</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/Gifts">
            <MenubarItem>
              <Gift className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Presentes</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/HoneymoonBet">
            <MenubarItem>
              <Flag className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Bolão Lua de Mel</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <CheckSquare className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Confirme sua Presença</span></MenubarShortcut>
            </MenubarItem>
          </a>

          <MenubarSeparator />

          <MenubarItem disabled>
            <b className="font-bold text-primary">Dia do Voo</b>
          </MenubarItem>
          <a href="/WhenAndWhere">
            <MenubarItem>
              <CalendarHeart className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Quando e Onde</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <Shirt className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">O que vestir</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <CalendarClock className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Cronograma</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <Ticket className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Assentos na Cerimônia</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <Ratio className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Mesas na Recepção</span></MenubarShortcut>
            </MenubarItem>
          </a>
          <a href="/WorkInProgress">
            <MenubarItem>
              <UserCheck className='h-5 w-5 text-primary' strokeWidth={1.5} /><MenubarShortcut><span className="font-semibold text-sm">Fornecedores</span></MenubarShortcut>
            </MenubarItem>
          </a>

        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}