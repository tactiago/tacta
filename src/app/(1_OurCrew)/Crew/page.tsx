import { Users } from "lucide-react";
import H1, { h1IconClasses } from "@/components/content/h1";
import CrewCard from "@/components/crew/card";
import { crew } from "@/app/(1_OurCrew)/Crew/crew";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Crew() {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Users className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Conheça a tripulação do nosso voo"
        >
          Pais e Padrinhos
        </H1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 place-content-center max-w-sm sm:max-w-full md:max-w-3xl lg:max-w-4xl">
        {
          crew.map((person, index) => {
            return (
              <CrewCard
                gender={person.gender}
                name={person.name}
                role={person.role}
                side={person.side}
                photoUrl={person.photoUrl}
                instagramUsername={person.instagramUsername}
                about={person.about}
                key={index}
              />
            )
          })
        }

        <div className=" col-span-1 sm:col-span-2 border-muted border-[1px] border-dashed h-0"></div>
      </div>

      <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
        <p className="text-lg font-bold text-center mb-2">Confira as mensagem que já deixaram para os noivos!</p>
        <Button variant="default"><Link href="/Messages">Ler as mensagem</Link></Button>
      </div>
    </div>
  )
}