import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
  
} from "@/components/ui/carousel"
import { carouselItems } from "@/constants"
import React from "react"




const CarouselSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel className=" max-w-6xl w-full m-auto mt-20 mb-20  shadow-lg bg-[#6c3e04]/10 rounded-xl  "
    opts={{
      loop:true,
      direction:'ltr',
      
    }}
   plugins={[plugin.current]}
    >
      <CarouselContent className="w-full ">
         
         {
          carouselItems.map((item,idx) => 
            <CarouselItem key={idx} className="md:basis-1/1 lg:basis-1/1 ">
               <div className="  h-full md:max-h-[600px] md:min-h-96 min-h-60 overflow-hidden">
                <img src={item.imageSrc} alt={item.alt} width={1000} className="  w-full h-full rounded-xl"/>
               </div>
          </CarouselItem>)
         }
    
      </CarouselContent>
 
    </Carousel>
  )
}

export default CarouselSection