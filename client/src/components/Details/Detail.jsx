import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { detdogs } from "../../redux/actions"
import { useParams } from "react-router-dom"


const Detail = () => {

  const dispach = useDispatch()
  const {id} = useParams()
  
  

  useEffect(()=>{
    dispach(detdogs(id))
  },[dispach,id])



    return(

      <div><h1>hola Detail</h1></div>
    )
}

export default Detail