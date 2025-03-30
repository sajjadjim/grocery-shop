import React from 'react';
import './item.css'
const Item = ({product ,handleCartItems}) => {

    return (
        <div className='product'>
            <div className='product-container'>
            <div>
            <p style={{color:'green', fontWeight:'700'}}>Name : {product.name}</p>
            <p className='font-semibold'>Price: <span style={{color:'red'}}>{product.price} $</span></p>
            <p>Category: {product.category}</p>
            <p>Stock Available : {product.stock}</p>
            </div>
            <div>
                <img style={{height:'100px', width:'auto', borderRadius:'10px'}} src={product.image} alt='Picture Loading...'></img>
            </div>
            </div>
            <button onClick={()=> handleCartItems(product)}>Buy Now</button>
        </div>
    );
};

export default Item;

