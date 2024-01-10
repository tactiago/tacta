import H1, { h1IconClasses } from "@/components/content/h1";
import prisma from "@/lib/prisma";
import { cn, generateDistanceToNowText } from "@/lib/utils";
import { MessageSquare } from "lucide-react";
import { responsiveWidth } from "@/app/page";
import Paragraph from "@/components/content/Paragraph";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default async function Messages() {


  const messages = await prisma.gift.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <>
      <div className="flex flex-col items-center my-4">
        <H1
          icon={<MessageSquare className={h1IconClasses} strokeWidth={1.5} />}
          subtitle="Palavras de carinho de pessoas queridas"
        >
          Mensagens
        </H1>

        <div className={cn("flex justify-center flex-col items-center gap-2 px-2", responsiveWidth)}>
          {
            messages.map((message) => {
              return (
                <div className="w-full bg-secondary px-4 py-2 rounded" key={message.id}>
                  <div className="flex flex-1 w-full justify-between mb-2">
                    <b className="mr-2">{message.author}</b>
                    <time>{generateDistanceToNowText(message.createdAt)}</time>
                  </div>

                  <Paragraph>&quot;{message.content}&quot;</Paragraph>
                </div>
              )
            })
          }

          <div className="flex flex-col items-center my-4 mx-4 border border-primary rounded-lg md:p-2 lg:p-4 sm:p-2 p-2">
            <p className="text-lg font-bold text-center mb-2">Deixe também sua mensagem aos noivos!</p>
            <Button variant="default"><Link href="/Gifts">Quero enviar mensagem</Link></Button>
          </div>
        </div>
      </div>
    </>
  )
}