import React, {CSSProperties, PropsWithChildren, ReactElement, useContext, useLayoutEffect, useMemo, useState} from 'react';
import { classNames } from '../util/classNames';
import {useRoute, PALETTE_PATH} from '../routing/routing';
import { useCategoryContext } from '../category/category';
import { useComponentContext } from '../component/component';
import { ReactBuddyErrorBoundary } from '../react-buddy-error-boundary/react-buddy-error-boundary';
import styles from './variant.module.scss';

const DEFAULT_VARIANT_NAME = 'DEFAULT_VARIANT';

interface VariantRouteProps {
  categoryName?: string;
  componentName?: string;
  variantName?: string;
  previewLayout?: 'center' | 'stretch';
  requiredParams?: Array<string>;
};

const VariantRoute: React.FC<VariantRouteProps> = ({
  categoryName,
  componentName,
  variantName = DEFAULT_VARIANT_NAME,
  previewLayout = 'center',
  children,
}) => {
  const {categoryClassName, categoryStyle} = useCategoryContext();
  const {componentClassName, componentStyle} = useComponentContext();
  const {variantClassName, variantStyle} = useVariantContext();

  const paletteItemPath = useMemo(() => {
    return getPaletteItemPath([categoryName, componentName, variantName]);
  }, [categoryName, componentName, variantName]);

  const isPathMatch = useRoute(paletteItemPath, true);

  const [paletteNode, setPaletteNode] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if(paletteNode !== null) addFullWindowClassToParents(paletteNode);
    return () => {
      if(paletteNode !== null) removeFullWindowClassFromParents(paletteNode);
    }
  }, [paletteNode]);

  if (!isPathMatch) {
    return null;
  }

  return (
    <div className={categoryClassName} style={categoryStyle}>
      <div className={componentClassName} style={componentStyle} ref={setPaletteNode}>
        <div
          className={
            previewLayout === 'center'
              ? classNames(styles.variantRouteCenter, variantClassName)
              : variantClassName
          }
          style={variantStyle}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function getPaletteItemPath(names: Array<string | null | undefined>): string {
  return PALETTE_PATH + '/' + names.filter((name) => name != null).join('/');
}

const VariantContext = React.createContext<{
  variantClassName?: string | undefined;
  variantStyle?: CSSProperties | undefined;
}>({});
const useVariantContext = () => useContext(VariantContext);
interface VariantProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  categoryName?: string;
  componentName?: string;
  name?: string;
  previewLayout?: 'center' | 'stretch';
  requiredParams?: Array<string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  proto?: (...args: any[]) => ReactElement<any, any> | null | void;
  docURL?: string;
};
export const Variant: React.FC<PropsWithChildren<VariantProps>> = ({
  children,
  categoryName,
  componentName,
  name,
  previewLayout,
  className,
  style,
}) => {
  return (
    <VariantContext.Provider value={{variantClassName: className, variantStyle: style}}>
      <VariantRoute
        previewLayout={previewLayout}
        variantName={name}
        categoryName={categoryName}
        componentName={componentName}
      >
        <ReactBuddyErrorBoundary componentName={componentName}>{children}</ReactBuddyErrorBoundary>
      </VariantRoute>
    </VariantContext.Provider>
  );
};

function addFullWindowClassToParents(curNode: HTMLElement | null) {
  if(curNode === null || curNode === document as unknown) return;

  curNode.className = classNames(styles.fullWindow, curNode.className);

  addFullWindowClassToParents(curNode.parentElement);
}

function removeFullWindowClassFromParents(curNode: HTMLElement | null) {
  if(curNode === null || curNode === document as unknown) return;

  curNode.classList.remove(styles.fullWindow);

  removeFullWindowClassFromParents(curNode.parentElement);
}
