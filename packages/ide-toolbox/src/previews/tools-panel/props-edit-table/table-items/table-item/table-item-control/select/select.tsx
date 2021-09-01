import React from "react";

interface Props extends React.HTMLProps<HTMLSelectElement> {
  optionsData?: string[] | number[]
}

export const Select: React.FC<Props> = ({optionsData, ...restProps}) => {
  return (
    <select {...restProps}>
      {optionsData?.map((value: string | number) => {
        return (
          <option
            value={value}
            key={value}
          >
            {value}
          </option>
        )
      })}
    </select>
  )
}
