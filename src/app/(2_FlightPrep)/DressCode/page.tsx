import Image from "next/image";
import Link from "next/link";

import { responsiveWidth } from "@/app/page";
import H1, { h1IconClasses } from "@/components/content/h1";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import blueDress from "@/../public/icons/blue-dress.svg"
import blueShirtFolded from "@/../public/icons/blue-shirt-folded.svg"
import pinkPalette from "@/../public/dressCode/pink.png"
import bluePalette from "@/../public/dressCode/blue.png"
import grayPalette from "@/../public/dressCode/gray.png"
import Paragraph from "@/components/content/Paragraph";
import { CloudSunIcon, PaletteIcon, ShirtIcon } from "lucide-react";

export default function DressCode() {
  return (
    <>
      <div className="flex flex-col items-center my-4">
        <H1
          icon={
            <div className="flex gap-4">
              <Image src={blueDress} alt="blueDressIcon" />
              <Image src={blueShirtFolded} alt="blueshirtFoldedIcon" />
            </div>
          }
          subtitle="Decole no estilo do nosso grande dia"
        >
          O que vestir?
        </H1>

        <div className={cn("flex justify-center flex-col items-center gap-2 px-2 py-4", responsiveWidth)}>
          <Paragraph>
            É hora de decolar no estilo para o nosso grande dia, tripulação! A pista está pronta, e queremos todos a bordo com um visual incrível. Então, antes de pegarmos altitude, aqui vão algumas dicas preciosas para que todos possam curtir esse voo com estilo e conforto.
          </Paragraph>

          <div className="flex flex-col items-center w-full border-t py-4 px-2">
            <H1
              icon={<PaletteIcon className={h1IconClasses} strokeWidth={1.5} />}
              subtitle=""
            >
              Cores reservadas
            </H1>

            <div className="flex flex-col items-center w-full gap-2 border rounded px-4 py-2 mt-2">
              <span className="font-bold">Noivos</span>
              <div className="flex gap-4">
                <div className="bg-zinc-50 w-12 aspect-square rounded-full border"></div>
                <div className="bg-primary w-12 aspect-square rounded-full"></div>
              </div>
              <p className="text-center text-sm">
                O branco é reservado para a noiva. O terno azul, como o céu aberto, é reservado para o traje do noivo.
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-2 border rounded px-4 py-2 mt-2">
              <span className="font-bold">Pais dos Noivos</span>
              <div className="flex gap-4">
                <div className="bg-primary w-12 aspect-square rounded-full"></div>
              </div>
              <p className="text-center text-sm">
                A gravata azul será o distintivo dos nossos co-pilotos mais importantes, os pais dos noivos, acrescentando charme e sofisticação à nossa jornada.
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-2 border rounded px-4 py-2 mt-2">
              <span className="font-bold">Mães dos Noivos</span>
              <Image src={pinkPalette} alt="pinkPalette" width={300} className="h-14 object-cover" />
              <p className="text-center text-sm">
                Os tons de rosa são exclusividade das mães dos noivos, simbolizando amor e carinho.
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-2 border rounded px-4 py-2 mt-2">
              <span className="font-bold">Madrinhas</span>
              <Image src={bluePalette} alt="bluePalette" width={300} className="h-14 object-cover" />
              <p className="text-center text-sm">
                Em tons de azul, as madrinhas criarão uma constelação elegante ao redor da noiva, radiando lealdade e confiança.
              </p>
            </div>
            <div className="flex flex-col items-center w-full gap-2 border rounded px-4 py-2 mt-2">
              <span className="font-bold">Padrinhos</span>
              <Image src={grayPalette} alt="grayPalette" width={300} className="h-14 object-cover" />
              <p className="text-center text-sm">
                Com ternos cinza, os padrinhos se destacarão com elegância, prontos para qualquer desafio nessa aventura.              </p>
            </div>

          </div>

          <div className="flex flex-col items-center w-full border-t py-4 px-2">
            <H1
              icon={<ShirtIcon className={h1IconClasses} strokeWidth={1.5} />}
              subtitle="Pise Leve, Dance Feliz"
            >
              DressCode
            </H1>

            <Paragraph>
              Decidimos voar um pouco mais alto e fazer algo diferente. Sugerimos a todos os passageiros que adotem o <b>tênis</b> como companheiro oficial de voo! Parece que muitos de vocês já estão trilhando esse caminho de estilo, e estamos entusiasmados com a energia contagiante. Sabemos que é algo novo, mas certamente será uma jornada descontraída e repleta de alegria.
            </Paragraph>
            <Paragraph>
              Caso sintam alguma &quot;turbulência fashion&quot; para o uso dos tênis, sugerimos também <b>sapatos baixos</b>, também sapatos baixos, pois o terreno do nosso aeroporto é um tanto <b>irregular</b>.
            </Paragraph>
          </div>

          <div className="flex flex-col items-center w-full border-t py-4 px-2">
            <H1
              icon={<CloudSunIcon className={h1IconClasses} strokeWidth={1.5} />}
              subtitle="Fique atento nas condições meteorológicas do voo"
            >
              Previsão do tempo
            </H1>

            <Paragraph>
              Em nossa cidade de destino, no interior do estado de São Paulo, maio nos presenteia com um clima &quot;meia estação&quot;, variando entre 14° e 25°. Não significa que nosso casamento estará congelante, mas como estaremos em um bosque com um lago encantador, sugerimos que todos considerem a possibilidade de embarcar com um agasalho a bordo. Queremos que todos se sintam confortáveis para aproveitar cada momento, independente da previsão!
            </Paragraph>
            <Paragraph>
              Contamos com a colaboração de todos para que esse voo seja inesquecível! Estamos ansiosos para encontrá-los na pista de dança e celebrar juntos esse dia tão especial.
            </Paragraph>
            <Paragraph>
              Preparados para decolar?
            </Paragraph>
            <Paragraph>
              Com amor 💙
              Thaís e Tiago
            </Paragraph>
          </div>

          <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
            <p className="text-lg font-bold text-center mb-2">Deixe sua mensagem aos noivos!</p>
            <Button variant="default"><Link href="/Gifts">Quero enviar mensagem</Link></Button>
          </div>
        </div>
      </div>
    </>
  )
}