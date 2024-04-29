/* eslint-disable */
type TargetLayerProps ={
  iconSrc:string,
  content:string
  alt:string
}
const TargetLayers = ({iconSrc,content,alt}:TargetLayerProps) => {
  return (
    <article className=" font-montserrat max-w-40 w-full p-2 flex flex-col gap-4">
      <img src={iconSrc} alt={alt} width={20}/>
      <p className="text-slate-100 font-medium text-xs">{content}</p>
    </article>
  )
}

export default TargetLayers