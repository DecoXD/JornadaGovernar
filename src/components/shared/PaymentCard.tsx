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
    <article className="max-w-5xl w-full rounded-lg flex sm:flex-row flex-col px-4 py-6 gap-8 bg-[#f2eee9]  shadow-lg shadow-black/50 ">
      <div className="flex-1 flex flex-col gap-4">
          <img src="/assets/images/logo.png" alt="logo" width={100} />
          <h4 className="text-black text-2xl sm:text-3xl font-poppins">{title}</h4>
          <p className="text-black font-montserrat">{content}</p>
          <div className="flex gap-4">
              <img src="/assets/icons/calendar.svg" alt="calendar" width={15}/>
              <span className="text-black text-sm font-medium font-montserrat">{date} | Colégio Adventista</span>
          </div>
      </div>

      <div className="flex-1 text-center flex gap-6 flex-col ">
        <h4 className="text-3xl sm:text-4xl font-medium uppercase font-poppins text-black">investimento</h4>
        <p className="sm:text-lg text-[#6c3e04] font-light font-montserrat ">de <span className="line-through">{initialValue}</span> por apenas</p>
        <p className=" text-xl sm:text-2xl fon-bold text-black font-montserrat">{parcels}x de <span className="text-sxl sm:text-3xl font-medium">R${promoValue}</span></p>
        <p className="text-black text-xs font-montserrat">ou R$297.00 a vista</p>
        <a target="_blank" href={config.ingressLink} className="py-4 px-10 bg-[#6c3e04] max-80 uppercase text-xs text-slate-100 sm:text-sm md:text-lg font-bold font-montserrat"> quero fazer parte</a>
        <p className="flex justify-center gap-2 items-center font-montserrat">
          <img src="/assets/images/bilheteria.png" alt="icone bilheteria" width={30}/>
          <span className="font-medium text-sm text-black">Bilheteria digital</span> 
          <span className="font-light text-xs text-black">| compra segura</span>
        </p>
      </div>
    </article>
  )
}

export default PaymentCard