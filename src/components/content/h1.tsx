type H1Props = {
  children: React.ReactNode
  icon?: React.ReactNode
  subtitle?: string
}

export const h1IconClasses = 'h-10 w-10 text-primary'

export default function H1({ children, icon, subtitle }: H1Props) {
  return (
    <>
      {icon}
      <h1 className='text-xl font-semibold'>{children}</h1>
      {subtitle && <p className='text-center text-sm my-2 px-2'>
        {subtitle.split("<br />").map(str => (<>{str}<br></br></>))}
      </p>}
    </>
  )
}