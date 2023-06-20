import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { detdogs } from "../../redux/actions"
import { useParams } from "react-router-dom"
import {images} from "../CarsContainer/CardContainer"
import styles from "./Detail.module.css"
import { Link } from "react-router-dom"
import pata from "./pata.png"

const Detail = () => {

  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
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
      <h3>height cm: {dogsid.height.metric}</h3>
      <h3>height in: {dogsid.height.imperial}</h3>
      <h3>weight kg: {dogsid.weight.metric}</h3>
      <h3>weight lb: {dogsid.weight.imperial}</h3>
      </div>
      <div className={styles.dates}>
      <h3>{dogsid.life_span}</h3>
      <label htmlFor=""><h3>temperaments:</h3></label>
      <h3> {dogsid.temperament}</h3>
      <h4>{id}</h4>
      {uuidRegex.test(id)?<Link to={`./${id}`}><button><img src={pata} alt="" /></button></Link>:<div></div>}
      </div>
    </div>
  );
};

export default Detail;