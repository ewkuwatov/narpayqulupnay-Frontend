import { getServerT } from '@/i18n/server'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Wave from '@/components/Wave'
import About from '@/components/About'
import Wave2 from '@/components/Wave2'
import Benefits from '@/components/Benefits'
import Products from '@/components/Products'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getServerT(locale)

  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Wave2 />
      <Products />
      <Wave />
      <About />
      <Wave2 />
      <Wave />
      <Partners />
      <Wave2 />
      <Footer />
    </main>
  )
}
