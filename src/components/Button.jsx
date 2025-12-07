import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-75 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative group-hover:font-bold flex items-center overflow-hidden font-general text-sm uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
