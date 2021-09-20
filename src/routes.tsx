import AuthPage from "./pages/AuthPage";
import WaitingPage from "./pages/WaitingPage";
import GamePage from "./pages/GamePage";

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
    path: "/",
    title: "LogoPro",
    component: AuthPage,
  },
];

export default AppRoutes;
