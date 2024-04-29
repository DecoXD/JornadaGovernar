import { initializeRegressiveCount } from '@/helpers/Counter.ts'
import {config} from '../constants/index.ts'

const Disclosure = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-yellow-300 p-2">
      <article className="flex flex-col gap-6">
        <h3 className="sm:text-4xl text-3xl  font-medium text-center flex flex-col font-poppins">
          <span>Você ja se sentiu um</span>
           <span>gigante vivendo espremido</span> 
           <span>na casa de um anão?</span></h3>
        <p className="text-center font-medium font-montserrat">você está vivendo uma vida "menor" que poderia?</p>
        <a target="_blank" href={config.ingressLink} className="py-4 px-10 bg-black text-slate-100 sm:text-md text-xs font-medium uppercase text-center font-montserrat">
          participe desta jornada
        </a>
        <p className="text-center font-medium text-sm font-montserrat">sua mudança para melhor começa em:</p>
        <div className="flex gap-6 justify-center font-montserrat ">
          <p className="flex flex-col">
            <span className="text-4xl font-bold">25</span>
            <span className="text-sm text-center font-light ">dia</span>
            </p>
          <p className="flex flex-col">
            <span className="text-4xl font-bold">13</span>
            <span className="text-sm text-center font-light ">hor</span>
          </p>
          <p className="flex flex-col">
            <span className="text-4xl font-bold">02</span>
            <span className="text-sm text-center font-light ">min</span>
          </p>
          <p className="flex flex-col">
          <span className="text-4xl font-bold">58</span>
          <span className="text-sm text-center font-light ">seg</span>
          </p>
        </div>
      </article>
    </section>
  )
}

export default Disclosure