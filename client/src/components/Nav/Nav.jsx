import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { getdogs } from "../../redux/actions"
import SearchBar from "../SearchBar/SearchBar"
import styles from "./nav.module.css"
import Hause from "./Hause.png"
import Dog from "./Dog.png"
import Bone from "./Bone.png"

const Nav = () => {

    const dispach = useDispatch()
    
    const homehandler = () => {
        dispach(getdogs())
    }

    return(
    <div className={styles.navBar}>
        <div className={styles.button}>
        <Link to = "/"><button><img src={Dog} alt="" /></button></Link>
        <Link to = "/dogs"><button onClick={homehandler}><img src={Hause} alt="" /></button></Link>
        <Link to = "/Form"><button><img src={Bone} alt="" /></button></Link>
        </div>
        <SearchBar/>
    </div>
    )
}

export default Nav