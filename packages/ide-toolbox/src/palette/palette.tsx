import React, {PropsWithChildren, ReactElement, useLayoutEffect, useState} from 'react';
import {VariantRoute} from './variant-route';
import {ReactBuddyErrorBoundary} from '../react-buddy-error-boundary/react-buddy-error-boundary';
import styles from './palette.module.scss';

export type CategoryProps = {
  name: string;
  children: JSX.Element | JSX.Element[];
};

export type ComponentProps = {
  categoryName?: string;
  name: string;
  children: JSX.Element | JSX.Element[];
  defaultProps?: {};
  subComponents?: JSX.Element | JSX.Element[];
  docURL?: string;
};

export type VariantProps = {
  categoryName?: string;
  componentName?: string;
  name?: string;
  previewLayout?: 'center' | 'stretch';
  requiredParams?: Array<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  proto?: (...args: any[]) => ReactElement<any, any> | null | void;
  docURL?: string;
};

export const Category: React.FC<CategoryProps> = ({children, name}) => {
  return <>{getTransformedCategoryChildren(children, name)}</>;
};
export const Component: React.FC<ComponentProps> = ({
  children,
  categoryName,
  name,
}) => {
  return <>{getTransformedComponentChildren(children, name, categoryName)}</>;
};

export const Variant: React.FC<PropsWithChildren<VariantProps>> = ({
  children,
  categoryName,
  componentName,
  name,
  previewLayout,
}) => {
  return (
    <VariantRoute
      categoryName={categoryName}
      componentName={componentName}
      variantName={name}
      previewLayout={previewLayout}
    >
      <ReactBuddyErrorBoundary componentName={componentName}>{children}</ReactBuddyErrorBoundary>
    </VariantRoute>
  );
};

function addFullWindowClassToParents(curNode: HTMLElement | null) {
  if(curNode === null) return;

  curNode.classList.add(styles.fullWindow);

  if(curNode === document.body) return;

  addFullWindowClassToParents(curNode.parentElement);
}

function removeFullWindowClassFromParents(curNode: HTMLElement | null) {
  if(curNode === null) return;

  curNode.classList.remove(styles.fullWindow);

  if(curNode === document.body) return;

  removeFullWindowClassFromParents(curNode.parentElement);
}

interface PaletteProps{
  embeddable?: boolean;
}

export const Palette = ({embeddable, children}: PropsWithChildren<PaletteProps>) => {
  const [paletteNode, setPaletteNode] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if(paletteNode !== null) addFullWindowClassToParents(paletteNode);
    return () => {
      if(paletteNode !== null) removeFullWindowClassFromParents(paletteNode);
    }
  }, [paletteNode]);

  return embeddable
    ? <>{children}</>
    : <div ref={setPaletteNode}>{children}</div>;
};

function getTransformedCategoryChildren(
  children: JSX.Element | JSX.Element[],
  categoryName: string,
) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {categoryName});
  });
}

function getTransformedComponentChildren(
  children: JSX.Element | JSX.Element[],
  componentName: string,
  categoryName?: string,
) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {categoryName, componentName});
  });
}
