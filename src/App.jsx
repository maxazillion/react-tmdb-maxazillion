import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./api";
import { Film, Home } from "./pages";

(async () => {
  console.log(api.index());
})();

function App() {
  return (
    <>
      <div className="flex min-w-max border-gray-500 border-2">
        <h1 className="m-3 self-center font-bold">TMDB Search</h1>
      </div>
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
    </>
  );
}

export default App;
