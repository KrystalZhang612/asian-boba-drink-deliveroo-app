import styles from  "../styles/BobaCard.module.css";
import Image from "next/legacy/image"; 

const BobaCard2 = () =>{
    return (
        <div className ={styles.container}>
            <Image src = "/img/boba2.png" alt ="" width ="500" height = "500"/>
            <h1 className = {styles.title}> TARO OREO BOBA</h1>
            <span className = {styles.price}>$8.99</span>
            <p className = {styles.desc}>
              In boba or taro ice cream, taro has a vanilla-like taste. But <br/>
              the root itself is mild and quite bland. What does taro taste like? <br/>
              Taro has a very mild nutty taste. When mixed with sugar it is sweet and <br/>
              it has an earthy, starchy texture. It is the most popular drink! 
            </p>     
        </div>
    )
}
export default BobaCard2; 
