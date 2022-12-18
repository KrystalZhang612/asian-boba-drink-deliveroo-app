import styles from "../styles/BobaCard.module.css";
import Image from "next/legacy/image"; 

const BobaCard3 = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/boba3.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> STRAWBERRY CRUSHED BOBA</h1>
            <span className={styles.price}>$7.99</span>
            <p className={styles.desc}>
                The main ngredients of strawberry boba balls are water, strawberry <br />
                juice, sugar, calcium lactate, malic acid, artificial coloring, fruit<br />
                flavorings, and seaweed extracts which form the outer wall or skin.<br />
                Which makes strong strawberries flavor splurging in the drink!
            </p>
        </div>
    )
}
export default BobaCard3; 
