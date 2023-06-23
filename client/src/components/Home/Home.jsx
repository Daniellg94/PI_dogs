
import CardContainer from "../CarsContainer/CardContainer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { filtDogs, filtapi, getTemp, getdogs, orderDog, orderWeight } from "../../redux/actions"
import styles from "./Home.module.css"

const Home = () => {

  const [color,setColor] = useState(null)

  const dispach = useDispatch()
    
  useEffect(()=>{
      dispach(getdogs())
  },[dispach])

  useEffect(()=>{
    console.log(color)
  },[color])

  
  const handlerOrder = (event) =>{
    setColor(event.target.value)
    dispach(orderDog(event.target.value))
  }
  const handlerweight = (event) =>{
    setColor(event.target.value)
    dispach(orderWeight(event.target.value))
  }

  const hablderfilter = (event)=>{
    dispach(filtDogs(event.target.value))
  }

  const hablderApi = (event) =>{
    setColor(event.target.value)
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
        <button onClick={handlerOrder} value="A" className={color==="A"?styles.colorfokus:""}>A-Z</button>
        <button onClick={handlerOrder} value="Z" className={color==="Z"?styles.colorfokus:""}>Z-A</button>
        <button onClick={handlerweight} value = "10" className={color==="10"?styles.colorfokus:""}>weight up</button>
        <button onClick={handlerweight} value = "1" className={color==="1"?styles.colorfokus:""}>weight down</button>
        <button onClick={hablderApi} value="6e8bc430-9c3a-11d9-9669-0800200c9a66" className={color==="6e8bc430-9c3a-11d9-9669-0800200c9a66"?styles.colorfokus:""}>DB Dogs</button>
        <button onClick={hablderApi} value="123" className={color==="123"?styles.colorfokus:""}>API Dogs</button>
        </div>
        <div className={styles.cards}>
        <CardContainer/>
        </div>
      </div>
    )
}

export default Home
