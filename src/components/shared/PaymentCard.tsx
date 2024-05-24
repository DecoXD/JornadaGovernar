type PaymentCardProps = {
   
    title:string;
    
    initialValue:string;
    promoValue:string;
    parcels:number;
    bgGradient:string;
    total:number;
    benefices:any;
    imgUrl:string;

}
import {config} from '../../constants/index.ts'

const PaymentCard = ({title,initialValue,promoValue,parcels,total,benefices,imgUrl,bgGradient}:PaymentCardProps) => {
  return (
    <article 
    className={`
      max-w-md min-h-[750px] w-full rounded-lg flex text-center flex-col px-4 py-6 gap-8 ${bgGradient}  shadow-lg shadow-black/15
    `}>
      <div className=" flex flex-col gap-6">
          
          <div className="flex justify-center items-center gap-8">
            <h3 className="text-black text-2xl sm:text-3xl font-medium font-poppins">{title}</h3>
            <div className="flex">
              <img src={imgUrl} alt="bronze" width={55}/>
              <div className=" flex flex-col font-montserrat  text-xs justify-center">
                <span>ingresso</span>
                <span>individual</span>
              </div>
            </div>
          </div>
            <span className='border-2 w-full border-[#6c3e04]'></span>
          
      </div>

      <div className=" text-center  items-center flex gap-6 flex-col ">

        <h4 className="text-xl sm:text-2xl font-medium uppercase font-poppins text-black">investimento
        </h4>
        
        <p className="sm:text-md  font-medium font-montserrat ">de: <span className="line-through font-bold text-[#6c3e04]">{initialValue}</span> por apenas</p>
        <p className=" text-xl sm:text-3xl fon-bold text-black font-montserrat">
          <span className='text-sm font-semibold'> {parcels}x de</span> 
          <span className=" lg:text-5xl font-bold text-4xl "> R${promoValue}</span> 
          <span className='text-sm font-semibold'> sem juros</span>
          </p>

        <p className="text-black text-sm font-montserrat">
          <span className='font-bold'> ou R${total.toFixed(2)} </span>a vista
        </p>

        <a target="_blank" href={config.ingressLink} className="py-4 px-10 bg-[#6c3e04] w-full max-w-80 uppercase text-xs text-slate-100 sm:text-sm md:text-lg font-bold font-montserrat"> quero fazer parte
        </a>

        <p className="flex justify-center gap-2 items-center font-montserrat">
          <img src="/assets/images/logo.png" alt="icone bilheteria" width={30}/>
          <span className="font-medium text-sm text-black">Jornada Governar</span> 
          <span className="font-light text-xs text-black">| faça parte</span>
        </p>

      </div>

      <ul className="flex pl-20 flex-col gap-6">
        {benefices.map((item:any) =>{
         return (
          <li key={item.benefice} className='flex gap-4 font-montserrat'>
            <img src={item.iconSrc} alt="checkmark" width={15} />
            <p>{item.benefice}</p>
          </li>)
        })}
      </ul>
    </article>
  )
}

export default PaymentCard