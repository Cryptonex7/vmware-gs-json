import AuthPage from "./pages/AuthPage";
import WaitingPage from "./pages/WaitingPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";

export type Route = {
  path: string;
  title: string;
  component: any;
};

const AppRoutes: Route[] = [
  // ! MAKE SURE: to keep Auth Route at the end
  {
    path: "/waiting",
    title: "LogoPro",
    component: WaitingPage,
  },
  {
    path: "/game",
    title: "LogoPro",
    component: GamePage,
  },
  {
    path: "/results",
    title: "LogoPro",
    component: ResultsPage,
  },
  {
    path: "/",
    title: "LogoPro",
    component: AuthPage,
  },
];

export default AppRoutes;
