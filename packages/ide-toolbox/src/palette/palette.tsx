import React, {ReactElement, useLayoutEffect} from 'react';
import {VariantRoute} from './variant-route';
import {ErrorBoundary} from '../error-boundary/error-boundary';
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
};

export type VariantProps = {
  categoryName?: string;
  componentName?: string;
  name?: string;
  requiredParams?: Array<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  proto?: (...args: any[]) => ReactElement<any, any> | null | void;
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

export const Variant: React.FC<VariantProps> = ({
  children,
  categoryName,
  componentName,
  name,
}) => {
  return (
    <VariantRoute
      categoryName={categoryName}
      componentName={componentName}
      variantName={name}
    >
      <ErrorBoundary componentName={componentName}>{children}</ErrorBoundary>
    </VariantRoute>
  );
};

export const Palette: React.FC = ({children}) => {
  useLayoutEffect(() => {
    document.body.classList.add(styles.bodyPaletteStyles);

    return () => {
      document.body.classList.remove(styles.bodyPaletteStyles);
    };
  }, []);

  return <div className={styles.palette}>{children}</div>;
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
