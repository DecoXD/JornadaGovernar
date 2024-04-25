

const Testimonials = () => {
  return (
    <section className="bg-black flex justify-center">

      <div className="flex lg:flex-row flex-col shadow-md   p-10">

        <div className="flex  flex-col gap-6  justify-center flex-1 text-slate-100 ">
          <h3 className="md:text-4xl text-3xl uppercase font-medium max-w-xl  ">
            serão 6 horas de imersão para você <br /> <span className="text-yellow-400">desbloquear</span> todo o seu potencial 
          </h3>
          <p className="max-w-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ratione quas officiis aliquam voluptas recusandae totam necessitatibus beatae neque fugit.</p>
          <p className="mt-2 max-w-96">, quaerat repudiandae hic velit architecto provident odit quia perferendis excepturi.</p>
        </div>

        <div className="flex-1">
          <img src="/assets/images/cadeado.png" className=" 0 rounded-sm " alt="cadeado" width={700} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials