import CarouselSection from "@/components/shared/CarouselSection"


const Content = () => {
  return (
    <section className="bg-[#FFFEFA]  flex justify-center  p-2">

      <div className=" flex w-full max-w-6xl lg:flex-row flex-col  items-center justify-center gap-4  px-2 pt-4 md:p-4 sm:shadow-none">

        <div className="flex  flex-col gap-6  justify-center flex-1 text-black ">
          <h3 className="md:text-4xl text-3xl uppercase font-medium max-w-xl font-poppins  ">
            serão 12 horas de imersão para você <br /> <span className="text-[#6c3e04]">desbloquear</span> todo o seu potencial 
          </h3>
          <p className="max-w-96 font-montserrat">somos nós os responsáveis pela vida que levamos e onde nos colocamos e que apenas nós mesmos podemos mudar isso,</p>
          <p className="mt-2 max-w-96 font-montserrat">entendendo quem somos e o poder que está em nossas mãos para mudar quando encontramos o propósito de vida.</p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <CarouselSection/>
        </div>
      </div>
    </section>
  )
}

export default Content