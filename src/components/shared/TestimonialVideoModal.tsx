type videoModalProp = {
 videoSrc:string 
}
const TestimonialVideoModal = ({videoSrc}:videoModalProp) => {
  return (
    <div className=" ">
      <video src={videoSrc} autoPlay={true} controls={true}  className="  w-full max-w-96 aspect-[16/11] " ></video>
    </div>
  )
}

export default TestimonialVideoModal