import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detdogs } from "../../redux/actions"
import { useParams } from "react-router-dom"
import {images} from "../CarsContainer/CardContainer"
import styles from "./Detail.module.css"


const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dogsid = useSelector((state) => state.detDogs);

  useEffect(()=>{
    return(()=>dispatch(detdogs()))
  },[dispatch])

  useEffect(() => {
    dispatch(detdogs(id));
  }, [dispatch, id]);

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  if (dogsid.length===0) {
    return <div className={styles.loading}>
      <h2>Loading...</h2>
      <img src={randomImage} alt="" />
    </div>;
  }

  return (
    <div>
      <div className={styles.image}>
      <img src={dogsid.image} alt="" />
      <footer>
      <h1>{dogsid.name}</h1>
      </footer>
      </div>
      <div className={styles.params}>
      <h3>height in cm:{dogsid.height}</h3>
      <h3>weight in kg:{dogsid.weight}</h3>
      </div>
      <div className={styles.dates}>
      <h3>{dogsid.life_span}</h3>
      <label htmlFor=""><h3>temperaments:</h3></label>
      <h3> {dogsid.temperament}</h3>
      <h4>{dogsid.id}</h4>
      </div>
    </div>
  );
};

export default Detail;