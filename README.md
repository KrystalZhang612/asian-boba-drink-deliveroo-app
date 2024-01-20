# Asian-Boba-Drink-Deliveroo-App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). A responsive Full-Stack Asian-Boba-delivering website using Next.js and MongoDB. This project contains a frontend-side, which are a homepage, product pages, cart total & a payment selection page to submit name & address & phone number details & checkout, with data fetched from MongoDB integration, and a backend-side Admin Dashboard as a merchant to receive payments. The user can choose any size, additional toppings and quantities into carts. The JS Redux library helps increase quantity numbers, and the PayPal library helps generate fake transactions. The amount increases immediately as the user makes a purchase. ***I have learned Next.js, MongoDB integration, server-side rendering, and tremendous knowledge of how to use cookies for authentication from implementing this project.*** 
## ***[Copyright and Commercial Use Disclaimer](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#asian-boba-drink-deliveroo-appapp-overview)***
⏬

### ***Please carefully read [LICENSE.md](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/LICENSE) about the Open Source restrictions and the personal use policy of this project under [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.en.html), any commericial uses on this project by other than the owner [@KrystalZhang612](https://github.com/KrystalZhang612) or the authorized users and organizations, will be subjected to copyright violation with sebsequent potential legal concerns.***

## Asian Boba Drink Deliveroo AppApp Overview: 
<img width = "1691" alt ="Asian Boba Drink Deliveroo App Overview-1" src ="https://user-images.githubusercontent.com/72481348/201518543-33109de2-196f-4154-b8a4-b67d1e46b1b2.mov"/> 

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-2" src="https://user-images.githubusercontent.com/72481348/201518554-5326f948-e703-4b26-bcbd-b77e5b4f0e3a.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-3" src="https://user-images.githubusercontent.com/72481348/201518621-50cfd28d-4f46-4f96-b2ee-527e10ceff72.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-4" src="https://user-images.githubusercontent.com/72481348/201518630-a4cd9eae-6514-43b6-8644-6f735c747800.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-5" src="https://user-images.githubusercontent.com/72481348/201518635-191aa9bf-9636-479a-ac41-7368e858dad3.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-6" src="https://user-images.githubusercontent.com/72481348/201518650-b6e53e0c-ac3c-49da-bb74-1e9f3bf3ffaf.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-7" src="https://user-images.githubusercontent.com/72481348/201518654-44b15b74-9380-4be4-adcb-49d644c0348b.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-8" src="https://user-images.githubusercontent.com/72481348/201518663-834a08d0-8f5b-4aa3-9082-37b38be25c2c.png">

<img width="1691" alt="Asian Boba Drink Deliveroo App Overview-9" src="https://user-images.githubusercontent.com/72481348/201518668-330ed116-1392-44f0-bc77-edf17c6a58a2.png">

<img width = "1691" alt = "Asian Boba Drink Deliveroo App Overview-10" src = "https://user-images.githubusercontent.com/72481348/201518765-2aa47774-2d92-40b0-8c5e-32d034d5e957.mov"> 


