import React, { Component } from 'react';
import Routes from './containers/Routes';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

export default App;
