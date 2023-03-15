import React, { Fragment, useEffect, useLayoutEffect, useState } from "react"

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export interface NoSsrProps {
  /**
   * You can wrap a node.
   */
  children?: React.ReactNode;
  /**
   * If `true`, the component will not only prevent server-side rendering.
   * It will also defer the rendering of the children into a different screen frame.
   * @default false
   */
  defer?: boolean;
  /**
   * The fallback content to display.
   * @default null
   */
  fallback?: React.ReactNode;
}
export function NoSsr(props: NoSsrProps): JSX.Element {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = useState(false);

  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);

  useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  // We need the Fragment here to force react-docgen to recognise NoSsr as a component.
  return <Fragment>{mountedState ? children : fallback}</Fragment>;
}
