import RoutesEnum from "./utils/enums/routes.enum";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RoutesDom>
        <Route path={RoutesEnum.DASHBOARD} element={<Dashboard />} />
        <Route path={RoutesEnum.LOGIN} element={<Login />} />
      </RoutesDom>
    </BrowserRouter>
  );
}
