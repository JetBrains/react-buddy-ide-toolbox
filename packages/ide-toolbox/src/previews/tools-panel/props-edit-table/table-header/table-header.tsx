import React from "react"
import "./table-header.scss"

export const TableHeader: React.FC = () => {
  return (
    <div className={"table-header"}>
      <div className={"table-header-item"}>
        Property name
            </div>
      <div className={"table-header-item-control"}>
        Edit
            </div>
    </div>
  );
};
