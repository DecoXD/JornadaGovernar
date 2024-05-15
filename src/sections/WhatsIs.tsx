

const WhatsIs = () => {
  return (
    <section className="flex justify-center flex-col items-center gap-8 text-center">
      <h2 className="text-4xl font-poppins font-bold uppercase">o que é a 
      <span className="text-[#6c3e04]"> jornada governar</span>?</h2>
      <p className="text-black/60 text-sm font-medium font-montserrat pb-10"> assista ao video de apresentação  e entenda o que é a <span className="text-[#6c3e04]" >Jornada Governar</span>.</p> 
      <video width={280}  className="border-2"  controls>
        <source src="/assets/videos/apresentation.mp4" type="video/mp4"/>
      </video>
    </section>
  )
}

export default WhatsIs