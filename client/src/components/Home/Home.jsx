
import CardContainer from "../CarsContainer/CardContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { filtDogs, filtapi, getTemp, getdogs, orderDog, orderWeight } from "../../redux/actions"
import styles from "./Home.module.css"

const Home = () => {

  const dispach = useDispatch()
    
  useEffect(()=>{
      dispach(getdogs())
  },[dispach])

  const handlerOrder = (event) =>{
    dispach(orderDog(event.target.value))
  }
  const handlerweight = (event) =>{
    dispach(orderWeight(event.target.value))
  }

  const hablderfilter = (event)=>{
    dispach(filtDogs(event.target.value))
  }

  const hablderApi = (event) =>{
    dispach(filtapi(event.target.value))
  }

  const temperaments = useSelector(state=>state.temperaments)

  useEffect(()=>{
    dispach(getTemp())
  },[dispach])

    return(
      
      <div className={styles.home}>
        <div className={styles.buttons}>
        <select name="temperaments" onChange={hablderfilter}>
        <option value="">temperaments</option>
        {temperaments.map((temp)=>(
          <option key={temp.id} value={temp.name}>{temp.name}</option>
        ))}
        </select>
        <button onClick={handlerOrder} value="A">A-Z</button>
        <button onClick={handlerOrder} value="Z">Z-A</button>
        <button onClick={handlerweight} value = "10">weight up</button>
        <button onClick={handlerweight} value = "1">weight down</button>
        <button onClick={hablderApi} value="6e8bc430-9c3a-11d9-9669-0800200c9a66">DB Dogs</button>
        <button onClick={hablderApi} value="123">API Dogs</button>
        </div>
        <div className={styles.cards}>
        <CardContainer/>
        </div>
      </div>
    )
}

export default Home
