import { Link } from "react-router-dom"
import CardContainer from "../CarsContainer/CardContainer"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getdogs } from "../../redux/actions"


const Home = () => {

  const dispach = useDispatch()
    
  useEffect(()=>{
      dispach(getdogs())
  },[])

    return(
      <div>
        <h1>Home</h1>
        <Link to = "/Form">FORM</Link>
        <CardContainer/>
      </div>
    )
}

export default Home
