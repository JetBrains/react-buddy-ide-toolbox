import React, {useState, useMemo, useEffect} from 'react';
import ToolsPanel from './tools-panel';
import {ToolsPropsModifier} from '@types';
import {useRoute, PALETTE_PATH, historyPush} from '../routing/routing';
import styles from './previews.module.scss';

interface Props {
  palette?: JSX.Element | null;
  children?: JSX.Element | JSX.Element[];
}

export const Previews: React.FC<Props> = ({
  children,
  palette = null,
}: Props) => {
  const [toolsPropsToEdit, setToolsPropsToEdit] =
    useState<ToolsPropsModifier>(null);
  const [toolsPanelEnabled, enableToolsPanel] = useState<boolean>(
    () => window.__PROPERTIES_EDIT_PANEL_ENABLED__ ?? false,
  );
  const isPalettePath = useRoute(PALETTE_PATH);

  const childrenWithSetProps = useMemo(() => {
    return children
      ? React.Children.map(children, (child: JSX.Element) => {
          return React.cloneElement(child, {setToolsPropsToEdit});
        })
      : null;
  }, [children]);

  useEffect(() => {
    window.enableComponentsPropsPanelEditor = (toolsPanelStatus: boolean) => {
      window.setPropertiesEditPanelStatus?.(toolsPanelStatus);
      enableToolsPanel(toolsPanelStatus);
    };

    window.amplicodeHistoryPush = historyPush;
    window.cefQuery?.({request: 'event:react-toolbox-initialized'});
  }, []);

  if (isPalettePath) {
    return palette;
  }

  return (
    <div className={styles.previewsMain}>
      <div className={styles.previewsContent}>{childrenWithSetProps}</div>
      {toolsPanelEnabled && (
        <div className={styles.previewsToolsPanel}>
          <ToolsPanel toolsPropsToEdit={toolsPropsToEdit} />
        </div>
      )}
    </div>
  );
};
