import { RouteObject } from "react-router-dom";
import App from "./App";
import UseRefHookPage from "./hooks/use-ref/UseRefHook";
import LandingPage from "./pages/landing-page";
import UseMemoHookPage from "./hooks/use-memo/UseMemoHook";
import UseContextHookPage from "./hooks/use-context/UseContextHook";
import UseStatePage from "./hooks/use-state/UseStatePage";
import UseEffectPage from "./hooks/use-effect/UseEffectPage";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LandingPage },
      { path: "/hooks/useRef", Component: UseRefHookPage },
      { path: "/hooks/useMemo", Component: UseMemoHookPage },
      { path: "/hooks/useContext", Component: UseContextHookPage },
      { path: "/hooks/useState", Component: UseStatePage },
      { path: "/hooks/useEffect", Component: UseEffectPage },
    ],
  },
];

export default appRoutes;
