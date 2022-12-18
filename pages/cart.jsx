import styles from "../styles/cart.module.css";
import Image from "next/legacy/image"; 

const cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <tr className={styles.trTitle}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/boba.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>MANGO PUDDING BOBA</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double egg puddings, extra sweeteners.
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$8.9</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$17.8</span>
                            </td>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/boba1.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>MATCHA GREEN TEA BOBA</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Extra Redbeans on the top please!
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$8.9</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$17.8</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/boba3.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>STRAWBERRY MILK TEA</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    30% Sugar please! My diabetes are beknocking!
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$8.9</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$17.8</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src="/img/boba4.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>BROWN SUGAR BOBA</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    I need 3 extra straws please!!! thanks!
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$8.9</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$17.8</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal: </b>$71.20
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount: </b>$3.20
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total: </b>$68.00
                    </div>
                    <button className={styles.button}>CHECK OUT NOW!</button>
                </div>
            </div>
        </div>
    );
};
export default cart; 
