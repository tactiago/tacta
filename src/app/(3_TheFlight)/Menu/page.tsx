"use client"

import H1, { h1IconClasses } from "@/components/content/h1";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CakeSliceIcon, CroissantIcon, CupSodaIcon, MartiniIcon, PartyPopperIcon, SandwichIcon, SoupIcon, Utensils } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const sections = [
  {
    id: "appetizers",
    title: "Entradas",
    icon: <SandwichIcon className="text-primary mr-2" />
  },
  {
    id: "roasts",
    title: "Assados",
    icon: <CroissantIcon className="text-primary mr-2" />
  },
  {
    id: "main",
    title: "Principal",
    icon: <SoupIcon className="text-primary mr-2" />
  },
  {
    id: "dance_floor",
    title: "Na Balada",
    icon: <PartyPopperIcon className="text-primary mr-2" />
  },
  {
    id: "desserts",
    title: "Sobremesa",
    icon: <CakeSliceIcon className="text-primary mr-2" />
  },
  {
    id: "special_drinks",
    title: "Drinks Especiais",
    icon: <MartiniIcon className="text-primary mr-2" />
  },
  {
    id: "drinks",
    title: "Bebidas",
    icon: <CupSodaIcon className="text-primary mr-2" />
  },
]

export default function Menu() {
  const searchParams = useSearchParams()
  const section = searchParams?.get('section')

  useEffect(() => {
    if (!section) {
      return
    }

    document.querySelector(`#${section}`)?.scrollIntoView({ block: "center" })

  }, [section])

  function handleSectionSelection(section: string) {
    document.querySelector(`#${section}`)?.scrollIntoView({ block: "center" })
  }

  return (
    <div className='flex flex-col items-center px-2 gap-y-6'>
      <div className="fixed border-b border-t w-screen px-4 flex justify-center">
        <ScrollArea className="fixed w-[90vw]">
          <header className="flex justify-center gap-2 backdrop-blur-sm py-4">
            {
              sections.map((section) => (
                <Button
                  variant={"outline"}
                  key={section.id}
                  onClick={() => handleSectionSelection(section.id)}
                  className="bg-white hover:bg-slate-100 text-nowrap"
                >
                  {section.icon}
                  {section.title}
                </Button>
              ))
            }
          </header>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </div>


      <section id="appetizers" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw] mt-24">
        <H1
          icon={<SandwichIcon className={h1IconClasses} strokeWidth={1.5} />}
        >
          Entradas
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li>Cestinha Com Tartar De Salmão</li>
          <li>Dadinho De Tapioca Com Queijo Coalho E Geléia De Pimenta</li>
          <li>Espetinho De Tomate Cereja Com Muzzarela De Búfala Ao Pesto E Manjericão</li>
          <li>Quadradinho De Queijo Coalho Com Abacaxi</li>
          <li>Trouxinha De Frango Com Catupiry</li>
          <li>Wrap De Roastbeef Com Cream Cheese E Alface</li>
        </ul>
      </section>

      <section id="roasts" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw]">
        <H1
          icon={<CroissantIcon className={h1IconClasses} strokeWidth={1.5} />}
        >
          Assados
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li>Charutinho De Carne Seca</li>
          <li>Mini Kafta Com Alecrim E Molho De Iogurte E Hortelã</li>
          <li>Mini Quiche De Alho Poró</li>
          <li>Pizzinhas Margueritas</li>
        </ul>
      </section>

      <section id="main" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw]">
        <H1
          icon={<SoupIcon className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Menu Degustação"
        >
          Principal
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li>Baião de Dois com Queijo Coalho</li>
          <li>Costela Suína na cerveja preta com molho barbecue e batata rústica</li>
        </ul>
      </section>

      <section id="dance_floor" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw]">
        <H1
          icon={<PartyPopperIcon className={h1IconClasses} strokeWidth={1.5} />}
        >
          Na Balada
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li>Mini X-Burguer</li>
        </ul>
      </section>

      <section id="desserts" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw]">
        <H1
          icon={<CakeSliceIcon className={h1IconClasses} strokeWidth={1.5} />}
        >
          Sobremesa
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li>Bem Casado</li>
          <li>Bolo com Doce de Leite e Abacaxi</li>
          <li>Brigadeiro Meio Amargo</li>
          <li>Mini Rocambole</li>
          <li>Ouriço de Coco</li>
          <li>Uvinha</li>
        </ul>
      </section>

      <section id="special_drinks" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw]">
        <H1
          icon={<MartiniIcon className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Com e sem álcool"
        >
          Drinks Especiais
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li><b className="text-primary">Do Noivo: </b>Abacaxi, Xarope de Lichia, Hortelã e Erva Doce</li>
          <li><b className="text-destructive">Da Noiva: </b>Limão siciliano, Limão Taiti e Limão cravo com manjericão e Rapadura</li>
          <li><b>Do Amostrado: </b>Limão Siliciano, Tangerina, Hortelã com pitada de canela</li>
          <li><b>Do Apaixonado: </b>Morango, Kiwi, Hortelã e Xarope de Rosas</li>
          <li><b>Do Atraente: </b>Frutas Vermelhas Aromatizado com Cravo</li>
          <li><b>Do Atrevido: </b>Tangerina com pimenta</li>
          <li><b>Do Audacioso: </b>Maçã verde com canela</li>
          <li>Caipirinha tradicional com as frutas disponíveis</li>
        </ul>
        <p className="mt-4 text-sm">Os drinks podem ser feitos com</p>
        <ul className="list-disc mt-4 space-y-2">
          <li>Cachaça Artesanal Engenho do Coronel</li>
          <li>Saquê Azuma Kirin</li>
          <li>Vodka Smirnoff</li>
          <li>Açúcar</li>
          <li>Adoçante</li>
        </ul>

      </section>

      <section id="drinks" className="flex flex-col w-full border-b pb-4 items-center max-w-[80vw]">
        <H1
          icon={<CupSodaIcon className={h1IconClasses} strokeWidth={1.5} />}
        >
          Bebidas
        </H1>
        <ul className="list-disc mt-4 space-y-2">
          <li>Água Mineral com Gás</li>
          <li>Água Mineral sem Gás</li>
          <li>Coca Cola Zero</li>
          <li>Coca Cola</li>
          <li>Guaraná Antártica Zero</li>
          <li>Guaraná Antártica</li>
          <li>Suco de Abacaxi com Hortelã</li>
          <li>Suco de Laranja</li>
        </ul>
      </section>

    </div>
  )
}