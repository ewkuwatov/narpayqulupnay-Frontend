// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'NarpayQulupnay',
  description: 'Свежая клубника напрямую с фермы',
  keywords: 'qulupnay, клубника, свежая клубника',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
