import React, { useState, useEffect } from "react";

function DropDownAddr({ addrContext, onChange }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (addrContext) {
      const firstKey = Object.keys(addrContext)[0];
      setValue(addrContext[firstKey]);
      onChange(addrContext[firstKey]);
    }
  }, [addrContext]);

  const options = Object.keys(addrContext).map((key, index) => (
    <option key={index} value={addrContext[key]}>
      {key}
    </option>
  ));

  function handleSelect(event) {
    setValue(event.target.value);
    onChange(event.target.value);
    // console.log("valprops", addrContext);
  }

  return (
    <div className="flex mt-5 w-96 ">
      <div className=" p-3 border rounded w-full">
        <h4>ที่อยู่จัดส่ง</h4>
        <select className="form-select w-full " onChange={handleSelect}>
          {options}
        </select>
      </div>
    </div>
  );
}

export default DropDownAddr;
