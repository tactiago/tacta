import Chair from "./chair"

type TableProps = {
  tag: string,
  currentTag?: string
}

export default function CaptainsTable({ tag, currentTag }: TableProps) {

  const isSelectedTable = tag === currentTag

  return (
    <div className={"w-fit group"} aria-selected={isSelectedTable}>
      {/* Chairs */}
      <div className="flex justify-evenly gap-4 my-1 group px-4" aria-busy="false">
        <Chair />
        <Chair />
      </div>
      {/* Table */}
      <div className="flex items-center justify-center border h-16 w-36 rounded-md px-4 font-semibold text-center group-aria-selected:bg-emerald-200 group-aria-selected:border-emerald-400 group-aria-selected:text-emerald-900">
        {tag}
      </div>

    </div>
  )
}