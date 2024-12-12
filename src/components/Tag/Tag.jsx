import React from "react";

export default function Tag({ tag }) {
  return (
    <div className="flex">
      <p
        className="text-ga-primary 
      text-center mt-5 ml-3 p-2 rounded-3xl border-2 border-solid border-ga-primary
      "
      >
        #{tag}
      </p>
    </div>
  );
}
