import TargetLayer from "@/components/shared/TargetLayer"
import { targetLayerItems } from "@/constants"

/* eslint-disable */

const Target = ({}) => {
  return (
    <section className="min-h-[80vh] p-4 bg-[#FFFEFA] flex items-center justify-center w-full  ">
   
      <div className=" bg-[#f2eee9] max-w-6xl w-full p-2 py-16 gap-12 rounded-xl flex justify-around md:flex-row flex-col md:items-start items-center relative shadow-lg shadow-black/40">

        <div className="absolute h-8 w-8 flex justify-center items-end p-1 bg-[#FFFEFA] top-[-20px] rounded-full ">
          <img 
            src="/assets/icons/arrow-down.svg" 
            alt="arrow-down" 
            className="animate-bounce" 
            width={10}/>
        </div>

        <div className="min-w-26">
          <p className="text-[#6c3e04] font-bold text-3xl font-poppins">serve para você?</p>
          <h2 className="text-black font-bold  text-4xl font-poppins">para quem é?</h2>
        </div>
        
        <div className="flex">
          {
          targetLayerItems.map((item,idx):JSX.Element =>{
           return <TargetLayer {...item} key={idx}/>
          })
        }
        </div>
        
      </div>
    </section>
  )
}

export default Target