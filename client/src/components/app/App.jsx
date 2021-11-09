import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ProductsPage } from '@pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
      </Switch>
    </Router>
  );
};
