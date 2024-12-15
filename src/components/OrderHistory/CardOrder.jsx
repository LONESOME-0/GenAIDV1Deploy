import { FaChevronRight } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaTruckFast } from "react-icons/fa6";
import { ImHourGlass } from "react-icons/im";

const CardOrder = ({ order }) => {
  const statusIcon =
    order.status === "รอชำระ" ? (
      <ImHourGlass size={30} className="text-ga-secondary" />
    ) : (
      <FaTruckFast size={30} className="text-ga-primary" />
    );

  const statusText = order.status === "รอชำระ" ? "รอชำระ" : "จัดส่งแล้ว";

  return (
    <div className=" flex justify-center ">
      <div
        id="orderCard1"
        className="flex lg:w-11/12 justify-between  items-center p-2 m-2  bg-white  rounded-3xl w-full "
      >
        <div className="flex flex-col items-center  justify-around text-center w-2/5 ">
          {statusIcon}{statusText}
        </div>

        <div className="flex  items-center  gap-32 text-nowrap text-center m-10  w-2/4">
          <div>รหัสคำสั่งซื้อ: {order.orderId}</div>
          <div className="hidden sm:block"> วิธีชําระ: {order.paymentMethod}</div>
        </div>

        <div>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
