import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-green-500 px-5 py-1 rounded-full text-white hover:text-blue-200 font-medium">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
