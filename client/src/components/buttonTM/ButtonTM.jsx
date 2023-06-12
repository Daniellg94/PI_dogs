import { useEffect, useState } from "react"
import styles from "./ButtonTM.module.css"
import lobo from "./lobo.png"
import perro from "./perro.png"


const ButtonTM = () => {
    const [theme, setTheme] = useState("dark");
    const [dark,setDark] = useState (true)
  
    useEffect(() => {
      document.body.setAttribute("data-theme", theme);
    }, [theme]);   
    
    const chageTheme = () => {
        let msg;      
       setTheme((preValue) => {
               if (preValue === 'dark') msg = "light";
               else msg = 'dark'
                 
               setDark(!dark)
               return msg
             });
           };

    return (
      <button className={styles.buttonTM} onClick={chageTheme}>
       {!dark? <img src={lobo} alt="" />: <img src={perro} alt="" style={{ filter: 'invert(100%)' }}/> }
      </button>
    );
  };

export default ButtonTM