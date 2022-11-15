import React, {CSSProperties, PropsWithChildren} from 'react';

interface PaletteProps {
  style?: CSSProperties | undefined;
  className?: string | undefined;
  embeddable?: boolean;
}
export const Palette = ({style, className, embeddable, children}: PropsWithChildren<PaletteProps>) => {
  return embeddable
    ? <>{children}</>
    : <div style={style} className={className}>{children}</div>;
};



