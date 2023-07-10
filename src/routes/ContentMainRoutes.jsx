import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateEmployed from "../pages/createEmployed/CreateEmployed";

function ContentMainRoutes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/create/employed" component={CreateEmployed} />
        </Switch>
      </Router>
    </div>
  );
}

export default ContentMainRoutes;
