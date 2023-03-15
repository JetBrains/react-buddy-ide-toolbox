import { DevSupport as DefaultDevSupport } from '@react-buddy/ide-toolbox';
import { NoSsr } from './NoSsr';
import React from 'react';
import { reactBuddyDevtoolsScript } from './reactBuddyDevtoolsScript';
import { DEV_MODE } from './config';
import Head from 'next/head';

export const DevSupport = (props: Parameters<typeof DefaultDevSupport>[0]) => {
  const isDevmode = enabledDevmode(props.devmode);

  if (!isDevmode) return props.children;

  return (
      <>
        <Head><script dangerouslySetInnerHTML={{__html: reactBuddyDevtoolsScript}} /></Head>
        <NoSsr>
          <DefaultDevSupport {...props} />
        </NoSsr>
      </>
  );
}

function enabledDevmode(devmode?: boolean) {
  return devmode != null ? devmode : DEV_MODE;
}
