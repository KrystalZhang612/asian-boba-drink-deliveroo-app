import styles from "../styles/BobaCard.module.css";
import Image from "next/legacy/image";

const BobaCard6 = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/boba6.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> JASMINE GREEN TEA BOBA</h1>
            <span className={styles.price}>$7.99</span>
            <p className={styles.desc}>
                The flavor of jasmine milk tea could best be described <br />
                as floral, delicate, and slightly sweet. However, this can vary<br />
                widely depending on the tea variety you are drinking and how well you brewed <br />
                it. To enjoy this drink to its fullest, learn more about its history.
            </p>
        </div>
    )
}
export default BobaCard6; 
