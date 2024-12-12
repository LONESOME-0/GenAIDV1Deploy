import React, { useState, useContext } from "react";
import QuantityInput from "./QuantityInput";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
const CardDetail = ({ product }) => {
  const { backendUrl, token } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);

  // Callback function to handle quantity change
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addToCart = async () => {
    try {
      const totalPrice = quantity * product.price;
      const prodCart = {
        userId: "6755e5e1ed1cfa4d6d2bfc31",
        productid: product.id,
        productname: product.productname,
        image: product.image,
        price: product.price,
        quantity: quantity,
        totalPrice: totalPrice,
      };
      //console.log(prodCart);
      const response = await axios.post(backendUrl + "/api/cart/add", {
        prodCart,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <AiFillStar key={i} className="text-yellow-400" />
        ) : (
          <AiOutlineStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };

  return (
    <div>
      <div
        id="#product"
        className="flex flex-col w-full  flex-1 lg:w-auto lg:mx-10 p-3 bg-white lg:flex-row "
      >
        <div className="justify-items-center">
          <div id="productImg">
            <img
              src={product.image}
              alt={product.productname}
              className="lg:h-96"
            />
          </div>
        </div>
        {/* <div id="productName" className='my-3'><span className='text-2xl'>ยาธาตุน้ำขาวตรากระต่ายบิน</span></div> */}

        <div className="flex flex-col  lg:flex-col flex-1">
          <div>
            <div id="productName" className="my-3">
              <span className="text-2xl">{product.productname}</span>
            </div>
            <div id="productId">รหัสสินค้า: {product.id}</div>
            <div id="productRating" className="flex  items-center ">
            {renderStars(product.rating || 0)}&nbsp;&nbsp;&nbsp;{product.rating || 0}/5
            </div>
          </div>
          <div className=" justify-items-end space-y-3 justify-center lg:flex flex-col-reverse lg:my-10 ">
            <div id="productAmount" className="my-4">
              <QuantityInput onChange={handleQuantityChange} value={quantity} />
            </div>
            <div id="productPrice">
              <span className="text-ga-secondary text-3xl font-bold">
                {product.price}.-
              </span>
            </div>
          </div>
          <div className="hidden lg:flex mt-3 space-x-4">
            <button
              onClick={addToCart}
              className="bg-ga-primary text-white rounded-md p-2 w-40 text-xl"
            >
              เพิ่มลงรถเข็น
            </button>
            <button className="bg-ga-secondary text-white rounded-md p-2 w-40 text-xl">
              ซื้อเลย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
