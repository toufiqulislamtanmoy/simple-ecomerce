import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data=>setProducts(data));
    },[])

    const [cart,setCart] = useState([]);

    const handelCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handelCart={handelCart}
                    ></Product>)
                }
            </div>
            <div className="cart-continer">
                <h1>Order Summery</h1>
                <div>
                    <h4>Selected Item: {cart.length}</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;