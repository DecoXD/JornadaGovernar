type SponsorsCardProps = {
  brand:string
  imageSrc:string
}

const SponsorsCard = ({brand,imageSrc}:SponsorsCardProps) => {
  return (
    <div className=" md:p-2">
      <img src={imageSrc} alt={brand} width={200} className="shadow-md " />
     
    </div>
  )
}

export default SponsorsCard