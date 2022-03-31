import React from 'react';
import styles from './error-boundary.module.scss';

interface Props {
  componentName?: string;
}

interface State {
  hasError: boolean;
}
export class ErrorBoundary extends React.Component<Props, State> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.hasError) {
      this.setState({hasError: false});
    }
  }

  render() {
    const {hasError} = this.state;
    const {componentName = '', children} = this.props;

    if (hasError) {
      return (
        <h2 className={styles.errorMessage}>
          {`Something went wrong while rendering ${componentName} component`}
        </h2>
      );
    }

    return children;
  }
}
