import { useState } from 'react';
import './ProductCard.css'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function ProductCard({img, name, price, setProductCount, setTotalCost, phoneData, setPhoneData, id}){

    const [quantity, setQuantity] = useState(0);

    function incrementHandler(){

        setQuantity(Number(quantity) + 1);
        setProductCount((previousValue)=> previousValue + 1);
        setTotalCost((previousValue)=> Math.round(previousValue + Number(price)))

    }

    function decrementHandler(){

        if(quantity > 0){
            setQuantity(quantity - 1);
            setProductCount((previousValue)=> previousValue - 1);
            setTotalCost((previousValue)=> Math.round(previousValue - Number(price)))
        }

    }

    function removeHandler(){
        // setProductCount((previousValue)=> previousValue - quantity);
        // setTotalCost((previousValue)=> Math.round(previousValue - Number(price * quantity)));
        // setQuantity(0);

        // const updatedArray = phoneData.filter((elem,index)=>{
        //     if(index === id){
        //         return false;
        //     }
        //     return true;
        // })

        // console.log(updatedArray);

        // setPhoneData(updatedArray)
    }

    return(
        <div className='card-container'>
            <div className='product'>
                <img src={img}/>
                <div className='product-details'>
                    <p>{name}</p>
                    <p>${price}</p>
                    <button className='btn' onClick={removeHandler} >Remove</button>
                </div>
            </div>
            <div className='quantity'>
                <IoIosArrowUp className='product-count-change-arrow' onClick={incrementHandler}/>
                <p className='quantity-count'>{quantity}</p>
                <IoIosArrowDown className='product-count-change-arrow' onClick={decrementHandler}/>
            </div>
        </div>
    )
}

export default ProductCard;