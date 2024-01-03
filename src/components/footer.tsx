import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-10 flex items-center justify-center text-sm lg:text-base font-semibold">
      Feito com 💙 por
      <Link href="https://www.instagram.com/thaisdomingosc" target="_blank" className="font-bold hover:text-primary mx-1">Thaís</Link>
      e
      <Link href="https://www.instagram.com/tac.tiago" target="_blank" className="font-bold hover:text-primary mx-1">Tiago</Link>
    </div>
  )
}