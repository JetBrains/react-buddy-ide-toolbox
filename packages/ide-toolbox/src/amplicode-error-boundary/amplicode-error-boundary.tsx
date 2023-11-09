import React from 'react';
import styles from './amplicode-error-boundary.module.scss';

interface Props {
  componentName?: string;
}

interface State {
  error: Error | null;
}
export class AmplicodeErrorBoundary extends React.Component<Props, State> {
  state: State = {error: null};

  componentDidCatch(error: Error) {
    console.error(error);
    this.setState({error});
  }

  componentDidUpdate(_prevProps: Props, prevState: State) {
    if (prevState.error != null) {
      this.setState({error: null});
    }
  }

  render() {
    const {error} = this.state;
    const {componentName, children} = this.props;

    if (error != null) {
      return (
        <div className={styles.errorMessageContainer}>
          <h2 className={styles.errorMessageTitle}>
            {componentName
              ? `Something went wrong while rendering ${componentName} component`
              : 'Something went wrong'}
            </h2>
          <p>{error.message}</p>
          <pre className={styles.errorMessageStack}>{error.stack}</pre>
        </div>
      );
    }

    return children;
  }
}
