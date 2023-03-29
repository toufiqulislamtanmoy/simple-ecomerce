import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShiping = 0;
    for(const product of cart){
        // console.log(product);
        totalPrice= totalPrice + product.price;
        totalShiping= totalShiping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShiping + tax;
 
    return (
        <div>
            <h1>Order Summery</h1>
            <hr />
                <div className='cart-details'>
                    <h4>Selected Item: {cart.length}</h4>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <p>Total Shiping Charge: ${totalShiping.toFixed(2)} </p>
                    <p>Tax: ${tax.toFixed(2)}</p>
                    <h6>Grand TOtal: ${grandTotal.toFixed(2)} </h6>
                </div>
        </div>
    );
};
import './Cart.css'
export default Cart;