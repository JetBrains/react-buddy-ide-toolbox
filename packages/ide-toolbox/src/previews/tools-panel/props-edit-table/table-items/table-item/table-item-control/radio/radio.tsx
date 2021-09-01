import React from "react";
import "./radio.scss";

type Props = React.HTMLProps<HTMLInputElement> & {
  radioData?: string[] | number[];
  extValue?: string | number;
}

export const Radio: React.FC<Props> = ({className, radioData, extValue, ...restProps}) => {
  return radioData
  ? <div className={className}>
    {radioData.map((value: string | number) => {
      return (
        <div key={value} className={"radio-control"}>
          <label htmlFor={String(value)}> {value}</label>
          <input
            {...restProps}
            type={"radio"}
            checked = {extValue == value}
            id={String(value)}
            value={value}
          />
        </div>
      )
    })}
  </div>
  : null
}
