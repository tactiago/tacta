import { Heart } from "lucide-react";
import H1, { h1IconClasses } from "@/components/content/h1";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Crew() {
  return (
    <div className="flex flex-col items-center px-2">
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<Heart className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Conheça os comandantes do nosso voo"
        >
          Os Noivos
        </H1>
      </div>



      <Card className="overflow-hidden w-[48rem]">
        <Image
          src="/Cambio.jpg"
          className='aspect-video object-cover h-[27rem] w-[48rem] transform -scale-x-100'
          alt="Noivos"
          width={2000}
          height={2000}
        />

        <H1
          icon={<Heart className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Escolha tudo o gostaria de presentear os noivos"
        >
          Presentes
        </H1>

        <p className="text-justify">
          No cockpit da vida, prontos para decolar na aventura do casamento, Thaís e Tiago compartilham uma história que não segue rotas convencionais. Não são contos de fadas ou viagens épicas, mas sim momentos reais e hilários que deram forma à sua trajetória. O primeiro contato ocorreu durante uma "conexão" em Campina Grande para uma premiação de informática, onde Thaís, com olhos de sonhadora, e Tiago, mais tranquilo, trocaram olhares "em altitudes" diferentes. O "check-in" do romance foi feito na mesa de uma pizzaria, após uma "reorganização de assentos" para aproximar amigos.
          Uma paraibana direto de João Pessoa e um paulista de São José dos Campos, , mostrando que a ponte aérea do coração é eficiente e que corações dispostos se atraem.Mesmo com suas peculiaridades, a sintonia entre eles só ganhou mais altitude. Como uma aeronave em voo constante, a história deles foi se desenrolando ao longo dos anos, tornando-se um conjunto harmonioso que, quase 10 anos depois, se resume em uma frase: "tudo a bordo dessa jornada única."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4 place-content-center max-w-sm sm:max-w-full md:max-w-3xl lg:max-w-4xl">
          <div className="flex justify-center border-r">
            <h1 className="text-lg font-bold text-destructive">Thaís</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-lg font-bold text-primary">Tiago</h1>
          </div>
        </div>

      </Card>
    </div >
  )
}