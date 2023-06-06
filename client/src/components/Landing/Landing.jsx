import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getdogs } from "../../redux/actions"

const Landing = () => {

    const dispach = useDispatch()
    
    useEffect(()=>{
        dispach(getdogs())
    },[])

    return(
     <div><h1>Landing</h1>
     <Link to="/dogs"><button>DOGS</button></Link>
     </div>
     
    )
}

export default Landing