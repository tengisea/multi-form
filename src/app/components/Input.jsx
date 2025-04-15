import React from "react";

export const Input = ({ type, placeholder, onChange, label, name }) => {
  return (
    <div className="flex  items-center self-stretch rounded-lg border-solid border-1">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        label={label}
        className="p-3 w-full border-[#8B8E95] rounded-lg font-semibold focus:border-[#0CA5E9]"
      />
    </div>
  );
};
