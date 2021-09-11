import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...routePops
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routePops}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
