

type TestimonialCardProps = {
  imageSrc:string,
  content:string,
  title:string,
  videoSrc:string
  handleModal(state:string):void
}



/* eslint-disable */
const TestimonialsCard = ({imageSrc,content,title,videoSrc,handleModal}:TestimonialCardProps) => {
  
  return (

    <article className="text-black font-montserrat max-w-[320px] flex flex-col items-center relative z-50">
      <img src={imageSrc} alt={title} width={80} className="rounded-full translate-y-4 " />
      <div className="   flex flex-col rounded-lg p-4 gap-2 bg-[#f2eee9] min-h-56 items-center justify-center ">
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-xs font-medium text-center">{content}</p>
        <div 
          className="flex gap-2 mt-3 cursor-pointer hover:opacity-80 group">
          <img src="/assets/icons/playbutton.svg" alt="play button" width={15} className="group-hover:scale-105 "/>
          <p className="font-medium text-xs text-[#6c3e04]  " onClick={() => handleModal(videoSrc)}>assista o depoimento</p>
        </div>  
      </div>

     
    </article>
    
   
  )
}

export default TestimonialsCard