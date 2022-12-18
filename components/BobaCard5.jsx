import styles from "../styles/BobaCard.module.css";
import Image from "next/legacy/image"; 

const BobaCard5 = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/boba5.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> THAI MILK TEA BOBA</h1>
            <span className={styles.price}>$6.99</span>
            <p className={styles.desc}>
                Thai Tea is is made from strongly-brewed black tea, often spiced<br />
                with ingredients such as star anise, crushed tamarind, cardamom, <br />
                and occasionally others as well (often making this beverage a favorite<br />
                among masala chai tea fans). This brew is then sweetened with sugar
            </p>
        </div>
    )
}
export default BobaCard5; 
