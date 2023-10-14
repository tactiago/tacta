import H1, { h1IconClasses } from "@/components/content/h1";
import { Construction, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { responsiveWidth } from "../page";

export default function NotFound() {
  return (
    <div className={cn("flex justify-center flex-col items-center gap-2 px-2", responsiveWidth)}>
      <H1
        icon={<Construction className={h1IconClasses} strokeWidth={1.5} />}
        subtitle="O Tiago está trabalhando árduamente pra construir essa página."
      >
        Trabalho em progresso
      </H1>

      <Button variant="outline">
        <a href="/" className="flex items-center gap-2 justify-center">
          <Home className="text-muted-foreground" strokeWidth={1.5} /> Volte ao Início
        </a>
      </Button>
    </div>
  );
}