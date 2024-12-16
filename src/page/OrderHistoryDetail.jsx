import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import CardCart from "../components/Product/CardCart";
import NavMobile from "../components/Navbar/NavMobile";
import CardSum from "../components/Checkout/CardSum";
import { CartContext } from "../context/CartProvider";
import { AuthContext } from "../context/AuthProvider.jsx";
import axios from "axios";

function OrderHistoryDetail() {
  const { cartItems } = useContext(CartContext);
  const { backendUrl, token } = useContext(AuthContext);
  // const [total, setTotal] = useState(0);
  const [orderData, setOrderData] = useState([]);
  const { id } = useParams();

  const OrderDataHistory = async () => {
    try {
      if (!token) {
        console.warn("Token is missing; unable to fetch order data.");
        return;
      }

      const response = await axios.get(
        `${backendUrl}/api/order/orderHistoryDetail/${id}`,
        { headers: { token } }
      );

      if (response.data) {
        setOrderData(response.data);
        console.log("54654", orderData.length);
        console.log("Fetched order data:", response.data);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      OrderDataHistory();
    }
    console.log("54654", id);
  }, [token, id]);

  // const updateTotal = (newTotal) => {
  //   setTotal(newTotal);
  // };

  return (
    <>
      <Nav back title={`รหัสสินค้า:${id || "N/A"}`} />
      <div className="my-16 lg:my-40">
        <h1 className="text-center text-2xl pt-5">
          สถานะ: {orderData.status || "N/A"}
        </h1>
        <div className="flex items-center flex-col lg:flex-row lg:w-[80%] lg:place-self-center lg:gap-7">
          <div id="cardProduct" className="lg:w-[70%]">
            {orderData.Item && orderData.Item.length > 0 ? (
              orderData.Item.map((itemId) => (
                <CardCart
                  key={itemId}
                  cartData={{
                    productid: itemId, // ส่งเฉพาะ ID หรือข้อมูลอื่น ๆ ที่จำเป็น
                    ...orderData, // ส่งข้อมูลเพิ่มเติมถ้าจำเป็น เช่น address หรือ status
                  }}
                  isCheckOut={true}
                />
              ))
            ) : (
              <p>No order items available.</p>
            )}
          </div>
          <div>
            <div className="info-section lg:w-[30%] lg:p-6 text-center mt-40 lg:mt-0">
              {/* <CardSum onTotalUpdate={updateTotal} /> */}
            </div>
            <div className="payment-info lg:w-[30%] lg:p-6 text-center mt-5">
              <div className="flex justify-between flex-col w-72 m bg-white p-3 rounded-xl mx-auto">
                <div className="flex justify-between">
                  <span>Paid by </span>
                  <span>QA Promtpay</span>
                </div>
                <div className="flex justify-between">
                  <span>วิธีชําระ </span>
                  <span>QA Promtpay</span>
                </div>
                <div className="flex justify-between">
                  <span>เวลาส่ง </span>
                  <span>QA Promtpay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavMobile />
      </div>
    </>
  );
}

export default OrderHistoryDetail;
