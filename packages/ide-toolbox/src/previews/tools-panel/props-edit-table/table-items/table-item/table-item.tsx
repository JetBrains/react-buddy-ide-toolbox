import React from "react";
import { PropsControlTypes, ControlUnionHandler, ComponentPreviewProps } from "../../../../previews.types"
import  TableItemControl from "./table-item-control";
import "./table-item.scss"

interface Props {
  data?: string[] | number[] | ComponentPreviewProps;
  propName: string;
  propValue: any;
  initialPropValue: any;
  controlType?: PropsControlTypes;
  onPropChange: ControlUnionHandler
}

export const TableItem: React.FC<Props> = ({ propName, propValue, onPropChange, controlType, data }) => {
  return (
    <div className={"table-item-wrapper"}>
      <div className={"table-item"}>
        {propName}
      </div>
      <TableItemControl
        data={data}
        controlType={controlType}
        propName={propName}
        propValue={propValue}
        onPropChange={onPropChange}
      />
    </div>
  );
};
