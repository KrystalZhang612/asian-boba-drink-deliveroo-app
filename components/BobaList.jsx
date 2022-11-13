import styles from "../styles/BobaList.module.css";
import BobaCard from "./BobaCard"; 
import BobaCard1 from "./BobaCard1"; 
import BobaCard2 from "./BobaCard2"; 
import BobaCard3 from "./BobaCard3"; 
import BobaCard4 from "./BobaCard4"; 
import BobaCard5 from "./BobaCard5"; 
import BobaCard6 from "./BobaCard6"; 
import BobaCard7 from "./BobaCard7"; 

const BobaList = (bobaList) => {
    return (
        <div className = {styles.container}>
            <h1 className={styles.title}> THE BEST BOBA IN SAN FRANCISCO!</h1>
            <p className={styles.desc} align = "center">
                Our boba drinks are natural and refreshing <br/>
                We use sugar-free artifcial sweeteners<br/>
                We select only fresh and natural ingredients!<br/>
                May you enjoy the fantastic taste of freshness of the Krystal Boba! 
            </p>
            <div className = {styles.wrapper}>
                <BobaCard/>
                <BobaCard1/>   
                <BobaCard2/> 
                <BobaCard3/>
                <BobaCard4/>
                <BobaCard5/> 
                <BobaCard6/> 
                <BobaCard7/> 
                              
            </div>     
        </div>
    )
}
export default BobaList 
