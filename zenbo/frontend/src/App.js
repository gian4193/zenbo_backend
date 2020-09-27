import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home } from './page/home';
import { SuccessLogin } from './page/after_login/success_login';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* todo: head */}
        <Route exact path="/" component={Home} />
        <Route path='/success_login' component={SuccessLogin}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
