import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";
import UserRegistration from "./pages/UserRegistration";
import UserUpdate from "./pages/UserUpdate";

import RoutesEnum from "./utils/enums/routes.enum";

import AuthenticatedLayout from "./layouts/authenticated.layout";

import { useAuth } from "./hooks/useAuth";

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RoutesDom>
        <Route element={<Authenticated isPrivate={false} />}>
          <Route path={RoutesEnum.LOGIN} element={<Auth />} />
        </Route>

        <Route element={<Authenticated isPrivate={true} />}>
          <Route element={<AuthenticatedLayout />}>
            <Route path={"/"} element={<Homepage />} />
            <Route path={RoutesEnum.DASHBOARD} element={<Homepage />} />

            <Route
              path={RoutesEnum.USER_REGISTRATION}
              element={<UserRegistration />}
            />

            <Route path={RoutesEnum.USER_UPDATE} element={<UserUpdate />} />
          </Route>
        </Route>
      </RoutesDom>
    </BrowserRouter>
  );
}

function Authenticated({ isPrivate }: { isPrivate: boolean }) {
  const { signedIn } = useAuth();

  console.log(signedIn);

  if (!signedIn && isPrivate) {
    return <Navigate to={RoutesEnum.LOGIN} replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
