 

interface LogroProps{
    setImagenes:(value:string)=>void
    imagenes:string
    ImgUrl:string
}

function LogroCambio({setImagenes,imagenes,ImgUrl}:LogroProps) {
    const handleClick = ()=>{
        setImagenes(ImgUrl)
    }
  return (
    <button className={`${imagenes === ImgUrl && "border-orange-600"} border-2 rounded-5xl bg-fondo h-[250px] max-md:w-full `}  onClick={handleClick}>
        <img src={ImgUrl} alt="" width={250} className="p-3" />
    </button>
  )
}

export default LogroCambio