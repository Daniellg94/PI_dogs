import { Link } from "react-router-dom"
import styles from "./Card.module.css"

const Card = (props) => {
    

    return(
        <div className={styles.card}>
        <Link to ={`/dog/${props.id}`}>
        <p><img src={props.image} alt=""/></p>
        <footer>
        <h2>{props.name}</h2>
        <p>{props.weight}</p>
        <p className={styles.pe}>{props.temperament}</p>
        </footer>
        </Link>
        </div>
    )
}


export default Card