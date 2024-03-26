import Chair from "./chair"

type TableProps = {
  tag: string,
  rotation?: "" | "rotate-[30deg]" | "-rotate-[30deg]" | "rotate-[60deg]" | "-rotate-[60deg]",
  currentTag?: string
}

export default function Table({ tag, rotation = "", currentTag }: TableProps) {

  const isSelectedTable = tag === currentTag

  return (
    <div className={"w-fit h-fit group origin-center " + rotation} aria-selected={isSelectedTable}>
      {/* Chairs */}
      <div className="flex justify-evenly gap-4 my-1 group" aria-busy="false">
        <Chair />
        <Chair />
        <Chair />
        <Chair />
      </div>
      {/* Table */}
      <div className="flex items-center justify-center border h-16 w-48 rounded-md px-4 font-semibold text-center group-aria-selected:bg-emerald-200 group-aria-selected:border-emerald-400 group-aria-selected:text-emerald-900">
        {tag}
      </div>
      {/* Chairs */}
      <div className=" flex justify-evenly gap-4 my-1 group" aria-busy="true" >
        <Chair />
        <Chair />
        <Chair />
        <Chair />
      </div>

    </div>
  )
}