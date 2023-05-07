import Header1 from '@/components/Header1'
import Testimonals1 from '@/components/Testimonals1'
import Header2 from '@/components/Header2'
import Partners1 from '@/components/Partners1'
import Subscription1 from '@/components/Subscription1'

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Header1 />
      <Testimonals1 />
      <Header2 />
      <Partners1 />
      <Subscription1 />
    </main>
  )
}
