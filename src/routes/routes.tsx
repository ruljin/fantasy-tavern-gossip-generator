import type { ReactNode } from "react";
import { Home } from "../pages/Home/Home";

interface Route {
	path: string;
	element: ReactNode;
}

export const ROUTES: Route[] = [{ path: "/", element: <Home /> }];
