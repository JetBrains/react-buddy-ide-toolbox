import React, {CSSProperties, useContext} from 'react';

const ComponentContext = React.createContext<{
  componentClassName?: string | undefined;
  componentStyle?: CSSProperties | undefined;
}>({});
export const useComponentContext = () => useContext(ComponentContext);
interface ComponentProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
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
