import React, {Fragment} from "react"

export const Palette: React.FC = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export type ComponentProps = {
  name?: string;
  defaultProps?: {};
}

export const Component: React.FC<ComponentProps> = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}


export const Category: React.FC<{name: String }> = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export type VariantProps = {
  name?: String,
  requiredParams?: Array<string>
}

export const Variant: React.FC<VariantProps> = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  )
}