import React, { Component } from 'react';

interface Props {
  color: string;
}

class ProjectBackgroundBlobs extends Component<Props> {
  public props: Props;

  render() {
    const { color } = this.props;

    const blobStyle: React.CSSProperties = {
      backgroundColor: color
    };

    return (
      <div className="specialty-background-blobs">
        <div className="blob circle" style={blobStyle}/>
        <div className="blob square" style={blobStyle}/>
      </div>
    );
  }
}

export default ProjectBackgroundBlobs;