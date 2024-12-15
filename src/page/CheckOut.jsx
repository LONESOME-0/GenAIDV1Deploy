import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Nav from "../components/Navbar/Nav";
import Dropdownaddr from "../components/Checkout/Dropdownaddr";
import CardCart from "../components/Product/CardCart";
import NavMobile from "../components/Navbar/NavMobile";
import CardSum from "../components/Checkout/CardSum";
import { AuthContext } from "../context/AuthProvider";
import { CartContext } from "../context/CartProvider";
import axios from "axios";

function CheckOut() {
  const { backendUrl, token } = useContext(AuthContext);
  const { cartItems, addresses } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  const handleAddressChange = (address) => {
    setAddress(address);
  };

  const checkout = async (cartItems) => {
    try {
      const data = {
        Item: cartItems,
        address,
        paymentMethod: "PromtPay",
        total,
      };
      const response = await axios.post(
        `${backendUrl}/api/order/checkout`,
        { data },
        { headers: { token } }
      );

      console.log("Order data:", data);
      
      // Check for a successful response (status code 200 or similar)
      if (response.status === 200) {
        navigate("/orderhistory"); // Redirect to /orderhistory
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <>
      <Nav back title="ยืนยันการสั่งซื้อ" />

      <div className="container mx-auto my-16 p-4 lg:my-40 flex flex-col-reverse lg:flex-row-reverse lg:gap-12">
        
        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-6">
            <img
              src="imgpromptpay/imgpromptpay.png"
              alt="PromptPay QR"
              className="w-48 h-auto"
            />
          </div>

          {/* Address Dropdown */}
          <Dropdownaddr
            addrContext={addresses}
            onChange={handleAddressChange}
            className="w-full mb-8"
          />

          <hr className="my-6" />

          {/* Total Summary */}
          <CardSum onTotalUpdate={updateTotal} />

          {/* Checkout Button */}
          <button
            onClick={() => checkout(cartItems)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 w-full text-lg mt-6 transition duration-300"
          >
            สั่งสินค้า
          </button>
        </div>

        {/* Left Section: Cart Items */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">รายการสินค้าในตะกร้า</h2>
          <div className="space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CardCart key={item.productid} cartData={item} isCheckOut={true} />
              ))
            ) : (
              <p className="text-gray-500">ไม่มีสินค้าในตะกร้า</p>
            )}
          </div>
        </div>
      </div>

      <NavMobile checkout />
    </>
  );
}

export default CheckOut;
