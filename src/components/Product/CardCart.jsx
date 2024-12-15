import React, { useState, useContext } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import QuantityInput from "./QuantityInput";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import { CartContext } from "../../context/CartProvider";
const CardCart = ({ cartData, isCheckOut }) => {
  const { backendUrl, token } = useContext(AuthContext);
  const [quantity, setQuantity] = useState();
  const { cartItems, loading, addToCart, delCart } = useContext(CartContext);
  // const handleQuantityChange = (newQuantity) => {
  //   setQuantity(newQuantity);
  //   addToCart(cartData, quantity);
  //   console.log("fromCARD: ",quantity)
  // };

  const [previousQuantity, setPreviousQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity !== previousQuantity) {
      setQuantity(newQuantity);
      addToCart(cartData, newQuantity);
      setPreviousQuantity(newQuantity);
    }
  };

  return (
    <div className="flex justify-evenly bg-white p-2 h-44  items-center max-w-96 mx-auto rounded-xl my-6 lg:px-10 lg:min-w-full lg:mx-0 lg:justify-between">
      <div className="flex gap-2 h-full w-[40%] lg:w-[15%]">
        {" "}
        {/* Changed to horizontal layout with gap */}
        <div className="flex items-center">
          {" "}
          {/* Checkbox container */}
          {isCheckOut ? (
            ""
          ) : (
            <input
              type="checkbox"
              name="check"
              id="check"
              className="m-auto w-4 h-4"
            />
          )}{" "}
          {/* Added margin top */}
        </div>
        <div className="h-full">
          {" "}
          {/* Image container */}
          <img
            className="h-full w-auto  object-contain"
            src={cartData.image}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col flex-1s lg:flex-row lg:justify-between lg:gap-14">
        <div className="">
          <span className="text-lg">{cartData.productname}</span>{" "}
        </div>

        <div className="text-ga-secondary text-2xl font-bold">
          {cartData.price}.-{" "}
        </div>
        <div className="flex justify-end lg:justify-start">
          {" "}
          {isCheckOut ? (
            ""
          ) : (
            <QuantityInput
              onChange={handleQuantityChange}
              value={cartData.quantity}
            />
          )}
        </div>
      </div>

      <div className="self-start m-3 lg:self-center">
       {isCheckOut ? (
         <span className="text-neutral-400 flex self-center">X {cartData.quantity}</span>
       ) : (
         <RiDeleteBin6Fill
           color="red"
           size={25}
           onClick={() => delCart(cartData.productid)}
         />
       )}
      </div>
    </div>
  );
};

export default CardCart;
