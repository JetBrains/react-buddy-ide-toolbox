import React, { useState, useMemo, useEffect } from "react";
import ToolsPanel from "./tools-panel";
import { ToolsPropsModifier } from "./previews.types"
import { DEV_MODE } from "../config";
import { useRoute, PALETTE_PATH } from "../routing/routing";
import styles from "./previews.module.scss";

interface Props {
  palette?: JSX.Element | null;
  children?: JSX.Element | JSX.Element[];
}

export const Previews: React.FC<Props> = ({ children, palette = null }: Props) => {
  const [toolsPropsToEdit, setToolsPropsToEdit] = useState<ToolsPropsModifier>(null);
  const [toolsPanelEnabled, enableToolsPanel] = useState<boolean>((window as any).__PROPERTIES_EDIT_PANEL_ENABLED__);
  const isPalettePath = useRoute(PALETTE_PATH);

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
  }, []);

  if(isPalettePath) {
    return palette;
  }

  return (
    <div className={styles.previewsMain}>
      <div className={styles.previewsContent}>
        {childrenWithSetProps}
      </div>
      {toolsPanelEnabled && (
        <div className={styles.previewsToolsPanel}>
          <ToolsPanel
            toolsPropsToEdit={toolsPropsToEdit}
          />
        </div>
      )}
    </div>
  )
};
