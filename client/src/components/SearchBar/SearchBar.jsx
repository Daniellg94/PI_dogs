import { useState } from "react"
import { useDispatch } from "react-redux"
import { Searchdogs } from "../../redux/actions"
import styles from "./SearchBar.module.css"
import { Link } from "react-router-dom"


const SearchBar = () =>{

    const dispach = useDispatch()
    const [search, setSearch] = useState("")

    const handledsearch = ()=>{
        dispach(Searchdogs(search))
    }

    return(
        <div className={styles.search}>
            <Link to="/dogs"><input type="search" value={search} onChange={(event)=> setSearch(event.target.value)} /></Link>
            <button onClick={handledsearch}>search</button>
        </div>
    )
}

export default SearchBar