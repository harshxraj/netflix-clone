import React from "react";

interface Inputprops {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type: string;
}

const Input: React.FC<Inputprops> = ({ id, onChange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        className="
      block
      rounded-md
      px-6
      pt-6
      pb-1
      w-full
      text-md
      text-white
      bg-neutral-700
      appearance-none
      focus:outline-none
      focus:ring-0
      peer
     "
        placeholder=" "
      />
      <label
        className="
         absolute
         text-md
         text-zinc-400
         duration-150
         transform
         -translate-y-3
         scale-65
         top-4
         z-10
         origin-[0]
         left-6
         peer-placeholder-shown:scale-100
         peer-placeholder-shown:translate-y-0
         peer-focus:scale-75
         peer-focus:-translate-y-3
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
export default Input;

/**
  
  1. `appearance-none`: it remove the default appearance styles of form elements, such as the default border, padding, and background.
  2. `focus:outline-none`: it is used to remove the outline that appears around an element when it is focused.
  3. `focus:ring-0`:remove the focus ring that appears around an element when it is focused.
   */
