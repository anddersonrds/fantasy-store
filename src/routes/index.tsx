import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from "../pages/Home"
import { Cart } from "../pages/Cart"
import { Checkout } from "../pages/Checkout"
import { OrderSummary } from "../pages/OrderSummary"

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cart" exact component={Cart} />
    <Route path="/checkout" exact component={Checkout} />
    <Route path="/order" exact component={OrderSummary} />
    <Route>Page not found</Route>
  </Switch>
);

export default Routes;
