import React, { Component } from 'react';
import Routes from './containers/Routes';
import Navbar from './components/bars/navbar/Navbar';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper flex">
          <Navbar/>
          <Routes/>
        </div>
      </Provider>
    );
  }
}

export default App;
