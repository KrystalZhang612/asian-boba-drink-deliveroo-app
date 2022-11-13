import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react"; 

const Product = () => {
    const [size, setSize] = useState(0); 
    const boba = {
        id: 1,
        img: "/img/boba.png",
        name: "MANGO PUDDING BOBA",
        price: [8.9, 10.9, 12.9],
        desc: "Milk tea with fresh mango pudding and red bean on top. "
    };
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={boba.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className = {styles.title}>{boba.name}</h1>
                <span className = {styles.price}>${boba.price[size]}</span>
                <p className = {styles.desc}>{boba.desc}</p>
                <h3 className = {styles.choose}>Choose the size</h3>
                <div className = {styles.sizes}>
                    <div className = {styles.size} onClick = {()=> setSize(0)}>
                        <Image src = "/img/size.png" layout = "fill" alt =""/> 
                        <span className = {styles.number}>Small</span>
                    </div>
                    <div className = {styles.size} onClick = {()=> setSize(1)}>
                        <Image src = "/img/size.png" layout = "fill" alt = ""/>
                        <span className = {styles.number}>Medium</span>
                    </div>
                    <div className = {styles.size} onClick = {()=> setSize(2)}>
                        <Image src = "/img/size.png" layout = "fill" alt =""/> 
                        <span className = {styles.number}>Large</span>
                    </div>
                </div>
                <h3 className = {styles.choose}> Choose additional toppings!</h3>
                <div className = {styles.ingredients}>
                    <div className = {styles.option}>
                        <input
                         type ="checkbox" 
                         id = "redbeans" 
                         name = "redbeans"
                         className = {styles.checkbox}
                        />
                        <label htmlFor = "redbeans" >Redbeans</label>
                    </div>

                    <div className = {styles.option}>
                        <input
                         type ="checkbox" 
                         id = "eggpudding" 
                         name = "eggpudding"
                         className = {styles.checkbox}
                        />
                        <label htmlFor = "eggpudding" >Egg Puddings</label>
                    </div>

                    <div className = {styles.option}>
                        <input
                         type ="checkbox" 
                         id = "honeypearls" 
                         name = "honeypearls"
                         className = {styles.checkbox}
                        />
                        <label htmlFor = "honeypearls" >Honey Pearls</label>
                    </div>

                    <div className = {styles.option}>
                        <input
                         type ="checkbox" 
                         id = "coconutjelly" 
                         name = "coconutjelly"
                         className = {styles.checkbox}
                        />
                        <label htmlFor = "coconutjelly" >Coconut Jelly</label>
                    </div>

                    <div className = {styles.option}>
                        <input
                         type ="checkbox" 
                         id = "crushedoreos" 
                         name = "crushedoreos"
                         className = {styles.checkbox}
                        />
                        <label htmlFor = "crushedoreos" >Crushed Oreos</label>
                    </div>

                    <div className = {styles.option}>
                        <input
                         type ="checkbox" 
                         id = "whippedcream" 
                         name = "whippedcream"
                         className = {styles.checkbox}
                        />
                        <label htmlFor = "whippedcream" >Whipped Cream</label>
                    </div>
                </div>
                <div className = {styles.add}>
                    <input type = "number" defaultValue={1} className = {styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>

                </div>
            </div>
        </div>
    );
};
export default Product; 