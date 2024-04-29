type PaymentCardProps = {
   
    title:string;
    content:string;
    initialValue:string;
    promoValue:string;
    parcels:number;
    date:string

}
import {config} from '../../constants/index.ts'

const PaymentCard = ({title,content,initialValue,promoValue,parcels,date}:PaymentCardProps) => {
  return (
    <article className="max-w-5xl w-full rounded-lg flex sm:flex-row flex-col p-4 gap-8 bg-[#181818]  ">
      <div className="flex-1 flex flex-col gap-4">
          <img src="/assets/images/logo.png" alt="logo" width={100} />
          <h4 className="text-slate-100 text-2xl sm:text-3xl font-poppins">{title}</h4>
          <p className="text-slate-100 font-montserrat">{content}</p>
          <div className="flex gap-4">
              <img src="/assets/icons/calendar.svg" alt="calendar" width={15}/>
              <span className="text-slate-100 text-sm font-medium font-montserrat">{date} | Colégio Adventista</span>
          </div>
      </div>

      <div className="flex-1 text-center flex gap-6 flex-col ">
        <h4 className="text-3xl sm:text-4xl font-medium uppercase font-poppins text-slate-100">investimento</h4>
        <p className="sm:text-lg text-yellow-400 font-light font-montserrat ">de <span className="line-through">{initialValue}</span> por apenas</p>
        <p className=" text-xl sm:text-2xl fon-bold text-slate-100 font-montserrat">{parcels}x de <span className="text-sxl sm:text-3xl font-medium">R${promoValue}</span></p>
        <p className="text-slate-100 text-xs font-montserrat">ou R$297.00 a vista</p>
        <a target="_blank" href={config.ingressLink} className="py-4 px-10 bg-yellow-400 max-80 uppercase text-xs sm:text-sm md:text-lg font-bold font-montserrat"> quero fazer parte</a>
        <p className="flex justify-center gap-2 items-center font-montserrat">
          <img src="/assets/images/bilheteria.png" alt="icone bilheteria" width={30}/>
          <span className="font-medium text-sm text-slate-100">Bilheteria digital</span> 
          <span className="font-light text-xs text-slate-100">| compra segura</span>
        </p>
      </div>
    </article>
  )
}

export default PaymentCard