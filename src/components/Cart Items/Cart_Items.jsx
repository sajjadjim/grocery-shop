import React from "react";

const Cart_Items = ({ cartItems, removeFromCartProducts }) => {
  // console.log(cartItems)
  return (
    <div>
      <h1 className="font-semibold text-xl">Cart Products :</h1>
      <div className="grid md:grid-cols-7 grid-cols-5">
        {cartItems.map((product) => (
          <div>
            <h1>{product.name}</h1>
            <div>
            <img className="h-[100px] w-auto" key={product.id} src={product.image}></img>
            <button
              onClick={() => removeFromCartProducts(product.id)}
              style={{ backgroundColor: "white", color: "black" }}
            > 
              x 
            </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart_Items;
