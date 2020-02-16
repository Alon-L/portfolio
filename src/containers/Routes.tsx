import React, { Component } from 'react';
import Home from '../components/pages/home/Home';
import ReactFullpage from '@fullpage/react-fullpage';

class Routes extends Component {
  render() {
    return (
      <main>
        <ReactFullpage
          licenseKey={process.env.FULL_JS_LICENSE_KEY}
          scrollingSpeed={1000}
          anchors={['hero', 'secondPage']}
          sectionsColor={['#C63D0F', '#1BBC9B', '#eeff70', '#63a8ff', '#fff']}
          navigation={true}
          navigationPosition={'right'}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Home/>
                </div>
                <div className="section">
                  <h1>Section 2</h1>
                </div>
                <div className="section">
                  <h1>Section 3</h1>
                </div>
                <div className="section">
                  <h1>Section 4</h1>
                </div>
                <div className="section">
                  <h1>Section 5</h1>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </main>
    );
  }
}

export default Routes;
