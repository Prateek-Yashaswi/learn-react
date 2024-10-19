import { RouteObject } from "react-router-dom";
import App from "./App";
import UseContextHookPage from "./hooks/use-context/UseContextHook";
import UseEffectPage from "./hooks/use-effect/UseEffectPage";
import UseImperativeHandlePage from "./hooks/use-imperative-handle/UseImperativeHandlePage";
import UseMemoHookPage from "./hooks/use-memo/UseMemoHook";
import UseRefHookPage from "./hooks/use-ref/UseRefHook";
import UseStatePage from "./hooks/use-state/UseStatePage";
import LandingPage from "./pages/landing-page";
import UseReducerPage from "./hooks/use-reducer/UseReducerPage";
import UseCallbackPage from "./hooks/use-callback/UseCallback";

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
      {
        path: "/hooks/useImperativeHandle",
        Component: UseImperativeHandlePage,
      },
      {
        path: "/hooks/useReducer",
        Component: UseReducerPage,
      },
      {
        path: "/hooks/useCallback",
        Component: UseCallbackPage,
      },
    ],
  },
];

export default appRoutes;
