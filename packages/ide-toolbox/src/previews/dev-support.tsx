import React from "react";
import { DEV_MODE } from "../config";


export interface InitialHookStatus {
  loading: boolean,
  error: boolean
}
interface DevBootstrapProps {
  children: JSX.Element
}

interface DevSupportProps {
  children: JSX.Element,
  ComponentPreviews: JSX.Element,
  useInitialHook?: () => InitialHookStatus
}

const withInitialHook: (useInitialHook: () => InitialHookStatus) => React.FC<DevBootstrapProps> = (useInitialHook) => {
  const DevBootstrapWrapped: React.FC<DevBootstrapProps> = ({children}) => {
    const status: InitialHookStatus = useInitialHook();

    if (status.loading) {
      return <div> loading... </div>;
    }

    if(status.error) {
      return <div>
        Unable to bootstrap dev mode. Probably you need to run backend or enable backend mocking mode.
      </div>;
    }

    return <DevBootstrap>{children}</DevBootstrap> ;
  }
  return DevBootstrapWrapped;
}

const DevBootstrap: React.FC<DevBootstrapProps> = ({children}) => {
    return <>{children}</>;
};

export const DevSupport: React.FC<DevSupportProps> = ({ children, ComponentPreviews, useInitialHook }) => {
  if (DEV_MODE) {
    return useInitialHook
    ? withInitialHook(useInitialHook)({children: ComponentPreviews})
    : (
      <DevBootstrap>
        {ComponentPreviews}
      </DevBootstrap>
    )
  } else {
    return <>{children}</>;
  }
};
