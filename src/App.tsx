
import Hero from "./sections/Hero"
import Target from "./sections/Target"
import Content from "./sections/Content"
import Testimonials from "./sections/Testimonials"
import Benefices from "./sections/Benefices"
import Disclosure from "./sections/Disclosure"
import About from "./sections/About"
import Payment from "./sections/Payment"
import Footer from "./sections/Footer"


function App() {
 

  return (
   <div className="min-h-[200vh]">

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
      <Testimonials/>
    </section>

    <section>
      <Benefices/>
    </section>
    
    <section className="bg-[#FFFEFA] py-20 ">
      <Disclosure/>
    </section>

    <section className="bg-[#FFFEFA] py-20 ">
      <About/>
    </section>
    
    <section className="bg-[#FFFEFA] py-20 ">
      <Payment/>
    </section>
    
    <Footer/>
   </div>
  )
}

export default App
