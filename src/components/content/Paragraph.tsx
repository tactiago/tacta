type H1Props = {
  children: React.ReactNode
}

export default function Paragraph({ children }: H1Props) {
  return (
    <p className="text-justify leading-relaxed mb-2 indent-8 text-sm">
      {children}
    </p>
  )
}