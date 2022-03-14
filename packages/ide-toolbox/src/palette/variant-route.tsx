import React, {useMemo} from 'react';
import {useRoute, PALETTE_PATH} from '../routing/routing';

const DEFAULT_VARIANT_NAME = 'DEFAULT_VARIANT';

export type VariantRouteProps = {
  categoryName?: string;
  componentName?: string;
  variantName?: string;
  requiredParams?: Array<string>;
};

export const VariantRoute: React.FC<VariantRouteProps> = ({
  categoryName,
  componentName,
  variantName = DEFAULT_VARIANT_NAME,
  children,
}) => {
  const paletteItemPath = useMemo(() => {
    return getPaletteItemPath([categoryName, componentName, variantName]);
  }, [categoryName, componentName, variantName]);

  const isPathMatch = useRoute(paletteItemPath, true);
  return isPathMatch ? <>{children}</> : null;
};

function getPaletteItemPath(names: Array<string | null | undefined>): string {
  return PALETTE_PATH + '/' + names.filter((name) => name != null).join('/');
}
