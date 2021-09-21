import { Switch, Route } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./routes";
import ScaffoldHOC from "./components/ScaffoldHOC";

function App() {
  return (
    <>
      <Switch>
        {AppRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={
              route.path === "/" ? route.component : ScaffoldHOC(route.component, route.title)
            }
          />
        ))}
      </Switch>
    </>
  );
}

export default App;
