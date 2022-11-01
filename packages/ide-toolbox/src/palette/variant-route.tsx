import React, {useLayoutEffect, useMemo, useState} from 'react';
import { classnames } from '../util/classnames';
import {useRoute, PALETTE_PATH} from '../routing/routing';
import { useCategoryContext, useComponentContext, useVariantContext } from './palette';
import styles from './variant-route.module.scss';

const DEFAULT_VARIANT_NAME = 'DEFAULT_VARIANT';

export interface VariantRouteProps {
  categoryName?: string;
  componentName?: string;
  variantName?: string;
  previewLayout?: 'center' | 'stretch';
  requiredParams?: Array<string>;
};

export const VariantRoute: React.FC<VariantRouteProps> = ({
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
              ? classnames(styles.variantRouteCenter, variantClassName)
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
