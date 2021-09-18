import TestFC from "./components/_TestFC";

export type Route = {
  path: string;
  title: string;
  component: any;
};

const AppRoutes: Route[] = [
  {
    path: "/auth",
    title: "LogoPro",
    component: () => <h1>Hello Clarity</h1>,
  },
];

export default AppRoutes;
