import React, { useState } from "react";

function DropDownAddr({ onStatusChange }) {
  const [value, setValue] = useState("");

  const options = [
    { key: 1, label: "สถานะทั้งหมด", value: 1 },
    { key: 2, label: "รอชำระ", value: 2 },
    { key: 3, label: "จัดส่งแล้ว", value: 3 },
  ];

  function handleSelect(event) {
    const selectedOption = options.find(
      (option) => option.value.toString() === event.target.value
    );
    setValue(selectedOption.value);
    onStatusChange(selectedOption.label);
  }

  return (
    <div className="flex m-2 rounded-2xl ">
      <div className="p-3 border rounded-2xl w-full bg-white">
        <select
          className="form-select w-full"
          value={value}
          onChange={handleSelect}
        >
          {options.map((option) => (
            <option className="w-10" key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDownAddr;
