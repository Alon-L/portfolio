import React, { Component } from 'react';

interface Props extends React.ComponentProps<'div'> {
  placeholder: string;
  src: string;
  children?: JSX.Element | JSX.Element[];
}

interface State {
  src: string;
}

class LazyLoadingBackground extends Component<Props, State> {
  public props: Props;
  public state: State = {
    src: null
  };

  componentDidMount(): void {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    const { placeholder, children } = this.props;

    const lazyStyle: React.CSSProperties = {
      backgroundImage: `url(${this.state.src || placeholder})`
    };

    return (
      <div {...this.props} style={{...lazyStyle, ...this.props.style}}>
        {children}
      </div>
    );
  }
}

export default LazyLoadingBackground;