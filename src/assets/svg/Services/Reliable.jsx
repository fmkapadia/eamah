import React from "react";

function SvgComponent() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={43.336} height={32.531}

      fill="#000"
      className="icon line-color"
      data-name="Line Color"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#2CA9BC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 10L11.33 11.5 14 8.5"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.79 13.57L3 17.56 6.03 18.46 7.91 21 10.79 16.89"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.21 13.57L21 17.56 17.97 18.46 16.09 21 13.21 16.89"
        data-name="primary"
      ></path>
      <circle
        cx="12"
        cy="10"
        r="7"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        data-name="primary"
      ></circle>
    </svg>
  );
}

export default SvgComponent;