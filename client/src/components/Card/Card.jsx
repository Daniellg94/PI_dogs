/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import axios from "axios"
import { useDispatch } from "react-redux"
import { deleter } from "../../redux/actions"

const Card = (props) => {

    const dispach = useDispatch()
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const hablderDelete = async (event) => {     
        if (uuidRegex.test(event.target.value)) {
          const deleted = await axios.delete(`https://daniel-pi-dogs.onrender.com/dogs/${event.target.value}`);
          dispach(deleter(event.target.value));
        } else {
          alert("Este perro no pertenece a la base de datos");
        }
      };

    return(
        <div className={styles.card}>
        {uuidRegex.test(props.id)&&<button value={props.id} onClick={hablderDelete}>x</button>}
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