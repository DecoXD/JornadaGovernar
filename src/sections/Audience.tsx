import AudienceCard from "@/components/shared/AudienceCard"
import { whoIsItFor, whoIsntItFor } from "@/constants"


const Audience = () => {
  return (
    <section className="flex justify-center items-center flex-col ">
      <div className="flex flex-col w-full max-w-4xl px-4   ">
        <h2 className="mb-20 mt-20 font-bold font-poppins text-center flex flex-col md:text-4xl  text-3xl"> 
        <span>quem 
          <span className="uppercase text-[#6c3e04]"> precisa</span>
        </span> 
        participar desse evento?</h2>

        <div className="flex flex-col  gap-4">
          {
            whoIsItFor.map((item) =>{
              return (
              <AudienceCard {...item} key={item.title}/>
            )
            })
          }
        </div>
      </div>

      <div className="flex flex-col w-full max-w-4xl p-4 ">
        <h2 className="mb-20 mt-20 font-bold font-poppins text-center flex flex-col md:text-4xl  text-3xl"> 
        <span>quem 
          <span className="uppercase text-[#6c3e04]"> não precisa</span>
        </span> 
        participar desse evento?</h2>

        <div className="flex flex-col gap-4">
          {
            whoIsntItFor.map((item) =>{
              return (
              <AudienceCard {...item} key={item.title}/>
            )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Audience