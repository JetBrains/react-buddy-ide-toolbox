import React, {Suspense} from "react";
import { DEV_MODE } from "../config";

export interface InitialHookStatus {
  loading: boolean,
  error: boolean
}
interface DevBootstrapProps {
  ComponentPreviews: React.FC
}

interface DevSupportProps {
  children: JSX.Element,
  ComponentPreviews: React.FC,
  useInitialHook?: () => InitialHookStatus
}

const withInitialHook: (
  useInitialHook: () => InitialHookStatus, 
  ComponentPreviews: React.FC
) => React.FC = (useInitialHook, ComponentPreviews) => {
  const DevBootstrapWrapped: React.FC = () => {
    const status: InitialHookStatus = useInitialHook();

    if (status.loading) {
      return <div> loading... </div>;
    }

    if(status.error) {
      return <div>
        Unable to bootstrap dev mode. Probably you need to run backend or enable backend mocking mode.
      </div>;
    }

    return <DevBootstrap ComponentPreviews={ComponentPreviews}/>
  }
  return DevBootstrapWrapped;
}

const DevBootstrap: React.FC<DevBootstrapProps> = ({ComponentPreviews}) => {
    return (
      <Suspense fallback={<div>Loading sources...</div>}>
        <ComponentPreviews/>
      </Suspense>
    )
};

export const DevSupport: React.FC<DevSupportProps> = ({ children, ComponentPreviews, useInitialHook }) => {
  if (DEV_MODE) {
    return useInitialHook
    ? withInitialHook(useInitialHook, ComponentPreviews)({})
    : <DevBootstrap ComponentPreviews={ComponentPreviews}/>
  }

  return <>{children}</>;
};
