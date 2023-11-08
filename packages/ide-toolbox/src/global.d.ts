declare global {
  interface Window {
    AMPLICODE_IDE_DEVMODE?: boolean;
    __PROPERTIES_EDIT_PANEL_ENABLED__?: boolean;
    enableComponentsPropsPanelEditor?: (toolsPanelStatus: boolean) => void;
    setPropertiesEditPanelStatus?: (toolsPanelStatus: boolean) => void;
    amplicodeHistoryPush?: (url: string) => void;
    cefQuery?: (options: {request: string}) => void;
  }
}

export {};
