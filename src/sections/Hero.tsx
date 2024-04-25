import {Button} from '../components/ui/button'

const Hero = () => {
  return (
    <section className='flex flex-col p-10 lg:gap-0 gap-12 bg-black min-h-screen hero-bg items-start relative '>
      
      <img src="/assets/images/logo.png" alt="logomarca" width={150}/>
    
      <div className="bg-yellow-300 min-h-24 min-w-16 blur-3xl absolute top-0 left-0"></div>

      <section className='flex flex-col md:flex-row flex-1 items-center  '>
          
        <div className="  flex flex-col gap-8 flex-1">
          <h1 className='lg:text-5xl md:text-4xl text-3xl max-w-[470px] w-full font-bold uppercase text-white'>
            Elimine Bloqueios
            e <span className="text-yellow-400">Destrave</span> todo o
            seu <span className="text-yellow-400">Potencial</span>
          </h1>
          <p className='text-white md:text-md text-sm'>Descubra como superar os bloqueios ocultos que limitam seu potencial. Através do autoconhecimento e da autorresponsabilidade, aprenda a maximizar sua performance e produtividade. Transforme sua vida e negócios,  e alcance uma vida plena e abundante.</p>
          <Button className='uppercase max-w-56 text-md font-bold bg-yellow-400   '>quero fazer parte</Button>
        </div>

        <div className=" flex-1 hidden md:flex">
          <img src="/assets/images/sheila.png" alt="" />
        </div>
      </section>
      
    </section>
)
}

export default Hero