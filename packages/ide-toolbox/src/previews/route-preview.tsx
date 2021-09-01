
import React, { useEffect, useState, useCallback } from "react";
import { ComponentPreviewProps, PropsModifier } from "./previews.types";

interface RouteProps {
  children: JSX.Element,
  path: string,
  exact?: boolean,
  setPropsToEdit: (propsModifier: PropsModifier) => void
}

export const RoutePreview: React.FC<RouteProps> = ({ children, path, exact, setPropsToEdit }) => {
  const [, setUpdate] = useState(false);
  const [modfiedProps, setModifiedProps] = useState<ComponentPreviewProps>(null)
  const update = useCallback(() => {
    setUpdate((reRender) => {
      return !reRender;
    })
  }, []);

  useEffect(() => {
    window.addEventListener('popstate', update);
    return () => {
      window.removeEventListener('popstate', update);
    }
  }, []);

  useEffect(() => {
    if (isMatchPath(path, exact)) {
      const currentProps = modfiedProps ?? children.props;
      const propsToEdit = {
        props: currentProps,
        updateProps: setModifiedProps
      }
      setPropsToEdit(propsToEdit)
    }

    return () => {
      isMatchPath(path, exact) ? null : setModifiedProps(null);
    }
  })

  const childrenWithUpdatedProps = modfiedProps
    ? React.cloneElement(children, { ...modfiedProps })
    : children

  return isMatchPath(path, exact) ? <>{childrenWithUpdatedProps}</> : null;
}

export function isMatchPath(path: string, exact: boolean = false): boolean {
  const currentPath = getCurrentPath();
  const match = new RegExp(`^${path}`).exec(currentPath);

  if (match) {
    const [url] = match;
    return exact ? currentPath === url : true;
  }

  return false;
}

function getCurrentPath() {
  const { hash, pathname } = window.location;
  return hash ? hash.replace("#", "") : pathname;
}
