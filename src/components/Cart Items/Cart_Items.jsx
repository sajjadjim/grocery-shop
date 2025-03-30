import React from "react";

const Cart_Items = ({ cartItems, removeFromCartProducts }) => {
  // console.log(cartItems)
  return (
    <div>
      <h1>Cart Products :</h1>
      <div className="grid md:grid-cols-10 grid-cols-5">
        {cartItems.map((product) => (
          <div>
            <img key={product.id} src={product.image}></img>
            <button
              onClick={() => removeFromCartProducts(product.id)}
              style={{ backgroundColor: "white", color: "black" }}
            > 
              x 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart_Items;
