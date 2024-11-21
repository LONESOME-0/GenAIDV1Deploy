import React from "react";
import Tag from "../Tag/Tag";

const CardDesc = () => {
  return (
    <div className="bg-white my-8 min-h-96 p-4 lg:mx-10">
      <p>ยาธาตุน้ำขาวตรากระต่ายบิน</p>
      <p>หมวดหมู่: ยาระบบทางเดินอาหาร</p>
      <p>บรรจุภัณฑ์: ขวด</p>
      <p>ปริมาตร: 200 มล.</p>
      <p>บรรเทาอาการท้องเสีย ปวดท้อง จุกเสียด ขับลม แก้ท้องอืด ท้องเฟ้อ</p>

      <div id="section-tag" className="justify-self-end">
        <Tag />
      </div>
    </div>
  );
};

export default CardDesc;
