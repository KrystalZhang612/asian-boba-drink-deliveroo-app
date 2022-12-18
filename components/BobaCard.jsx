import styles from  "../styles/BobaCard.module.css";
import Image from "next/legacy/image"; 

const BobaCard = () =>{
    return (
        <div className ={styles.container}>
            <Image src = "/img/boba.png" alt ="" width ="500" height = "500"/>
            <h1 className = {styles.title}> MANGO PUDDING BOBA</h1>
            <span className = {styles.price}>$8.99</span>
            <p className = {styles.desc}>
            Mango pudding boba, the tapioca balls, is sweet and chewy. <br/>
            The drink, which includes the tapioca ball toppings, has an earthy<br/>
            flavour from the tea, but sweetness from the mango.<br/>
            With fresh egg puddings on the top bringing you great feelings!      
            </p>     
        </div>
    )
}
export default BobaCard; 
