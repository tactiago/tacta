import H1, { h1IconClasses } from "@/components/content/h1";
import { Home, XCircle } from "lucide-react";
import { responsiveWidth } from "@/app/page";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={cn("flex justify-center flex-col items-center gap-2 px-2", responsiveWidth)}>
      <H1
        icon={<XCircle className={h1IconClasses} strokeWidth={1.5} />}
        subtitle="Não foi possível encontrar a página que busca."
      >
        Página não encontrada
      </H1>

      <Button variant="outline">
        <Link href="/" className="flex items-center gap-2 justify-center">
          <Home className="text-muted-foreground" strokeWidth={1.5} /> Volte ao Início
        </Link>
      </Button>
    </div>
  );
}