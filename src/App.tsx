import { Page } from "./layout/page/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/Routes";

export const App = () => (
  <Page>
    <BrowserRouter>
      <Routes>
        {ROUTES.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  </Page>
);
