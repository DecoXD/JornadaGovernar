
import Hero from "./sections/Hero"
import Target from "./sections/Target"
import Content from "./sections/Content"


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
   </div>
  )
}

export default App
