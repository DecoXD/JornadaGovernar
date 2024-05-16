

const WhatsIs = () => {
  return (
    <section className="flex hero-bg-starter  justify-between  text-center p-4">
      <div className="flex-1 pt-20 flex flex-col gap-4">
        <h2 className="md:text-4xl text-3xl font-poppins font-bold uppercase text-black">o que é a 
        <span className=""> jornada governar</span>?
        </h2>

        <p className="text-black text-sm font-medium font-montserrat pb-10"> assista ao video de apresentação  e entenda o que é a <span className="" >Jornada Governar</span>.</p> 
      </div>
      <div className="flex-1 flex justify-center">
        <video width={280}  className=""  controls>
          <source src="/assets/videos/apresentation.mp4" type="video/mp4"/>
        </video>
      </div>
    </section>
  )
}

export default WhatsIs