import React, { useState, useMemo, useEffect } from "react";
import ToolsPanel from "./tools-panel";
import { ToolsPropsModifier } from "./previews.types"
import { DEV_MODE } from "../config";
import "./previews.scss";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const Previews: React.FC<Props> = ({ children }: Props) => {
  const [toolsPropsToEdit, setToolsPropsToEdit] = useState<ToolsPropsModifier>(null);
  const [toolsPanelEnabled, enableToolsPanel] = useState<boolean>((window as any).__PROPERTIES_EDIT_PANEL_ENABLED__);

  const childrenWithSetProps = useMemo(() => {
    return children 
    ? React.Children.map(
        children,
        (child: JSX.Element) => {
          return React.cloneElement(child, { setToolsPropsToEdit })
        }
      )
    : null
  }, [children])

  useEffect(() => {
    (window as any).enableComponentsPropsPanelEditor = (toolsPanelStatus: boolean) => {
      if (DEV_MODE){
        (window as any).setPropertiesEditPanelStatus
          ? (window as any).setPropertiesEditPanelStatus(toolsPanelStatus)
          : null;

        enableToolsPanel(toolsPanelStatus);
      }
    }
  }, [])

  return (
    <div className={"previews-main"}>
      <div className={"previews-content"}>
        {childrenWithSetProps}
      </div>
      {toolsPanelEnabled && (
        <div className={"previews-tools-panel"}>
          <ToolsPanel
            toolsPropsToEdit={toolsPropsToEdit}
          />
        </div>
      )}
    </div>
  );
};
