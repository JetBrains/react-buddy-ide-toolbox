import React from "react";
import { ToolsPropsModifier } from "../../previews.types";
import TableHeader from "./table-header/";
import TableItems from "./table-items"
import "./props-edit-table.scss";

interface Props {
  toolsPropsToEdit: ToolsPropsModifier
}

export const PropsEditTable: React.FC<Props> = ({ toolsPropsToEdit }) => {
  return (
    <div className={"props-edit-table"}>
      <TableHeader />
      <TableItems
        toolsPropsToEdit={toolsPropsToEdit}
      />
    </div>
  );
};
