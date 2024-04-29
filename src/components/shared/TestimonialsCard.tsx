type TestimonialCardProps = {
  imageSrc:string,
  content:string,
  title:string
}



/* eslint-disable */
const TestimonialsCard = ({imageSrc,content,title}:TestimonialCardProps) => {
  return (
    <article className="text-slate-100 font-montserrat max-w-[320px] flex flex-col items-center  ">
      <img src={imageSrc} alt={title} width={80} className="rounded-full translate-y-4 " />
      <div className="   flex flex-col rounded-lg p-4 gap-2 bg-[#1A1A1A] min-h-56 items-center justify-center ">
        <h4 className="font-medium text-lg">{title}</h4>
        <p className="text-xs font-medium text-center">{content}</p>
        <div className="flex gap-2 mt-3">
          <img src="/assets/icons/playbutton.svg" alt="play button" width={15}/>
          <p className="font-light text-xs text-yellow-600 ">assista o depoimento</p>
        </div>  
      </div>
    </article>
  )
}

export default TestimonialsCard