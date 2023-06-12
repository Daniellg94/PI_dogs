import {useSelector,} from "react-redux"
import Card from "../Card/Card"
import { useEffect, useState } from "react"
import styles from "./CardContainer.module.css"
import D1 from "./1.gif"
import D2 from "./2.gif"
import D3 from "./3.gif"
import D4 from "./4.gif"
import D5 from "./5.gif"
import D6 from "./6.gif"

export const images = [D1,D2,D3,D4,D5,D6]

const CardContainer = () => {

    const dogs=useSelector((state)=>state.getDogs)
    const filtDogs=useSelector((state)=>state.filterDogs)

    const display = filtDogs.length > 0? filtDogs:dogs

    const [currentPage, setCurrentPage] = useState(1);
    const [currentDogs, setCurrentDogs] = useState([]);
  
    const dogsPerPage = 8;

    useEffect(()=>{
        return(()=>(
        setCurrentPage(1)))
      },[display])
  
    useEffect(() => {
      const indexOfLastDog = currentPage * dogsPerPage;
      const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  
      const dogsToShow = display.slice(indexOfFirstDog, indexOfLastDog);
  
      setCurrentDogs(dogsToShow);
    }, [currentPage, display]);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    if(currentDogs.length===0){
      return(
        <div className={styles.loading}>
          <h2>loading...</h2>
          <img src={randomImage} alt="" />
        </div>
      )
    }

    return(
        <div className={styles.cardscontainer}>
            {currentDogs?.map((dog)=>(
                <Card
                key={dog.id}
                id={dog.id}
                name={dog.name}
                weight={dog.weight}
                image={dog.image}
                temperament={dog.temperament}
                />
            ))}

        <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationbuton}
        >
          Back
        </button>
        {Array.from({ length: Math.ceil(display.length / dogsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${currentPage === index + 1 ? styles.active : styles.paginationbuton}`}
          >
            {index + 1}
        </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(display.length / dogsPerPage)}
          className={styles.paginationbuton}
        >
          Next
        </button>
        </div>

        </div>
    )
}

export default CardContainer