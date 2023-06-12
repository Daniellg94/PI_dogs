import { Link } from "react-router-dom"
import styles from "./Landing.module.css"

const Landing = () => {

    return(
     <div className={styles.landing}>
     <Link to="/dogs"><button>WELCOME TO DOGS</button></Link>
     </div>
     
    )
}

export default Landing