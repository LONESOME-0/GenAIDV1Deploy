import React from 'react';
import { AiFillStar } from "react-icons/ai";

const CardProduct = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-h-full max-w-[200px] flex-shrink-0 snap-start mx-2">
      <img
        src="https://cx.lnwfile.com/_/cx/_raw/xo/m0/lg.jpg"
        alt="TYLENOL (ไทลินอล)"
        className="w-full h-40 object-contain mb-0.5"  // Reduced height to h-32
      />
      <div className="p-4  flex flex-col flex-grow">
        <h2 className="text-base font-semibold text-gray-800">TYLENOL (ไทลินอล)</h2>
        <p className="text-xs text-gray-500 mt-1 break-words"> {/* Added break-words for wrapping */}
          Acetaminophen Rapid Release Gels 100.0 ea
        </p>
        <p className="text-xs text-blue-500 mt-2 break-words"> {/* Added break-words for wrapping */}
          #อาการปวดหัว, #ลดไข้
        </p>
        <div className="flex items-center mt-2">
          <span className="text-red-500 font-bold text-lg">฿499</span>
          <span className="text-xs text-gray-500 ml-1">บาท/กล่อง</span>
        </div>
        <div className="flex items-center mt-2">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <span className="ml-2 text-gray-600 text-xs">4.5</span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
