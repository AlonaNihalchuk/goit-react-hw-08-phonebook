import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
