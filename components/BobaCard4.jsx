import styles from "../styles/BobaCard.module.css";
import Image from "next/image";

const BobaCard4 = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/boba4.png" alt="" width="500" height="500" />
            <h1 className={styles.title}> ORIGINAL BROWN SUGAR BOBA</h1>
            <span className={styles.price}>$5.99</span>
            <p className={styles.desc}>
                What is Brown Sugar Milk Tea? This drink is made from 3 ingredients,<br />
                tapioca pearls, caramelised brown sugar and milk. The original boba<br />
                drink from Taiwan does not contain any tea and is caffeine-free. <br />
                which translates to Brown Sugar Milk.
            </p>
        </div>
    )
}
export default BobaCard4