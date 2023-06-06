import {useDispatch, useSelector,} from "react-redux"
import Card from "../Card/Card"
import { useEffect } from "react"
import { getdogs } from "../../redux/actions"


const CardContainer = () => {

    const dogs=useSelector((state)=>state.getDogs)

    const dispach = useDispatch()
    
    useEffect(()=>{
        if(!dogs.length)
        dispach(getdogs())
    },[])

    return(
        <div>
            {dogs.length && dogs.map((dog)=>(
                <Card
                key={dog.id}
                id={dog.id}
                name={dog.name}
                weight={dog.weight}
                image={dog.image}
                temperament={dog.temperament}
                />
            ))}

        </div>
    )
}

export default CardContainer