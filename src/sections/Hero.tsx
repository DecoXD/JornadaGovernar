
import {config} from '../constants/index.ts'
const Hero = () => {
  return (
    <section className='flex flex-col sm:p-10 p-10 lg:gap-0 gap-12 bg-black min-h-screen hero-bg items-start relative '>
      
      <img src="/assets/images/logo.png" alt="logomarca" width={150}/>{/* ajustar para 100 em mobile */}
    
      <div className="bg-yellow-300 min-h-24 min-w-16 blur-3xl absolute top-0 left-0"></div>

      <section className='flex flex-col md:flex-row flex-1 items-center '>
          
        <div className="  flex flex-col gap-8 flex-1  w-full">
          <h1 className='lg:text-5xl font-poppins sm:text-4xl text-3xl  max-w-[600px] w-full font-bold uppercase text-white'>
            Alcance uma vida <br /> <span className="text-yellow-400">Extraordinária</span>
            <br /> 
            com <span className="text-yellow-400 whitespace-nowrap">sheila damião</span> <br />
            especialista em <br />
            <span className="text-yellow-400 sm:whitespace-nowrap">inteligência emocional</span>
          </h1>
          <p className='text-white md:text-md sm:text-sm text-xs font-montserrat'>Descubra como superar os bloqueios ocultos que limitam seu potencial. Através do autoconhecimento e da autorresponsabilidade, aprenda a maximizar sua performance e produtividade. Transforme sua vida e negócios,  e alcance uma vida plena e abundante.</p>
          <a target="_blank" href={config.ingressLink} 
          className=' text-center uppercase max-w-80 text-md font-bold bg-yellow-400 rounded-none text-black py-4 px-12 hover:bg-yellow-400/90 font-montserrat sm:text-md text-xs'>quero fazer parte</a>
          <p className='flex gap-2 flex-col text-xs'>
           
            <div className="flex gap-2">
              <div className="flex gap-2 items-center">
                <img src="/assets/icons/calendar.svg" alt="calendar" width={20} />
                <span className='text-slate-100 font-montserrat text-xs font-bold'>20/05/2024 </span>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/assets/icons/clock.svg" alt="clock" width={20} />
                <span className='text-slate-100 font-montserrat text-xs font-bold'> 20:00</span>
              </div>
            </div>
            <span className='text-slate-100 font-montserrat  text-sm font-medium'>Colégio Adventista</span>
            
          
          </p>
        </div>


        <div className=" flex-1 hidden md:flex">
          {/* <img src="/assets/images/sheila.png" alt="" /> */}
        </div>
      </section>
      
    </section>
)
}

export default Hero