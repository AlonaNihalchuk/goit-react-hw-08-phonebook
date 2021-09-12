import { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";

import Section from "../Section/Section";
import AppBar from "../AppBar/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as authOperetions from "../../redux/Auth/authOperarions";
import * as authSelectors from "../../redux/Auth/authSelectors";
import PrivateRoute from "../Routs/PrivateRout";
import PublicRoute from "../Routs/PublicRoute";

const HomeView = lazy(() =>
  import("../../views/HomeView/HomeView.js" /* webpackChunkName: "HomeView" */)
);
const RegisterView = lazy(() =>
  import(
    "../../views/RegisterView/RegisterView.js" /* webpackChunkName: "RegisterView" */
  )
);
const ContactsView = lazy(() =>
  import(
    "../../views/ContactsView/ContactsView.js" /* webpackChunkName: "ContactsView" */
  )
);
const LoginView = lazy(() =>
  import(
    "../../views/LoginView/LoginView.js" /* webpackChunkName: "LoginView" */
  )
);

function App() {
  const dispatch = useDispatch();
  const isBeingLoggedIn = useSelector(authSelectors.getIsBeingLoggedIn);

  useEffect(() => {
    dispatch(authOperetions.refreshUser());
  }, [dispatch]);

  return (
    !isBeingLoggedIn && (
      <>
        <AppBar />
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            <Section>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              <Redirect to="/" />
            </Section>
          </Switch>
        </Suspense>
      </>
    )
  );
}

export default App;
