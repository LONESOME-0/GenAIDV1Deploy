import React, { useContext,useEffect } from "react";
import { CartContext } from "../../context/CartProvider";

function CardSum({ onTotalUpdate }) {
  const { cartItems,toCheckout } = useContext(CartContext);
  console.log("cartSum : ", toCheckout);

  // Calculate the summary of totalPrice
  //const totalPrice = toCheckout.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalPrice = toCheckout.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Calculate the discount
  const discount = 0; // Replace with your logic to calculate the discount

  // Calculate the delivery fee
  const deliveryFee = 10; // Replace with your logic to calculate the delivery fee

  // Calculate the VAT
  const vat = 0; // Replace with your logic to calculate the VAT

  const total = totalPrice - discount + deliveryFee + vat;

  
  // Call the callback function with the total value
  onTotalUpdate(total);

  

  return (
    <div className="flex justify-between flex-col w-72 bg-white p-3 rounded-xl  mx-auto">
      <div className="flex justify-between">
        <span>ยอดรวมคำสั่งซื้อ</span>
        <span>{totalPrice}</span>
      </div>
      <div className="flex justify-between">
        <span>ส่วนลด</span>
        <span>{discount}</span>
      </div>
      <div className="flex justify-between">
        <span>ค่าจัดส่ง</span>
        <span>{deliveryFee}</span>
      </div>
      <div className="flex justify-between">
        <span>VAT</span>
        <span>{vat}</span>
      </div>
      <div className="flex justify-between">
        <span>รวม</span>
        <span>{total}</span>
      </div>
    </div>
  );
}

export default CardSum;
