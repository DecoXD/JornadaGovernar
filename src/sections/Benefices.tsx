

const Benefices = () => {
  return (
    <section className='bg-black'>
     <article className='flex justify-center'>

      <img src="/assets/images/hand.jpeg" alt="hand" className='md:block hidden'/>

        <div className=" flex flex-col gap-10 p-10">

          <h3 className='flex font-poppins flex-col md:text-4xl text-3xl font-semibold uppercase text-slate-100'>
            <span>participe dessa </span>
            <span>jornada e gire a chave</span>
            <span className='text-yellow-300'>da sua vida</span>
            </h3>

            <p className='font-montserrat max-w-80 text-slate-100 font-light text-md'>vou te mostrar como você deve agir para vencer de uma vez por todas <span className='text-yellow-300 font-medium'> as suas limitações</span></p>
            <ul className='font-montserrat flex flex-col gap-4 text-sm text-slate-100 '>
              <li className='font-montserrat sm:max-w-72 flex gap-4  font-light'>
                <img src="/assets/icons/checkmark.svg" alt="checkmark"  width={15}/>
                <span>Compreenda suas próprias emoções e será capaz de tomar decisões consistentes.</span>
              </li>

              <li className='font-montserrat sm:max-w-72 flex gap-4  font-light '>
                <img src="/assets/icons/checkmark.svg" alt="checkmark"  width={15}/>
                <span>utilize ferramentas de resiliência e transforme desafios em saúde no trabalho, cultivando o bem-estar emocional.</span>
              </li>

              <li className='font-montserrat sm:max-w-72 flex gap-4  font-light'>
                <img src="/assets/icons/checkmark.svg" alt="checkmark" width={15} />
                <span>tenha blindagem emocional para fazer networking, ter mais amigos e mais clientes.</span>
              </li>
            </ul>
        </div>
     </article>
    </section>
  )
}

export default Benefices