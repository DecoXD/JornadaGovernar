import { Analytics } from "@vercel/analytics/react"
import Hero from "./sections/Hero"
import Target from "./sections/Target"
import Content from "./sections/Content"

import Benefices from "./sections/Benefices"
import Disclosure from "./sections/Disclosure"
import About from "./sections/About"
import Payment from "./sections/Payment"
import Footer from "./sections/Footer"
import WpToast from "./components/shared/WpToast"
import Audience from "./sections/Audience"
import Sponsors from "./sections/Sponsors"



function App() {
 

  return (
   <div className="">

    <Analytics/>
    
    <WpToast/>
    <section>
      <Hero/>
    </section>

    <section>
      <Target/>
    </section>

    <section>
      <Content/>
    </section>

    <section>
      <Audience/>
    </section>

    <section className="pt-24">
      <Benefices/>
    </section>
    
    <section className="bg-[#FFFEFA] pt-24 ">
      <Disclosure/>
    </section>

    <section className="bg-[#FFFEFA] pt-24 ">
      <About/>
    </section>

    <section className="pt-24">
      <Sponsors/>
    </section>
    
    <section className="bg-[#FFFEFA] pt-32 pb-24 ">
      <Payment/>
    </section>

    <Footer/>
   </div>
  )
}

export default App
