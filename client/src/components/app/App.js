import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage } from '@pages';

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
