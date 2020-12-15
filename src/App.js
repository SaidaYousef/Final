import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/index'
import Cartt from '../src/components/Cart/Cart'
import Home from './components/Home/Home';
import { useSelector } from 'react-redux'

function App() {
  const Cart = useSelector(state => state.changein.list)

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={(props) => <Home routerProps={props} />} />
        <Route exact path='/Cart' render={(props) => <Cartt routerProps={props} Cart={Cart} />} />
        <Route exact path='/Checkout' render={(props) => <Checkout routerProps={props} Cart={Cart} />} />
      </Switch>
    </Router>
  );
}

export default App;