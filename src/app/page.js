import Hero1 from '@/components/Hero1'
import Testimonals1 from '@/components/Testimonals1'
import Subscription from '@/components/Subscription1'
import Partners1 from '@/components/Partners1'
import Footer1 from '@/components/Footer1'

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero1 />
      <Testimonals1 />
      <Subscription />
      <Partners1 />
      <Footer1 />
    </main>
  )
}
