import styles from "../styles/Footer.module.css";
import Image from "next/legacy/image"; 

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" objectFit="cover" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}></div>
                <h2 className={styles.motto}>
                    OH YES, WE DID. THE KRYSTAL BOBA,
                    WELL BLENDED REFRESHING CUP OF BOBA.
                </h2>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR BOBA SHOP</h1>
                    <p className={styles.text}>
                        3638 R. Nob Hill Street #304.
                        <br /> San Francisco, 94105
                        <br /> (415) 555-7372
                    </p>
                    <p className={styles.text}>
                        8733 W. Russian Hill Street #125.
                        <br /> San Francisco, 94103
                        <br /> (628) 555-3732
                    </p>
                    <p className={styles.text}>
                        7733 B. Marina Hill Street #667.
                        <br /> San Francisco, 94109
                        <br /> (415) 555-7323
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY TO FRIDAY
                        <br /> 9:00 - 23:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY TO SUNDAY
                        <br /> 12:00 - 22:00
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer
