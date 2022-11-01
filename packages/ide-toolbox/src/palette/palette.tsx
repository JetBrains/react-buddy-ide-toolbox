import React, {CSSProperties, PropsWithChildren, ReactElement, useContext} from 'react';
import {VariantRoute} from './variant-route';
import {ReactBuddyErrorBoundary} from '../react-buddy-error-boundary/react-buddy-error-boundary';

interface WithStyles {
  style?: CSSProperties | undefined;
  className?: string | undefined;
}

interface PaletteProps extends WithStyles {
  embeddable?: boolean;
}
export const Palette = ({style, className, embeddable, children}: PropsWithChildren<PaletteProps>) => {
  return embeddable
    ? <>{children}</>
    : <div style={style} className={className}>{children}</div>;
};

const CategoryContext = React.createContext<{
  categoryClassName?: string | undefined;
  categoryStyle?: CSSProperties | undefined;
}>({});
export const useCategoryContext = () => useContext(CategoryContext);
interface CategoryProps extends WithStyles {
  name: string;
  children: JSX.Element | JSX.Element[];
};
export const Category: React.FC<CategoryProps> = ({
  children,
  name,
  className,
  style
}) => {
  return (
    <CategoryContext.Provider value={{categoryClassName: className, categoryStyle: style}}>
      {getTransformedCategoryChildren({
        children,
        categoryName: name,
      })}
    </CategoryContext.Provider>
  );
};
interface GetTransformedCategoryChildrenParams {
  children: JSX.Element | JSX.Element[];
  categoryName: string;
}
function getTransformedCategoryChildren({
  children,
  categoryName,
}: GetTransformedCategoryChildrenParams) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {categoryName});
  });
}

const ComponentContext = React.createContext<{
  componentClassName?: string | undefined;
  componentStyle?: CSSProperties | undefined;
}>({});
export const useComponentContext = () => useContext(ComponentContext);
interface ComponentProps extends WithStyles {
  categoryName?: string;
  name: string;
  children: JSX.Element | JSX.Element[];
  defaultProps?: {};
  subComponents?: JSX.Element | JSX.Element[];
  docURL?: string;
};
export const Component: React.FC<ComponentProps> = ({
  children,
  categoryName,
  name,
  className,
  style,
}) => {
  return (
    <ComponentContext.Provider value={{componentClassName: className, componentStyle: style}}>
      {getTransformedComponentChildren({
        children,
        componentName: name,
        categoryName,
      })}
    </ComponentContext.Provider>
  );
};
interface GetTransformedComponentChildrenParams{
  children: JSX.Element | JSX.Element[],
  componentName: string,
  categoryName?: string,
}
function getTransformedComponentChildren({
    children,
    componentName,
    categoryName,
}: GetTransformedComponentChildrenParams) {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      categoryName,
      componentName,
    });
  });
}

const VariantContext = React.createContext<{
  variantClassName?: string | undefined;
  variantStyle?: CSSProperties | undefined;
}>({});
export const useVariantContext = () => useContext(VariantContext);
interface VariantProps extends WithStyles {
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
