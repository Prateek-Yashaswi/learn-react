import { RouteObject } from "react-router-dom";
import App from "./App";
import UseRefHookPage from "./hooks/UseRefHook";
import LandingPage from "./pages/landing-page";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LandingPage },
      { path: "/hooks/useRef", Component: UseRefHookPage },
    ],
  },
];

export default appRoutes;
