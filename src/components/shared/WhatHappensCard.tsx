type WhatHappensCardProps = {
  alt:string
  imageSrc:string
}

const WhatHappensCard = ({alt,imageSrc}:WhatHappensCardProps) => {
  return (
    <div className=" md:p-2 max-h-72">
      <img src={imageSrc} alt={alt} width={300} className="shadow-md h-full " />
     
    </div>
  )

}

export default WhatHappensCard