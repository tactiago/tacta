import { useState } from "react";

import { Gift } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import PixDialog from "./pixDialog";
import { Input } from "../ui/input";

interface messageDialogProps {
  total: number
}

export default function MessageDialog({ total }: messageDialogProps) {
  const [message, setMessage] = useState('')
  const [messageFrom, setMessageFrom] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  function closeDialog() {
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger
        onClick={() => { }}
        className="font-bold md:text-lg sm:text-lg text-sm text-white flex flex-row items-center py-2 px-4 border border-white rounded-lg w-fit h-fit bg-emerald-400 hover:bg-emerald-500 transition"
      >
        <Gift className='h-5 w-5 sm:mr-2' strokeWidth={1.5} /> <p className="hidden sm:block">Presentear</p>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mensagem para os noivos</DialogTitle>
          <DialogDescription>
            Que tal dizer o que esse presente representa?
          </DialogDescription>
        </DialogHeader>

        <div>
          <Textarea
            className="resize-none placeholder:text-muted-foreground/50 h-24"
            placeholder="Desejo muitas felicidades a vocês, Thais & Tiago..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="flex justify-end items-center mt-2 gap-4">
            <label className="w-fit whitespace-nowrap" htmlFor="messageFrom">Com carinho:</label>
            <input
              type="text"
              className="bg-transparent border-b placeholder:text-muted-foreground/50 placeholder:text-sm text-sm focus:border-0"
              placeholder="Seu nome e sobrenome..."
              id="messageFrom"
              value={messageFrom}
              onChange={(e) => setMessageFrom(e.target.value)}
            />
          </div>

        </div>

        <DialogFooter>
          <PixDialog total={total} message={message + " Com carinho: " + messageFrom} onConfirmMessage={closeDialog} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}