# Build
[Method to Run & Test the Project Locally](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#method-to-run--test-the-project-locally)<br/> 
[Prerequisites & Setups](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#prerequisites--setups)<br/> 
[Debugging&Troubleshooting](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#debuggingtroubleshooting)<br/> 
[Synchronous Developing Notes](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#synchronous-developing-notes)<br/> 
[Testing Result](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#testing-result)<br/> 
[Tags and Topics](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#tags-and-topics) 
# Contribution
[Author](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md#author)
# Functionalities/Demo
- A nice slider on top to show the list of boba drinks and their features.
- In the cart page, the user can view what products they have chosen.
- There are two checkout options when the user clicks to pay: Cash on delivery or PayPal.
- The customer will be redirected to the order status page to track after submitting payment. - The user can see all their previous orders and their payment statuses: paid/unpaid.
- As the merchant/Admin, we can always add new items(new boba drinks) to the homepage.

# Compatibility
|  Browsers          | Supported          |
| -------            | ------------------ |
| Google Chrome      | :white_check_mark: |
| Microsoft Edge     | :white_check_mark: |
| Firefox            | :white_check_mark: |
| Apple Safari       | :white_check_mark: |
| Opera              | :white_check_mark: |
| DuckDuckGo         | :white_check_mark: |

# Method to Run & Test the Project Locally

### First, run the development server:
### Run `npm install` to initialize node.js
### `npm run dev` or `yarn dev`
Create a new file named `.env`in the project root directory: 
```env
MONGO_URL = mongodb+srv://YOUR-OWN-MONGO-CLUSTER-USERNAME:YOUR-OWN-MONGO-CLUSTER-PASSWORD@cluster0.iz5m7np.mongodb.net/?retryWrites=true&w=majority
```
Replace `YOUR OWN MONGO CLUSTER USERNAME` and `YOUR OWN MONGO CLUSTER PASSWORD` with your own username and password obtained from MongoDB. 
### Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
### Homepage: http://localhost:3000/ 
### Product Page: http://localhost:3000/product/213 
### Cart Page: http://localhost:3000/cart
### Order Delivery Status: http://localhost:3000/orders/21
#  🛠️  Developing Languages, Tools, and Techniques Needed
[Vscode 1.73.1](https://code.visualstudio.com/updates/v1_73)<br/> 
[Next.JS](https://nextjs.org/)<br/> 
[Yarn 1.22.19](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)<br/> 
[npm package](https://www.npmjs.com/)<br/> 
[React JSX JavaScript XML](https://reactjs.org/docs/introducing-jsx.html)<br/> 
[JavaScript](www.javascript.com)<br/> 
[MongoDB Cloud](https://account.mongodb.com/account/login)<br/> 
[Postman API Platform](https://www.postman.com/downloads/)<br/>
<div>
  <img src = "https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original.svg" title = "VSCODE" alt ="VSCODE" width= "60" height = "60"/>&nbsp; 
  <img src =  "https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original.svg" title = "NEXTJS" alt ="NEXTJS" width= "60" height = "60"/>&nbsp; 
  <img src = "https://github.com/devicons/devicon/blob/master/icons/yarn/yarn-original.svg" title = "YARN" alt ="YARN" width= "60" height = "60"/>&nbsp; 
  <img src = "https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" title = "NPM" alt ="NPM" width= "60" height = "60"/>&nbsp; 
  <img src ="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title = "REACTJS" alt ="REACTJS" width= "60" height = "60"/>&nbsp; 
  <img src = "https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title = "JAVASCRIPT" alt ="JAVASCRIPT" width= "60" height = "60"/>&nbsp; 
  <img src ="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"  title = "MONGODB" alt ="MONGODB" width= "60" height = "60"/>&nbsp; 

</div>


# Prerequisites & Setups
In Vscode Console:
```bash
npx create-next-app
```
Install all Next.js properties using` . `<br/>
Install Yarn globally using sudo npm: 
```bash
sudo npm install -g yarn
```
Check if yarn installed and at latest version:
```bash 
yarn --version
```
Start the localhost server at www.localhost:3000 
```bash
yarn dev
```
# Synchronous Developing Notes
## ***NavBar Design:***
Create a basic template inn [Navbar.jsx](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/components/Navbar.jsx).<br/>
Create [Navbar.module.css](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/styles/Navbar.module.css):
```css
.container{
    background-color: red;
```
Test if navbar CSS styling works:<br/>
[red navbar slider test.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/red%20navbar%20slider%20test.PNG)<br/>
In [Navbar.jsx](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/components/Navbar.jsx):
```JavaScript 
import Image from "next/image";
...
  <Image src="/img/telephone.png" alt="" width="32" height="32" />
```
Order Now telephone symbol is imported:<br/> 
[order now telephone symbol imported.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/order%20now%20telephone%20symbol%20imported.PNG)<br/> 
Import and add more CSS stylings designs to the list items and cart:
```css
.counter{
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #ff00aa;
```
## ***Slider Design:***
Import popular featured items with customized copyrighted images and set layout as fill:
```JavaScript 
 <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
        {images.map((img, i) => (
    <Image src="/img/featured.png" key={i} alt="" layout="fill" />
))}
             </div>
         </div>
```
Now imported featured items images displayed and size filled out the background properly:<br/> 
[imported featured item picture layout properly.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/imported%20featured%20item%20picture%20layout%20properly.PNG)<br/>
Add horizontal slider to allow user to slide to view featured items horizontally:
```css
.wrapper{
    width: 300vw;
    height: 100%;
    display: flex;
}
.imgContainer{
    width: 100vw;
    height: 100%;
    position: relative;
```

<img width = "1961" alt = "Featured items can be slided horizontally" src ="https://user-images.githubusercontent.com/72481348/201525077-bea1f247-912b-4d7b-af86-69249556f2e4.mov">

To enable arrow left and arrow right to be clickable, add transform effect to translateX:
```JavaScript
<div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
```

<img wdith = "1961" alrt ="left right click arrow to switch the featured items" src = "https://user-images.githubusercontent.com/72481348/201525271-7f59b576-3621-4f3d-ab45-a50a0683b410.mov">

## ***Listing products:***
Import boba cards template image and template details, and add CSS stylings to the details:
```css
 .title {
    font-size: 18px;
    font-weight: bold;
    color: #d1411e;
} .price{
    font-size: 18px;
    font-weight: bold;
    color: #666;
} .desc{
    text-align: center;
    color: #777;
}
```
[template products listings displayed.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/template%20products%20listings%20displayed.PNG)<br/>
## ***Design Footer:***
Import footer contact infos in [Footer.jsx](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/components/Footer.jsx):
```JavaScript 
<div className={styles.item}>
  SHOP</h1>
<div className={styles.card}></div>
<h2 className={styles.motto}>
    OH YES, WE DID. THE KRYSTAL BOBA,
    WELL BLENDED REFRESHING CUP OF BOBA.
</h2>
<div className={styles.card}>
    <h1 className={styles.title}>FIND OUR BOBA
    <p className={styles.text}>
        3638 R. Nob Hill Street #304.
        <br /> San Francisco, 94105
        <br /> (415) 555-7372
</p>...
```
Add corresponding CSS stylings and footer design is done:<br/> 
[footer design is done.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/footer%20design%20is%20done.PNG)<br/>
## ***Product Page Design:***
Import different sizes, additional ingredients(toppings) for boba drinks as options in html checkbox format and also import button for add to cart in [[id].jsx](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/pages/product/%5Bid%5D.jsx):
```JavaScript 
return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={boba.img} objectFit="contain"
layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className = {styles.title}>{boba.name}</h1>
                <span className =
{styles.price}>${boba.price[size]}</span>
setSize(0)}>
alt =""/>
<p className = {styles.desc}>{boba.desc}</p>
<h3 className = {styles.choose}>Choose the size</h3>
<div className = {styles.sizes}>
    <div className = {styles.size} onClick = {()=>
        <Image src = "/img/size.png" layout = "fill"
        <span className = {styles.number}>Small</span>
    </div>
    <div className = {styles.size} onClick = {()=>
        <Image src = "/img/size.png" layout = "fill"
        <span className =
setSize(1)}>
alt = ""/>
{styles.number}>Medium</span>
setSize(2)}>
alt =""/>
toppings!</h3>
    </div>
    <div className = {styles.size} onClick = {()=>
        <Image src = "/img/size.png" layout = "fill"
        <span className = {styles.number}>Large</span>
    </div>
</div>
<h3 className = {styles.choose}> Choose additional
<div className = {styles.ingredients}>
    <div className = {styles.option}>
<input...
```
Modify all icons, buttons and checkboxes stylings then we got:<br/> 
[product page is done designing.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/product%20page%20is%20done%20designing.PNG)<br/>
## ***Shopping Cart Design:***
Import shopping cart items in [cart.jsx](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/pages/cart.jsx):
```JavaScript 
<div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <tr className={styles.tr}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
</tr>
```
Adjust shopping cart icon and its button CSS stylings in [cart.module.css](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/styles/cart.module.css):
```css
.wrapper{
    width: 90%;
    max-height: 300px;
    background-color: #333;
    padding: 50px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
}
.totalTextTitle{
    margin-right:10px;
}
```
Now we have a well-designed shopping cart page at localhost:3000/cart:<br/>
[shopping cart total page for checkout.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/shopping%20cart%20total%20page%20for%20checkout.PNG)<br/>
## ***Order Tracking Pages:***
Create different statuses in [id.jsx](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/pages/orders/%5Bid%5D.jsx) and import corresponding images:
```JavaScript
const Order = () => {
    const status = 0
    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
};
```
Add CSS animation stylings to the order status in [Order.module.css](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/styles/Order.module.css):
```css
.row:last-child{
    width: 80%;
    display: flex;
    justify-content: space-between;
} .done{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.inProgress{
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: inProgress 1s ease infinite alternate;
}
```
[order status page design is done.PNG](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/order%20status%20page%20design%20is%20done.PNG)<br/> 
Next.js responsive page design:<br/> 
Use `@media screen and (max-width: 480px){...}` to make responsive effects.<br/> 
Add multiple boba cards in the homepage.

# Debugging&Troubleshooting
- CSS ERROR: Product not showing in localhost:3000/product/213 page. <br/>
 DEBUGGING: In [Product.module.css](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/styles/Product.module.css). Leave space for 
 ```css
 height: calc(100vh - 100px);
```
- WEB SERVER ERROR: Unhandled Runtime Error: Error: Hydration failed because the initial UI
does not match what was rendered on the server. See more info here: https://nextjs.org/docs/messages/react-hydration-error.
DEBUGGING: Latest React server not comfortable with using table without having tbody. So replace `<table><tr>...</tr></table>` with
`<table><tbody><tr>...</tr></tbody></table>`. 

# Testing Result 

<p align = "center">
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/red%20navbar%20slider%20test.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/order%20now%20telephone%20symbol%20imported.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/imported%20featured%20item%20picture%20layout%20properly.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/template%20products%20listings%20displayed.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/footer%20design%20is%20done.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/product%20page%20is%20done%20designing.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/shopping%20cart%20total%20page%20for%20checkout.PNG">&nbsp;
  <img src = "https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/testing-result-asian-boba-drink-deliveroo-app/order%20status%20page%20design%20is%20done.PNG">&nbsp;
</p>


# Tags and Topics
full-stack, responsive, next-js, front-end, back-end, mongoDB, api, mongoDB-integration, admin-dashboard, redux-js, sever-side-rendering, cookies-for-authentication, vscode, yarn, npm-package, npx, react-jsx-javascript-xml, shell, bash-shell, mongoDB-cloud, postman-api-platform, localhost, css, html, javascript, react-js. 
# Author
Krystal Zhang
https://github.com/KrystalZhang612<hr>
*This file was generated by [AsianBobaDrinkDeliverooApp-readme](https://github.com/KrystalZhang612/KrystalZhang612-Asian-Boba-Drink-Deliveroo-App/blob/main/README.md), on November 10th, 2022*

