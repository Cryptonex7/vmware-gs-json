import AuthPage from "./pages/AuthPage";
import ConversionPage from "./pages/ConversionPage";

export type Route = {
  path: string;
  title: string;
  component: any;
};

const AppRoutes: Route[] = [
  // ! MAKE SURE: to keep Auth Route at the end
  {
    path: "/convert",
    title: "LogoPro",
    component: ConversionPage,
  },
  {
    path: "/",
    title: "LogoPro",
    component: AuthPage,
  },
];

export default AppRoutes;
