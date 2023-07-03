import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Products from '../pages/Products';

function ContentMainRoutes() {
    return (
        <>
          <Router>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/reports' component={Reports} />
              <Route path='/products' component={Products} />
            </Switch>
          </Router>
        </>
      );
}

export default ContentMainRoutes