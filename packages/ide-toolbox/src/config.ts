const envDevmode =
  typeof process !== 'undefined'
    ? process.env?.REACT_APP_IDE_DEVMODE === 'true'
    : false;

const windowDevmode = typeof window !== 'undefined' && window?.AMPLICODE_IDE_DEVMODE === true;

export const DEV_MODE = windowDevmode || envDevmode;
