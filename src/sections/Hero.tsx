
import {config} from '../constants/index.ts'
const Hero = () => {
  return (
    <section className='flex flex-col justify-center hero-bg md:pt-4 mb-20 pt-10 lg:gap-0 gap-12 bg-[#FFFEFA] min-h-[80vh]  items-start relative '>
    
      <img src="/assets/images/logo.png" className='z-10 mt-8 ml-10 sm:ml-4 sm:mt-4 animate-fade-in' alt="logomarca" width={150}/>{/* ajustar para 100 em mobile */}
    
      <div className="bg-[#6c3e04] min-h-20 min-w-14 blur-3xl absolute top-0 left-0"></div>

      <section className='flex flex-col md:flex-row flex-1 items-end z-10 px-4 md:pl-10 md:px-10'>
          
        <div className="  flex flex-col gap-8 flex-1  w-full">
          <h1 className='lg:text-[42px] font-poppins sm:text-4xl text-3xl  max-w-[600px] w-full font-bold uppercase text-black'>
            <span className=''>Alcance uma vida</span> <br /> <span className="text-[#6c3e04] animate-fade-in-right delay-1000">Extraordinária</span>
            <br /> 
            com <span className="text-[#6c3e04] whitespace-nowrap animate-fade-in-right delay-1000">sheila damião</span> <br />
            especialista em <br />
            <span className="text-[#6c3e04]  sm:whitespace-nowrap animate-fade-in-right delay-1000">inteligência emocional</span>
          </h1>
          <p className='text-black md:text-md sm:text-sm text-xs font-montserrat  animate-fade-in-right delay-1000'>Descubra como superar os bloqueios ocultos que limitam seu potencial. Através do autoconhecimento e da autorresponsabilidade, aprenda a maximizar sua performance e produtividade. Transforme sua vida e negócios,  e alcance uma vida plena e abundante.</p>
          <a  href={config.ingressLink} 
          className=' text-center uppercase max-w-80 text-md font-bold bg-[#6c3e04] rounded-none text-slate-100 py-4 px-12 hover:bg-[#6c3e04]/95 font-montserrat sm:text-md text-xs'>quero fazer parte</a>
          <p className='flex gap-2 flex-col text-xs'>
           
            <div className="flex gap-2">
              <div className="flex gap-2 items-center">
                <img src="/assets/icons/calendar.svg" alt="calendar" width={20} />
                <span className='text-black font-montserrat text-xs font-bold'>26/05/2024 </span>
              </div>
              <div className="flex gap-2 items-center">
                <img src="/assets/icons/clock.svg" alt="clock" width={20} />
                <span className='text-black font-montserrat text-xs font-bold'> 08:00</span>
              </div>
            </div>
            <span className='text-black font-montserrat  text-sm font-medium'>Colégio Adventista</span>
            
          
          </p>
        </div>


      
        <div className="overflow-hidden flex-1 lg:flex hidden justify-end  relative  w-full  items-start  min-w-[50%] ">
          <img src="/assets/images/jornada2.png" alt="sheila damiao" width={1000} className=' '/>
         
        </div>
       
      </section>
      
    </section>
)
}

export default Hero