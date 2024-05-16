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

    

    <section className="">
      <Target/>
    </section>

    <section className="">
      <Content/>
    </section>
    
    <section className="pt-20">
      <Audience/>
    </section>

<<<<<<< HEAD
    <section className="pt-20">
      <Benefices/>
    </section>
    
    <section className="bg-[#FFFEFA] pt-20 ">
      <Disclosure/>
    </section>
=======
    <section className="bg-[#FFFEFA] pt-24 ">
      <Disclosure/>
    </section>

    <section className="pt-24">
      <Benefices/>
    </section>
    
   
>>>>>>> fed4b64eb8d6beb1b63d5a72359956ebf9437b77

    <section className="bg-[#FFFEFA] pt-20 ">
      <About/>
    </section>

    <section className="pt-20 md:pt-20">
      <Sponsors/>
    </section>
    
    <section className="bg-[#FFFEFA] md:pt-32 pb-20 pt-20  ">
      <Payment/>
    </section>

 
    
    <Footer/>
   </div>
  )
}

export default App
