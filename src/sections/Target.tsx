import TargetLayer from "@/components/shared/TargetLayer"
import { targetLayerItems } from "@/constants"
import React, { ReactNode } from "react"
/* eslint-disable */

const Target = ({}) => {
  return (
    <section className="min-h-screen p-4 bg-black flex items-center justify-center w-full ">
   
      <div className=" bg-[#201f1b] max-w-6xl w-full p-2 py-16 gap-12 rounded-xl flex justify-around md:flex-row flex-col md:items-start items-center relative">

        <div className="absolute h-8 w-8 flex justify-center items-end p-1 bg-black top-[-20px] rounded-full ">
          <img 
            src="/assets/icons/arrow-down.svg" 
            alt="arrow-down" 
            className="animate-bounce" 
            width={10}/>
        </div>

        <div className="min-w-26">
          <p className="text-yellow-400 font-medium text-3xl">serve para você?</p>
          <h2 className="text-slate-100 font-medium text-4xl">para quem é?</h2>
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