import api from "./api";
import { Home } from "./pages";

(async () => {
  console.log(api.index());
})();

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
