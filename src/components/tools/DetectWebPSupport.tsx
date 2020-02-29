import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { SET_WEBP_SUPPORTED } from '../../store/types/webpSupported';
import { setWebpSupported } from '../../store/actions/webpSupported';

interface Props {
  setWebpSupported?: typeof setWebpSupported;
}

class DetectWebPSupport extends Component<Props> {
  public props: Props;

  private canUseWebP(feature: string, callback: (feature: string, isSupported: boolean) => void): void {
    const kTestImages: Record<string, string> = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    const img = new Image();
    img.onload = () => {
      const result = (img.width > 0) && (img.height > 0);
      callback(feature, result);
    };
    img.onerror = () => {
      callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
  }

  componentDidMount(): void {
    const { setWebpSupported } = this.props;

    this.canUseWebP('lossy', (feature: string, isSupported: boolean) => {
      setWebpSupported(isSupported);
    });
  }

  render(): null {
    return null;
  }
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  setWebpSupported: (supported: boolean) => dispatch({ type: SET_WEBP_SUPPORTED, payload: supported }),
});

export default connect<Props>(
  null,
  mapDispatchToProps
)(DetectWebPSupport);
