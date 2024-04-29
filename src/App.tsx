
import Hero from "./sections/Hero"
import Target from "./sections/Target"
import Content from "./sections/Content"
import Testimonials from "./sections/Testimonials"
import Benefices from "./sections/Benefices"
import Disclosure from "./sections/Disclosure"
import About from "./sections/About"
import Payment from "./sections/Payment"


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
    
    <section className="bg-black py-20 ">
      <Disclosure/>
    </section>

    <section className="bg-black py-20 ">
      <About/>
    </section>
    
    <section className="bg-black py-20 ">
      <Payment/>
    </section>
    
   </div>
  )
}

export default App
