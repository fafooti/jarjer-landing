"use client";
import { useState } from "react";
import eyeIcon from "/public/signin/eye.svg";
import Image from "next/image";
const Input = ({
  label,
  className,
  name,
  placeholder,
  value,
  variant,
  onKeyDown,
  onChange,
  type,
  error,
  tooltip,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickEnter = (e) => {
    if (onKeyDown) {
      if (e.key === "Enter") {
        onKeyDown(e);
      }
    }
  };
  const hanleChangeInput = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  const inputClassName = `outline-none relative bg-white p-4 rounded-47 bg-white ${
    error ? "outline-red-500" : ""
  }`;

  return (
    <div className="relative flex flex-col w-[430px] gap-2" name={name}>
      {label && <label className="text-sm px-8 text-primary">{label}</label>}

      <div className="relative  bg-border-gradient rounded-47 p-1">
        <div className=" flex bg-white rounded-47 px-7">
          <input
            className={`${inputClassName} ${
              className ?? ""
            } relative z-10 text-primary `}
            placeholder={placeholder}
            value={value}
            onKeyDown={handleClickEnter}
            onChange={onChange}
            name={name}
            {...props}
          />
          {type === "password" && (
            <Image className="rounded-r-47 bg-white " src={eyeIcon} />
          )}
        </div>

        {error && (
          <p className="absolute -bottom-5 text-red-500 text-xs">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
