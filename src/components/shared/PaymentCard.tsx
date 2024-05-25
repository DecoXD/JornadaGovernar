type PaymentCardProps = {
    title:string;
    initialValue:string;
    promoValue:string;
    parcels:number;
    bgGradient:string;
    total:number;
    benefices:any;
    imgUrl:string;
    paymentLink:string,

}
import {config} from '../../constants/index.ts'

const PaymentCard = ({title,initialValue,promoValue,parcels,total,benefices,imgUrl,bgGradient,paymentLink}:PaymentCardProps) => {
  return (
    <article 
    className={`
      max-w-md xlg:min-h-[900px] min-h-[820px]  w-full rounded-lg flex text-center flex-col px-4 py-6 gap-8 ${bgGradient}  shadow-lg shadow-black/15
    `}>
      <div className=" flex flex-col gap-6">
        
        <div className="flex justify-center items-center  gap-4">
          <h3 className="text-black flex-1 text-2xl sm:text-3xl font-medium font-poppins">{title}
          </h3>
          <div className="flex">
            <img src={imgUrl} alt="bronze" width={65}/>
            <div className=" flex flex-col font-montserrat  text-xs justify-center">     
            </div>
          </div>
        </div>

        <span className='border-2 w-full border-[#6c3e04]'>

        </span>
          
      </div>

      <div 
        className=" text-center  items-center flex gap-6 flex-col ">

        <h4 className="text-xl sm:text-2xl font-medium uppercase font-poppins text-black">
          investimento
        </h4>
        
        <p className="sm:text-md flex gap-1  font-medium font-montserrat ">
          <span>de:</span>
          <span className="line-through font-bold text-[#6c3e04]">
            {initialValue}
          </span> 
          <span>por apenas</span>
        </p>

        <p className=" text-xl sm:text-3xl fon-bold text-black font-montserrat">
          <span className='text-sm font-semibold'>
             {parcels}x de</span> 
          <span className=" lg:text-5xl font-bold text-4xl "> 
            R${promoValue}
          </span> 
        </p>

        <p className="text-black text-sm font-montserrat">
          <span className='font-bold'> ou R${total.toFixed(2)} </span>a vista
        </p>

        <a target="_blank" href={paymentLink} className="py-4 px-10 bg-[#6c3e04] w-full max-w-80 uppercase text-xs text-slate-100 sm:text-sm md:text-lg font-bold font-montserrat"> quero fazer parte
        </a>

        <p className="flex justify-center gap-2 items-center font-montserrat">
          <img src="/assets/images/logo.png" alt="icone bilheteria" width={30}/>
          <span className="font-medium text-sm text-black">Jornada Governar</span> 
          <span className="font-light text-xs text-black">| faça parte</span>
        </p>

      </div>

      <div className=" flex justify-center">
        <ul className="flex lg:pl-10 flex-col  justify-center gap-4">
          {benefices.map((item:any) =>{
          return (
            <li key={item.benefice} className='flex gap-4 items-center font-montserrat'>
              <img src={item.iconSrc} alt="checkmark" width={15} />
              <p className='text-left'>{item.benefice}</p>
            </li>)
          })}
        </ul>
      </div>

    </article>
  )
}

export default PaymentCard