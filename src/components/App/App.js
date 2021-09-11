import { Switch, Route, Redirect } from "react-router-dom";

import Container from "../Container/Container";
import HomeView from "../../views/HomeView";
import RegisterView from "../../views/RegisterView";
import ContactsView from "../../views/ContactsView";
import LoginView from "../../views/LoginView";
import AppBar from "../AppBar/AppBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as authOperetions from "../../redux/Auth/authOperarions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperetions.refreshUser());
  }, [dispatch]);

  return (
    <Container>
      <>
        <AppBar />
        <Switch>
          {/* <Route exact path="/" component={HomeView} /> */}
          {/* <Route path="/register" component={RegisterView} /> */}
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/contacts">
            <ContactsView />
          </Route>
          <Route path="/login" component={LoginView} />
          {/* <Route path="/contacts" component={ContactsView} /> */}
          <Redirect to="/" />
        </Switch>
      </>
    </Container>
  );
}

export default App;
