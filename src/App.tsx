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
import WhatsIs from "./sections/WhatsIs"




function App() {
 

  return (
   <div className="">

    <Analytics/>
    
    <WpToast/>

    <section>
      <Hero/>
    </section>

    <section className="py-20 hero-bg-bottom">
      <WhatsIs/>
    </section>

    <section className="">
      <Target/>
    </section>

    <section className="">
      <Content/>
    </section>
    
    <section className="pt-24">
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

    <section className="pt-20 md:pt-24">
      <Sponsors/>
    </section>
    
    <section className="bg-[#FFFEFA] md:pt-32 pb-24 pt-24  ">
      <Payment/>
    </section>

    <Footer/>
   </div>
  )
}

export default App
