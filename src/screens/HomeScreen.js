import Navbar from '../components/Navbar';
import './HomeScreen.css'
import data from '../data.json'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';


function HomeScreen(){

    const [phoneData, setPhoneData] = useState(data.phone_data);
    const [productCount, setProductCount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    // console.log(phoneData)

    return(
        <div>
            <Navbar productCount = {productCount}/>
            <div id='home-container'>
                <h1>Your Bag</h1>
                {phoneData.length === 0 && <p>is Empty</p>}
                {
                    phoneData.map((elem,index)=>{
                        return(
                            <ProductCard img = {elem.img_url} name = {elem.name} price = {elem.price}  key={index} setProductCount ={setProductCount} setTotalCost={setTotalCost} phoneData = {phoneData} setPhoneData = {setPhoneData} id = {index} />
                        )
                    })
                }
            </div>
            <div id='footer'>
                <div id='total-container'>
                    <p>Total : </p>
                    <p>{totalCost > 0 ? totalCost : 0}</p>
                </div>
                <div>
                    <button>Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;