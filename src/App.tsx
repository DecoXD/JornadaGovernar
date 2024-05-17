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
import FadeInContainer from "./components/shared/FadeInContainer"





function App() {
 

  return (
   <div className="overflow-hidden">

    <Analytics/>
    
    <WpToast/>

    <FadeInContainer   animate = {'animate-fade-in'}>
      <Hero/>
    </FadeInContainer>
    

    

    <section className="">
      <Target/>
    </section>

    <FadeInContainer   animate = {'animate-fade-in-right'}>
      <Content/>
    </FadeInContainer>
 
    
    <FadeInContainer className = {'p-20'} animate = {'animate-fade-in'}>
      <Audience/>
    </FadeInContainer>
    

    <FadeInContainer className={"bg-[#FFFEFA] pt-24 "}  animate = {'animate-fade-in-right'}>
      <Disclosure/>
    </FadeInContainer>
      
    <FadeInContainer className={"pt-24 "}  animate = {'animate-fade-in'}>
      <Benefices/>
    </FadeInContainer>
   
    <FadeInContainer className="bg-[#FFFEFA] pt-20 "  animate = {'animate-fade-in-right'}>
      <About/>
    </FadeInContainer>
  

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
