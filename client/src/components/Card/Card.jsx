import { Link } from "react-router-dom"

const Card = (props) => {
    

    return(
        <div>
        <Link to ={`/dog/${props.id}`}>
        <p><img src={props.image} alt="" /></p>
        <p>{props.name}</p>
        <p>{props.weight}</p>
        <p>{props.temperament}</p>
        </Link>
        </div>
    )
}


export default Card