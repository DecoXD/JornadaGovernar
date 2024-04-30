

const About = () => {
  return (
    <section className="flex justify-center  p-2 md:p-8  m-auto">
      <div className="flex gap-8 lg:flex-row flex-col-reverse">
        <div className="text-black  flex flex-col gap-8   justify-center p-4">
          <h3 className="text-5xl flex flex-col font-medium font-poppins">
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

        <div className="overflow-hidden ">
          <img src="/assets/images/sheila.jpg" alt="sheila damião" className="lg:translate-x-1 translate-x-3 -translate-y-4" width={600} />
        </div>
      </div>
    </section>
  )
}

export default About