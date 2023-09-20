import RoutesEnum from "./utils/enums/routes.enum";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserRegistration from "./pages/UserRegistration";

import { Flex } from "@chakra-ui/react";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RoutesDom>
        <Route path={RoutesEnum.LOGIN} element={<Login />} />

        <Route path={RoutesEnum.AUTHENTICATED} element={<Authenticated />}>
          <Route path={RoutesEnum.DASHBOARD} element={<Dashboard />} />

          <Route
            path={RoutesEnum.USER_REGISTRATION}
            element={<UserRegistration />}
          />
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
