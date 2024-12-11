import { useContext, useEffect, useState } from "react";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardOrder from "../components/OrderHistory/CardOrder";
import DropdownStatus from "../components/OrderHistory/DropdownStatus";
import axios from "axios";
import { AuthContext } from "../context/AuthProvider.jsx";

const OrderHistory = () => {
  const { backendUrl, token } = useContext(AuthContext);
  const [orderData, setOrderData] = useState([]);
  
  const loadOrderData = async () => {
    try {
      if (!token) {
        return null;
      }

      const response = await axios.post(
        backendUrl+"/api/order/orders",
        {},
        {headers: {token}}
      );
      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);


  return (
    <>
      <div>
        <Nav back title="ประวัติการสั่งซื้อ" />
        
        <div className="my-16 lg:my-40 lg:w-[80%] lg:place-self-center">
          <DropdownStatus />
          <CardOrder />
        </div>
        <NavMobile />
      </div>
    </>
  );
};

export default OrderHistory;
