

const Testimonials = () => {
  return (
    <section className="bg-black flex justify-center">

      <div className="flex lg:flex-row flex-col shadow-md   p-10">

        <div className="flex  flex-col gap-6  justify-center flex-1 text-slate-100 ">
          <h3 className="md:text-4xl text-3xl uppercase font-medium max-w-xl font-poppins  ">
            serão 12 horas de imersão para você <br /> <span className="text-yellow-400">desbloquear</span> todo o seu potencial 
          </h3>
          <p className="max-w-96 font-montserrat">somos nós os responsáveis pela vida que levamos e onde nos colocamos e que apenas nós mesmos podemos mudar isso,</p>
          <p className="mt-2 max-w-96 font-montserrat">entendendo quem somos e o poder que está em nossas mãos para mudar quando encontramos o propósito de vida.</p>
        </div>

        <div className="flex-1">
          <img src="/assets/images/cadeado.png" className=" 0 rounded-sm " alt="cadeado" width={700} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials