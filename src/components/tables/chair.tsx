export default function Chair() {
  return (
    <div className={`border h-8 w-8 rounded-sm group-aria-[busy=true]:border-b-4 group-aria-[busy=false]:border-t-4 text-xs flex items-center justify-center group-aria-selected:bg-emerald-200 group-aria-selected:border-emerald-400`}>
    </div>
  )
}