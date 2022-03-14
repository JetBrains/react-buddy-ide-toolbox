import React, {useEffect, useState} from 'react';
import {ComponentPreviewProps, PropsModifier} from '@types';
import {RouteProps, useRoute} from '../routing/routing';

type RoutePreviewProps = RouteProps & {
  setPropsToEdit: (propsModifier: PropsModifier) => void;
};

export const RoutePreview: React.FC<RoutePreviewProps> = ({
  children,
  path,
  exact,
  setPropsToEdit,
}) => {
  const [modfiedProps, setModifiedProps] =
    useState<ComponentPreviewProps>(null);

  const isMatchPath = useRoute(path, exact);

  useEffect(() => {
    if (isMatchPath) {
      const currentProps = modfiedProps ?? children.props;
      const propsToEdit = {
        props: currentProps,
        updateProps: setModifiedProps,
      };
      setPropsToEdit(propsToEdit);
    }

    return () => {
      isMatchPath ? null : setModifiedProps(null);
    };
  }, [isMatchPath]);

  const childrenWithUpdatedProps = modfiedProps
    ? React.cloneElement(children, {...modfiedProps})
    : children;

  return isMatchPath ? <>{childrenWithUpdatedProps}</> : null;
};
