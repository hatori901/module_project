import AboutUs1 from "@/components/AboutUs1"
import Testimonials3 from "@/components/Testimonials3"
import Subscription2 from "@/components/Subscription2"
import Subscription3 from "@/components/Subscription3"

export default function page() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <AboutUs1 />
      <Testimonials3 />
      <Subscription2 />
      <Subscription3 />
    </main>
  )
}
