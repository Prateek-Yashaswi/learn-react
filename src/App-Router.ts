import { RouteObject } from "react-router-dom";
import App from "./App";
import UseRefHookPage from "./hooks/UseRefHook";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [{ path: "/useRef", Component: UseRefHookPage }],
  },
];

export default appRoutes;
