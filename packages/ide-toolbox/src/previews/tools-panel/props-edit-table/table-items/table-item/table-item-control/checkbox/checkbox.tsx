import React from "react";

export const Checkbox: React.FC<React.HTMLProps<HTMLInputElement>> = ({checked ,className, ...restProps}) => {
  return (
    <div className={className}>
      <input
        {...restProps}
        checked={checked ?? false}
        type={"checkbox"}
      />
    </div>
  )
}
