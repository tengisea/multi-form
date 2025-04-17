import React from "react";

export const Input = ({
  type,
  placeholder,
  onChange,
  label,
  name,
  error,
  value,
}) => {
  return (
    <div>
      <div className="flex">
        <label className="font-semibold"> {label}</label>
        <div className="text-[#E14942]">*</div>
      </div>
      <div className="flex  items-center self-stretch rounded-lg border-solid border-1">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          className="p-3 w-full border-[#8B8E95] rounded-lg font-semibold focus:border-[#0CA5E9]"
        />
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
