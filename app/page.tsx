import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Residences } from '@/components/residences'
import { Testimonials } from '@/components/testimonials'
import { About } from '@/components/about'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen scroll-smooth" style={{ backgroundColor: '#F9F9F7' }}>
      <Navbar />
      <Hero />
      <Residences />
      <Testimonials />
      <About />
      <Faq />
      <Footer />
    </main>
  )
}
