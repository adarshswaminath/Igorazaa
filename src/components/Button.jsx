import React from "react";

const Button = ({ styles }) => (
  <a href="#aboutus" target="_blank">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
  </a>
);

export default Button;
