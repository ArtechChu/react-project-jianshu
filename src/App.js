import React, { Component } from 'react';
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
// import Detail from './pages/detail';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Writer from './pages/write';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login'  component={Login}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/writer' exact component={Writer}></Route>
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
