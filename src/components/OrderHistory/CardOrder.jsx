
import { FaChevronRight } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaTruckFast } from "react-icons/fa6";



const CardOrder = ({order}) => {

  return (
    <>
      <div
        id="orderCard1"
        className="flex h-28 justify-between items-center p-6  bg-white m-3 rounded-3xl"
      >
        <div className="flex flex-col items-center">
          <FcMoneyTransfer size={30}  /> {order.status}</div>
        <div>รหัสคำสั่งซื้อ: {order.orderId}</div>
        <div> วิธีชําระ: {order.paymentMethod}</div>
        
        <div>
          <FaChevronRight />
        </div>
      </div>

    </>
  );
};

export default CardOrder;
