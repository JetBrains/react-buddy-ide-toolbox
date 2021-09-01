import React, { useCallback } from "react";
import { ToolsPropsModifier } from "../previews.types";
import PropsEditTable from "./props-edit-table"
import "./tools-panel.scss";

interface Props {
  toolsPropsToEdit: ToolsPropsModifier
}

export const ToolsPanel: React.FC<Props> = ({ toolsPropsToEdit }) => {
  const { props = null, propsEditInfo = null } = { ...toolsPropsToEdit }
  const renederToolsPanelContent = useCallback(() => {
    let hasPropetiesToEdit: boolean;
    hasPropetiesToEdit = props ? Object.keys(props).length > 0 : false;
    hasPropetiesToEdit = hasPropetiesToEdit || (propsEditInfo ? Object.keys(propsEditInfo).length > 0 : false);

    return hasPropetiesToEdit
      ? (
        <PropsEditTable
          toolsPropsToEdit={toolsPropsToEdit}
        />
      )
      : (
        <div className={"empty-props-message"}>
          This component has no properties to edit
        </div>
      )
  }, [props, propsEditInfo])

  return (
    <div className={"tools-panel"}>
      {renederToolsPanelContent()}
    </div>
  );
};
