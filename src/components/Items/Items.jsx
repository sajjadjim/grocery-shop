import React, { use, useEffect, useState } from "react";
import Item from "../item/Item";
import "./items.css";
import { addLocalStore, getLocalStore , removeCart } from "../utilites/LocalStore";
import Cart_Items from "../Cart Items/Cart_Items";
const Items = ({ productItems }) => {
  const products = use(productItems);

  const [cartItems, setCartItems] = useState([]);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  console.log(cartItems);
  // Product ADD To the Cart--------------------------------------------------------
  const handleCartItems = (product) => {
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);
    // console.log("Products Price :",product.price)
    let totalPrice = 0;
    for (let item of newCartItems) {
      totalPrice += item.price;
    }
    setTotalCartAmount(totalPrice);

    // Local Store Products Id
    addLocalStore(product.id);
    addLocalStore(product);
  };

  // Get From Local storage-------------------------------------------------------
  useEffect(() => {
    const getCartItems = getLocalStore();
    const storeCartItems = [];

    for (let id of getCartItems) {
      const cartsItems = products.find((products) => products.id === id);
      if (cartsItems) {
        storeCartItems.push(cartsItems);
      }
    }
    setCartItems(storeCartItems);

    let totalAmountCartProducts = 0;
    for (let id of storeCartItems) {
      totalAmountCartProducts += id.price;
    }
    setTotalCartAmount(totalAmountCartProducts);
  }, [products]);

  // Remove from cart Products---------------------------------------------------
  const removeFromCartProducts = (id) => {
    const remainingCartProducts = cartItems.filter(
      (products) => products.id !== id
    );
    setCartItems(remainingCartProducts);
    //Here teh product cart from remove code write 
    removeCart(id)
  };

  return (
    <div>
      {/* NavBar Code  */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Grocery |SHop</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItems.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {cartItems.length} Items
                </span>
                <span className="text-info">Subtotal: ${totalCartAmount}</span>
                <div className="card-actions">
                  <div>
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      View Cart
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Grocery Shop</h3>
                        <p className="py-4">
                          Total Amount : ${totalCartAmount} <br></br>
                          {
                            <Cart_Items
                              cartItems={cartItems}
                              removeFromCartProducts={removeFromCartProducts}
                            ></Cart_Items>
                          }
                        </p>
                        <div className="modal-action">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Cart</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <i class="fa-solid fa-circle-user text-4xl text-blue-950"></i>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-semibold">All Products List :</h2>
      {/* Product ADD  */}
      {
        <Cart_Items
          cartItems={cartItems}
          removeFromCartProducts={removeFromCartProducts}
        ></Cart_Items>
      }
      <div className=" grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-1">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
            handleCartItems={handleCartItems}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
