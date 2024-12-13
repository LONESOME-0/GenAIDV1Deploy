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
  const [selectedStatus, setSelectedStatus] = useState(null);

  // โหลดข้อมูลคำสั่งซื้อ
  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/order/orders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrderData(response.data.order);
      }
      
    } catch (error) {
      console.error("Error loading orders:", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // เปลี่ยนสถานะที่เลือก
  const handleStatusChange = (statusLabel) => {
    setSelectedStatus(statusLabel);
  console.log(statusLabel);
  };
     
  // กรองคำสั่งซื้อ
  const displayedOrders =
    selectedStatus === "สถานะทั้งหมด" || !selectedStatus
      ? orderData
      : orderData.filter((order) => order.status === selectedStatus);

  return (
    <div>
      <Nav back title="ประวัติการสั่งซื้อ" />

      <div className="my-16 lg:my-40 lg:w-[80%] lg:place-self-center">
        <DropdownStatus onStatusChange={handleStatusChange} />

        {displayedOrders.length > 0 ? (
          displayedOrders.map((order) => (
            <CardOrder key={order._id} order={order} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            {selectedStatus
              ? "ไม่พบคำสั่งซื้อในสถานะนี้"
              : "กำลังโหลดข้อมูล..."}
          </p>
        )}
      </div>

      <NavMobile />
    </div>
  );
};

export default OrderHistory;
