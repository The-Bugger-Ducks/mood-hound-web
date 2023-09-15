import RoutesEnum from "./utils/enums/routes.enum";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";
import { Flex } from "@chakra-ui/react";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RoutesDom>
        <Route path={RoutesEnum.LOGIN} element={<Login />} />

        <Route path={RoutesEnum.AUTHENTICATED} element={<Authenticated />}>
          <Route path={RoutesEnum.DASHBOARD} element={<Dashboard />} />
        </Route>
      </RoutesDom>
    </BrowserRouter>
  );
}

function Authenticated() {
  return (
    <Flex flexDir="column" gap="2.5rem" p="2.5rem">
      <Header />
      <Outlet />
    </Flex>
  );
}
