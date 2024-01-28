import { ReactEventHandler, ReactNode } from "react"

 
interface ButtonProps{
    Handleclik:ReactEventHandler,
    classButton:string
    children:ReactNode
     

}


function Button({Handleclik,classButton ,children}:ButtonProps) {
  return (
    <button onClick={Handleclik} className={classButton}>
         {children}

    </button>
  )
}

export default Button