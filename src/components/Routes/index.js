import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormPage from "../../pages/FormPage";
import HomePage from "../../pages/HomePage";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <FormPage />
          </Route>
          <Route path="/home/:user">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default Routes;
