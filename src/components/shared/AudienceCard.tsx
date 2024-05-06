type AudienceCardProps = {
  title:string,
  content:string
}

const AudienceCard = ({title,content}:AudienceCardProps) => {
  return (
    <div className="flex justify-between w-full items-center sm:flex-row flex-col  ">
      <h4 className="text-xl font-medium font-poppins text-center">{title}</h4>
      <div className=" border-l-2 font-montserrat bg-[#FFFEFA] border-l-[#6c3e04] max-w-96 p-4">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default AudienceCard