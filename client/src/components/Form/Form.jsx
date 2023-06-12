import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTemp } from "../../redux/actions"
import axios from "axios"
import Validations from "./validations/validations"
import { Link } from "react-router-dom"
import styles from "./Form.module.css"
import Home from "./Hause.png"

const Form = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({
      title: '',
      message: '',
    });
    const temperaments = useSelector(state=>state.temperaments)
    const dispach = useDispatch()
    useEffect(()=>{
        dispach(getTemp())
      },[dispach])

    const [newDog, setNewDog] = useState({
        name:"",
        height:"",
        minheight:"",
        maxheight:"",
        weight:"",
        minweight:"",
        maxweight:"",
        life_span:"",
        minlife_span:"",
        maxlife_span:"",
        temperament:[],
        image:""
    })

    const [errors, setErrors] = useState({
        name:"",
        height:"",
        minheight:"",
        maxheight:"",
        weight:"",
        minweight:"",
        maxweight:"",
        life_span:"",
        minlife_span:"",
        maxlife_span:"",
        temperament:[],
        image:""
    })


    useEffect(() => {
        if (newDog.minheight && newDog.maxheight) {
          const height = `${newDog.minheight} - ${newDog.maxheight}`;
          setNewDog((prevState) => ({
            ...prevState,
            height: height,
          }));
        }
        if (newDog.minweight && newDog.maxweight) {
            const weight = ` ${newDog.minweight} - ${newDog.maxweight}`;
            setNewDog((prevState) => ({
              ...prevState,
              weight: weight,
            }));
          } else {
          }
          if (newDog.minlife_span && newDog.maxlife_span) {
            const life_span = ` ${newDog.minlife_span} - ${newDog.maxlife_span} years`;
            setNewDog((prevState) => ({
              ...prevState,
              life_span: life_span,
            }));
          }
         /* setNewDog((prevState) => ({
            ...prevState,
            weight:"",
            height:"",
            life_span:""
          }));*/
      }, [newDog.minheight, newDog.maxheight, newDog.minweight, newDog.maxweight, newDog.minlife_span, newDog.maxlife_span]);

    const handlerchange = (event) =>{
        setNewDog({
            ...newDog,
        [event.target.name]: event.target.value,
        })
        setErrors(
            Validations({
                ...newDog,
                [event.target.name]: event.target.value,
            })
        )
    }
    const handlerRatings = (event) =>{
        const rating = parseFloat(event.target.value)
        if (!isNaN(rating) && rating >= 0){
            setNewDog({
                ...newDog,
                [event.target.name]: event.target.value,
            })
        }
        setErrors(
            Validations({
                ...newDog,
                [event.target.name]: event.target.value,
            })
        )

    }


    const addTemperament = (event) =>{
        const selectedTemperament = temperaments.find((temp)=>temp.name === event.target.value)
        if(selectedTemperament&& !newDog.temperament.includes(selectedTemperament)){
            setNewDog((prevState)=>({
                ...prevState,
                temperament:[...prevState.temperament,selectedTemperament]
            }))
        }
        setErrors(
            Validations({
                ...newDog,
                [event.target.name]: event.target.value,
            })
        )
    }

    
    const removeTemperament = (temperament) => {
        setNewDog((prevState) => ({
          ...prevState,
          temperament: prevState.temperament.filter((tem) => tem !== temperament),
        }));
      }

    
      const handlesumit = (event) => {
        event.preventDefault();
    
        const postdog = 'http://localhost:3001/dogs';
    
        axios
          .post(postdog, newDog)
          .then((res) => {
            setPopupContent({
              title: 'Great',
              message: 'the dog has been posted',
            });
            setShowPopup(true);
    
            setNewDog({
              name: '',
              height: '',
              minheight: '',
              maxheight: '',
              weight: '',
              minweight: '',
              maxweight: '',
              life_span: '',
              minlife_span: '',
              maxlife_span: '',
              temperament: [],
              image: '',
            });
          })
          .catch((error) => {
            setPopupContent({
              title: 'Error',
              message: 'the dog already exists ',
            });
            setShowPopup(true);
          });
      };
      
    return(
        <div>
            <div className={styles.button}>
                <Link to= "/dogs"><button><img src={Home} alt="" /></button></Link>
            </div>
        <form onSubmit={handlesumit} className={styles.Form}>
            <label htmlFor="name">Dog name</label>
            <input type="text" name="name" placeholder="Dog name" value={newDog.name} onChange={handlerchange}/>
            <div className={styles.error}>{errors.name && <p>{errors.name}</p>}</div>
            <br />
            <label htmlFor="height">height in cm</label>
            <div className={styles.height}>
            <input type="number" name="minheight" placeholder="min" value={newDog.minheight} onChange={handlerRatings}/>-
            <input type="number" name="maxheight" placeholder="max" value={newDog.maxheight} onChange={handlerRatings}/>
            </div>
            <div className={styles.error} >{errors.height && <p>{errors.height}</p>}</div>
            <br />
            <label htmlFor="text">weight in kg</label>
            <div className={styles.weight}>
            <input type="number" name="minweight" placeholder="min" value={newDog.minweight} onChange={handlerRatings}/>
            -
            <input type="number" name="maxweight" placeholder="max" value={newDog.maxweight} onChange={handlerRatings}/>
            </div>
            <div className={styles.error}>{errors.weight && <p>{errors.weight}</p>}</div>
            <br />
            <label htmlFor="text">life span</label>
            <div className={styles.life_span}>
            <input type="number" name="minlife_span" placeholder="min" value={newDog.minlife_span} onChange={handlerRatings}/>
            -
            <input type="number" name="maxlife_span" placeholder="max" value={newDog.maxlife_span} onChange={handlerRatings}/>
            </div >
            <div className={styles.error}>{errors.life_span && <p>{errors.life_span}</p>}</div>
            <br />
            <label htmlFor="temperament">select temperament</label>
            <select name="text" id="temperament" value={newDog.temperament.map(temp=>temp.name)} onChange={addTemperament}>
                <option value="">temperament</option>
                {temperaments.map((temp)=>(
                    <option value={temp.name} key={temp.id}>{temp.name}</option>
                ))}
            </select>
            <br />
            <label htmlFor="">selected temperament</label>
            <div className={styles.temps}>
                {newDog.temperament.map((temp)=>(
                    <div>{temp.name}<button onClick={() => removeTemperament(temp)}>X</button></div>
                ))
                }
            </div>
            <div className={styles.error}>{errors.temperament && <p>{errors.temperament}</p>}</div>
            <label htmlFor="image">Image:</label>
            <input type="text" name="image" value={newDog.image} onChange={handlerchange} />
            <div className={styles.error}>{errors.image && <p>{errors.image}</p>}</div>
            <br />
            <button type="submit" disabled={Object.keys(errors).length > 0} className={styles.send}> send dog</button>
        </form>

        {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <button onClick={() => setShowPopup(false)}>x</button>
            <h2>{popupContent.title}</h2>
            <p>{popupContent.message}</p>
          </div>
        </div>)}
        </div>
    )
}

export default Form