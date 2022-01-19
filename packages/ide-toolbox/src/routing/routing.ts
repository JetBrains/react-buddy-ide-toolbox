import {useState, useCallback, useEffect} from "react";

export const PALETTE_PATH='/REACT_BUDDY_PALETTE';
export const URL_CHANGE_EVENT = "urlchange";

export type RouteProps = {
  path: string,
  exact?: boolean
  children: JSX.Element
}

export const useRoute = (path: string, exact?: boolean) => {
  const [, setUpdate] = useState<boolean>(false);
  const update = useCallback(() => {
    setUpdate((reRender) => {
      return !reRender;
    })
  }, []);

  useEffect(() => {
    window.addEventListener(URL_CHANGE_EVENT, update);
    window.addEventListener("popstate", update);
    return () => {
      window.removeEventListener(URL_CHANGE_EVENT, update);
      window.removeEventListener("popstate", update);
    }
  }, []);

  return isMatchPath(path, exact);
}

export function isMatchPath(path: string, exact: boolean = false): boolean {
  const currentPath = getCurrentPath();
  const match = new RegExp(`^${encodeURI(path)}`).exec(currentPath);

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

export function historyPush(url: string) {
  window.history.replaceState({}, "", url);
  dispatchUrlChangeEvent(url);
}

function dispatchUrlChangeEvent(url: string) {
  const urlChangeEvent = new CustomEvent(URL_CHANGE_EVENT, {
    bubbles: true,
    detail: url
  });
  window.dispatchEvent(urlChangeEvent);
}
