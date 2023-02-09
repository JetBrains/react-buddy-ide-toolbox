import dynamic from "next/dynamic" 
import React from "react"
import { DevSupport as DefaultDevSupport } from '@react-buddy/ide-toolbox';

const envDevmode =
  typeof process !== 'undefined'
    ? process.env?.REACT_APP_IDE_DEVMODE === 'true'
    : false;

const windowDevmode =
  typeof window !== 'undefined'
  && window?.REACT_BUDDY_IDE_DEVMODE === true;

const DEV_MODE = windowDevmode || envDevmode;

function enabledDevmode(devmode?: boolean) {
  return devmode != null
    ? devmode
    : DEV_MODE;
}

const NoSsrDevSupport = dynamic(
  import('@react-buddy/ide-toolbox').then<typeof DefaultDevSupport>(mod => mod.DevSupport),
  { ssr: false }
);


export const DevSupport = (props: Parameters<typeof DefaultDevSupport>[0]) => {
  const isDevmode = enabledDevmode(props.devmode);

  return isDevmode
    ? <NoSsrDevSupport {...props} />
    : props.children;
}
