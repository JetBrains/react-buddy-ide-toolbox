export const DEV_MODE = (window as any).REACT_BUDDY_IDE_DEVMODE === true 
  || process?.env?.REACT_APP_IDE_DEVMODE === "true";
