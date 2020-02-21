import React, { Component } from 'react';

interface Props {
  children?: JSX.Element;
}

class CompleteCenter extends Component<Props> {
  public props: Props;

  render() {
    const { children } = this.props;
    return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        {children}
      </div>
    );
  }
}

export default CompleteCenter;