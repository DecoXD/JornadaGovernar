// import Swiper core and required modules


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay } from 'swiper/modules';
import { sponsorsItems } from '@/constants';
import SponsorsCard from '@/components/shared/SponsorsCard';


const Sponsors = () => {
  return (
    <section className='flex flex-col md:gap-10 gap-4'>
      <h2 className='text-center md:text-5xl text-3xl md:py-8 py-14 font-bold uppercase font-poppins'>Patrocinadores</h2>
     <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
      
      
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
        sponsorsItems.map((item,idx) =>{
          return (
            <SwiperSlide>
              <SponsorsCard brand={item.brand} imageSrc={item.imageSrc} key={idx}/>
            </SwiperSlide>
          )
        })
        }
     
    </Swiper>
     <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
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
        sponsorsItems.map((item,idx) =>{
          return (
            <SwiperSlide>
              <SponsorsCard brand={item.brand} imageSrc={item.imageSrc} key={idx}/>
            </SwiperSlide>
          )
        })
        }
     
    </Swiper>
      
    </section>
  )
}

export default Sponsors