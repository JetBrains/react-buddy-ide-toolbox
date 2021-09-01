import React from "react";

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({value, ...restProps}) => {
  return (
    <input
      {...restProps}
      value={value ?? ""}
      type={"text"}
    />
  )
}
