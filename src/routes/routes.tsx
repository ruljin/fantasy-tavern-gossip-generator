import type { ReactNode } from "react";
import { Home } from "../pages/Home/Home";

interface Route {
  path: string;
  element: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ROUTES: Route[] = [{ path: "/", element: <Home /> }];
