

const About = () => {
  return (
    <section className="flex justify-center  p-2 md:p-8  m-auto">
      <div className="flex gap-8 lg:flex-row flex-col p-2 items-center justify-center">
        <div className="text-black  flex flex-col gap-8   justify-center p-4">
          <h3 className="text-5xl flex flex-col font-bold font-poppins">
            <span>
              Conheça sua
              </span>
            <span>
              mentora
              <span className="text-[#6c3e04]"> Sheila Damião
              </span>
            </span>
          </h3>
          <ul className="max-w-xl flex flex-col gap-4 font-medium font-montserrat">
            <li>
                CEO da SSRH: Empresa de gestão de pessoas e recursos humanos.
                </li>

            <li>
              Mais de <span className="text-[#6c3e04]">19 anos de experiencia</span>, mudando a história de pessoas e empresas através do seu conhecimento.
              </li>

            <li>
              Especialista em Mentoria e em comportamento humano.
            </li>
              
            <li>
              idealizadora do evento jornada Governar o Maior evento de <span className="text-[#6c3e04]">Inteligencia emocional</span> da região.
              </li>                     
          </ul>
          </div>  

        <div className="   bg-[#6c3e04]/50 rounded-2xl flex items-center ">
          <img src="/assets/images/about-image.png" alt="sheila damião" className="rounded-3xl  sm:-translate-x-3 sm:-translate-y-3 -translate-x-2 -translate-y-2  " width={600} />
        </div>
      </div>
    </section>
  )
}

export default About