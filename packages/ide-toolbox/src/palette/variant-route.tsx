import React, {useMemo} from 'react';
import {useRoute, PALETTE_PATH} from '../routing/routing';
import styles from './variant-route.module.scss';

const DEFAULT_VARIANT_NAME = 'DEFAULT_VARIANT';

export type VariantRouteProps = {
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
  const paletteItemPath = useMemo(() => {
    return getPaletteItemPath([categoryName, componentName, variantName]);
  }, [categoryName, componentName, variantName]);

  const isPathMatch = useRoute(paletteItemPath, true);

  if (!isPathMatch) {
    return null;
  }

  return previewLayout === 'center'
    ? <div className={styles.variantRouteCenter}>{children}</div>
    : <>{children}</>
}

function getPaletteItemPath(names: Array<string | null | undefined>): string {
  return PALETTE_PATH + '/' + names.filter((name) => name != null).join('/');
}
