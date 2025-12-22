import Preloader from "@/components/Preloader"

// app/[locale]/layout.tsx
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
