import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./api";
import { Film, Home } from "./pages";

(async () => {
  console.log(api.index());
})();

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id">
          <Film />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
