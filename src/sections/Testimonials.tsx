import TestimonialsCard from "@/components/shared/TestimonialsCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import { testimonalItems } from "@/constants"

import {config} from '../constants/index.ts'

const Testimonials = () => {
  return (
   <section className="bg-[#FFFEFA]  flex flex-col items-center gap-16 px-2 sm:px-10 py-16">
    <h3 className="text-black font-poppins font-medium sm:text-3xl text-[1.3rem]">OS RESULTADOS FALAM POR SI SÓ</h3>
    <Carousel 
    opts={{
      align:"start",
      loop:true
    }}
    className="w-full max-w-5xl">
    <CarouselContent>
    {
      testimonalItems.map((item,idx) =>{
        return (
          <CarouselItem key={idx} className="md:basis-4/12 basis-10/11">
          <TestimonialsCard {...item} />
          </CarouselItem>
        )
      })
    }
    </CarouselContent>

    </Carousel>
    <a target="_blank" href={config.ingressLink} className="uppercase py-4 px-12 bg-[#6c3e04] font-montserrat font-bold sm:text-md text-xs text-slate-100 whitespace-nowrap">
      quero participar da jornada
    </a>
      
    
    
     
   </section>
  )
}

export default Testimonials