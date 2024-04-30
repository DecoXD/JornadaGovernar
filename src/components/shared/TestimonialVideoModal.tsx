type videoModalProp = {
 videoSrc:string
}
const TestimonialVideoModal = ({videoSrc}:videoModalProp) => {
  return (
    <div className="  hidden">
      <video src={videoSrc} autoPlay={true} controls={true} className=" w-full max-w-96 aspect-video" ></video>
    </div>
  )
}

export default TestimonialVideoModal