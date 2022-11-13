import styles from "../styles/BobaCard.module.css";
import Image from "next/image";

const BobaCard7 = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/boba7.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> OREO SLUSH BOBA</h1>
            <span className={styles.price}>$7.99</span>
            <p className={styles.desc}>
                We take Oreos and enhance the flavor with premium Hershey's chocolate <br />
                and vanilla syrups. Blend it all together and you get a creamy,<br />
                cookies and cream dream! <br />
                The strong oreo chips flavor will make you go insane!
            </p>
        </div>
    )
}
export default BobaCard7
