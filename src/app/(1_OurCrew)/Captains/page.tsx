import { Heart } from "lucide-react";
import H1, { h1IconClasses } from "@/components/content/h1";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Paragraph from "@/components/content/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { responsiveWidth } from "@/app/page";

export default function Captains() {
  return (
    <div className={cn("flex flex-col items-center px-2", responsiveWidth)}>
      <Card className={cn("overflow-hidden mt-4")}>
        <Image
          src="/Cambio.jpg"
          className='aspect-video object-cover transform -scale-x-100'
          alt="Noivos"
          width={2000}
          height={2000}
        />

        <div className="flex flex-col items-center my-4 px-2">
          <div className="flex flex-col items-center my-4">
            <H1
              icon={<Heart className={h1IconClasses} strokeWidth={1.5} />}
              subtitle="Conheça os comandantes do nosso voo"
            >
              Os Noivos
            </H1>
          </div>

          <Paragraph>
            No cockpit da vida, prontos para decolar na aventura do casamento, Thaís e Tiago compartilham uma história que não segue rotas convencionais. Não são contos de fadas ou viagens épicas, mas sim momentos reais e hilários que deram forma à sua trajetória. O primeiro contato ocorreu durante uma &quot;conexão&quot; em Campina Grande para uma premiação de informática, onde Thaís, com olhos de sonhadora, e Tiago, mais tranquilo, trocaram olhares &quot;em altitudes&quot; diferentes. O &quot;check-in&quot; do romance foi feito na mesa de uma pizzaria, após uma &quot;reorganização de assentos&quot; para aproximar amigos.
          </Paragraph>
          <Paragraph>
            Uma paraibana direto de João Pessoa e um paulista de São José dos Campos, mostrando que a ponte aérea do coração é eficiente e que corações dispostos se atraem.Mesmo com suas peculiaridades, a sintonia entre eles só ganhou mais altitude. Como uma aeronave em voo constante, a história deles foi se desenrolando ao longo dos anos, tornando-se um conjunto harmonioso que, quase 10 anos depois, se resume em uma frase: &quot;tudo a bordo dessa jornada única.&quot;
          </Paragraph>

          <h1 className="text-lg font-bold text-destructive mt-2">Tiago sobre Thaís</h1>
          <Paragraph>
            Uma paraibana direto de João Pessoa e um paulista de São José dos Campos, mostrando que a ponte aérea do coração é eficiente e que corações dispostos se atraem.Mesmo com suas peculiaridades, a sintonia entre eles só ganhou mais altitude. Como uma aeronave em voo constante, a história deles foi se desenrolando ao longo dos anos, tornando-se um conjunto harmonioso que, quase 10 anos depois, se resume em uma frase: &quot;tudo a bordo dessa jornada única.&quot;
          </Paragraph>

          <h1 className="text-lg font-bold text-primary mt-2">Thaís sobre Tiago</h1>
          <Paragraph>
            Ah, preparem-se para decolar numa jornada de amor e risadas, pois apresento o homem que conquistou o coração desta paraibana arretada, o noivo mais incrível de todos os tempos!
          </Paragraph>
          <Paragraph>
            Conheçam o comandante do nosso amor, um piloto destemido com mais molejo que qualquer dançarino de axé. Ele é um engenheiro que faz o Inspector Bugiganga parecer amador, mais futurista do que o próprio Homem de Ferro. Transforma sonhos em realidade com um toque de mágica e um punhado de parafusos. Voou direto para o coração da paraibana ardida aqui.
          </Paragraph>
          <Paragraph>
            Quando o assunto é linguagem do amor, ele fala fluente em &quot;atos de serviço&quot;, sempre disposto a colocar as mãos na massa para fazer a noiva se sentir nas nuvens. Como um avião, ele está sempre pronto para decolar rumo a novas aventuras. Se existe alguém capaz de fazer o coração da noiva aqui voar, é ele. Mesmo nos momentos turbulentos, nunca desistiu, mantendo o amor do casal firme e forte, como um voo suave nas alturas.
          </Paragraph>
          <Paragraph>
            Este é o nosso noivo - o comandante da alegria, o engenheiro do coração, e o meu eterno parceiro de voo. Te vejo no altar, TAC!
          </Paragraph>


        </div>
      </Card>

      <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
        <p className="text-lg font-bold text-center mb-2">Conheça a tripulação desse voo!</p>
        <Button variant="default"><Link href="/Crew">Pais e Padrinhos</Link></Button>
      </div>
    </div >
  )
}