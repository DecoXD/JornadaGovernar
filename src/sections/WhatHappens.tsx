import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay } from 'swiper/modules';


import { WhatHappensRow1Items, WhatHappensRow2Items } from '@/constants';
import WhatHappensCard from '@/components/shared/WhatHappensCard';


const WhatHappens = () => {
  return (
    <section className='flex flex-col md:gap-10 gap-4 gradient-bg-bronze pb-4'>


      <h2 className='text-center justify-center items-center md:text-5xl text-3xl md:py-8 py-14 font-bold uppercase flex gap-2 font-poppins'>
        <img src="/assets/icons/marriage.svg" alt="marriage icon" width={60} className='animate-pulse'/>
        <span>casamento </span>
        <span className='text-[#6c3e04]'>na Jornada?</span>
      </h2>

      <div className="flex justify-center">
        <video controls>
          <source src='/assets/videos/pedido.mp4' />
        </video>
      </div>

      <h2 className='text-center md:text-5xl text-3xl md:py-8 py-14 font-bold uppercase font-poppins'>
        <span>Como foi a </span>
        <span className='text-[#6c3e04]'>Jornada?</span>
      </h2>

     <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={10}
      
      
      pagination={{ clickable: false }}
      speed={2000}
      autoplay={{
        delay:100,
        reverseDirection:true
      }}
      slidesPerView={3}
      
      className='lg:max-w-7xl md:max-w-4xl max-w-3xl w-full  '
      loop={true}
    >
      
      {
        WhatHappensRow1Items.map((item,idx) =>{
          return (
          <SwiperSlide key={idx}>
            <WhatHappensCard {...item}  />
          </SwiperSlide>
          )
        })
        }
     
    </Swiper>
     <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      pagination={{ clickable: false }}
      speed={2000}
      autoplay={{
        delay:100,
        reverseDirection:false
      }}
      
      
      className='lg:max-w-7xl md:max-w-4xl max-w-3xl w-full  '
      loop={true}
    >
      
      {
        WhatHappensRow2Items.map((item,idx) =>{
          return (
            <SwiperSlide key={idx}>
              <WhatHappensCard {...item}  />
            </SwiperSlide>
          )
        })
        }
     
    </Swiper>
      
    </section>
  )
}

export default WhatHappens