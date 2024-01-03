import { h1IconClasses } from "@/components/content/h1";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center">
      <Loader className={cn(h1IconClasses, "animate-spin")} strokeWidth={1.5}></Loader>
    </div>
  )
}