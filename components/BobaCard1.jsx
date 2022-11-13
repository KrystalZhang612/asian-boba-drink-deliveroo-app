import styles from  "../styles/BobaCard.module.css";
import Image from "next/image"; 

const BobaCard1 = () =>{
    return (
        <div className ={styles.container}>
            <Image src = "/img/boba1.png" alt ="" width ="500" height = "500"/>
            <h1 className = {styles.title}> MATCHA GREEN TEA BOBA</h1>
            <span className = {styles.price}>$6.99</span>
            <p className = {styles.desc}>
                The chewy tapioca pearls are made from partially cooked<br/> 
                tapioca flour, a starch extracted from the cassava root. Boba <br/>
                is gluten-free and flavorless and can be added to both hot and cold drinks.<br/>
                The boba is healthy and refreshing with strong Japanese matcha flavor. 
            </p>     
        </div>
    )
}
export default BobaCard1
