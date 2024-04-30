

import Countdown from '@/components/shared/Countdown.tsx'
import {config} from '../constants/index.ts'

const Disclosure = () => {
  
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#6c3e04] p-2">
      <article className="flex flex-col gap-6">
        <h3 className="sm:text-4xl text-3xl  font-medium text-center text-slate-100 flex flex-col font-poppins">
          <span>Você ja se sentiu um</span>
           <span>gigante vivendo espremido</span> 
           <span>na casa de um anão?</span></h3>
        <p className="text-center font-medium font-montserrat text-slate-100">você está vivendo uma vida "menor" que poderia?</p>
        <a target="_blank" href={config.ingressLink} className="py-4 px-10 bg-[#FFFEFA] text-black sm:text-md text-xs font-bold hover:opacity-90 uppercase text-center font-montserrat">
          participe desta jornada
        </a>
        <p className="text-center font-medium text-sm font-montserrat text-slate-100">sua mudança para melhor começa em:</p>
        <div className="flex gap-6 justify-center font-montserrat  ">
          <Countdown key={1}/>
        </div>
      </article>
    </section>
  )
}

export default Disclosure