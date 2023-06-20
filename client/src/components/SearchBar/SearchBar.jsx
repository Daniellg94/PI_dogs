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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          handledsearch();
        }
      };

    return(
        <div className={styles.search}>
            <input type="search" value={search} onChange={(event)=> setSearch(event.target.value) } onKeyDown={handleKeyDown} />
            <Link to="/dogs"><button onClick={handledsearch}>search</button></Link>
        </div>
    )
}

export default SearchBar