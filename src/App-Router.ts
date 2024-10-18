import { RouteObject } from "react-router-dom";
import App from "./App";
import UseRefHookPage from "./hooks/UseRefHook";
import LandingPage from "./pages/landing-page";
import UseMemoHookPage from "./hooks/UseMemoHook";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LandingPage },
      { path: "/hooks/useRef", Component: UseRefHookPage },
      { path: "/hooks/useMemo", Component: UseMemoHookPage },
    ],
  },
];

export default appRoutes;
