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
    <Carousel className=" max-w-6xl w-full m-auto mt-20 mb-20   "
    opts={{
      loop:true,
      direction:'ltr',
      
    }}
   plugins={[plugin.current]}
    >
      <CarouselContent className="w-full">
         
         {
          carouselItems.map((item,idx) => 
            <CarouselItem key={idx} className="md:basis-1/1 lg:basis-1/1">
               <div className="  h-full max-h-[600px] min-h-96 overflow-hidden">
                <img src={item.imageSrc} alt={item.alt} width={1000} className=" object-cover w-full h-full"/>
               </div>
          </CarouselItem>)
         }
    
      </CarouselContent>
     
    </Carousel>
  )
}

export default CarouselSection