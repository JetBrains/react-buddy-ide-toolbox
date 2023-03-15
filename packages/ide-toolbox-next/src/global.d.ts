declare global {
  interface Window {
    REACT_BUDDY_IDE_DEVMODE?: boolean;
    __PROPERTIES_EDIT_PANEL_ENABLED__?: boolean;
    enableComponentsPropsPanelEditor?: (toolsPanelStatus: boolean) => void;
    setPropertiesEditPanelStatus?: (toolsPanelStatus: boolean) => void;
    reactBuddyHistoryPush?: (url: string) => void;
    cefQuery?: (options: {request: string}) => void;
  }
}

export {};
