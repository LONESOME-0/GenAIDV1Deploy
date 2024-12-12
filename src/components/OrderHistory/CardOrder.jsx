
import { FaChevronRight } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaTruckFast } from "react-icons/fa6";



const CardOrder = ({order}) => {

  return (
    <>
      <div
        id="orderCard1"
        className="flex h-28 justify-between items-center p-6  bg-white m-3"
      >
        <div className="flex flex-col items-center">
          <FcMoneyTransfer size={30} /> {order.status}</div>
        <div>{order.orderID}</div>
        <div>{order.paymentMethod}</div>

        <div>
          <FaChevronRight />
        </div>
      </div>

      {/* <div
        id="orderCard2"
        className="flex h-28 justify-between items-center p-6  bg-white m-3"
      >
        <div className="flex flex-col items-center">
          <FaTruckFast size={30} /> จัดส่งแล้ว
        </div>
        <div>คำสั่งซื้อ : 00002</div>
        <div>
          <FaChevronRight />
        </div>
      </div> */}
    </>
  );
};

export default CardOrder;
