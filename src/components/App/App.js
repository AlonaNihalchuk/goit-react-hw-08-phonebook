import { Switch, Route } from "react-router-dom";

import HomeView from "../../views/HomeView";
import RegisterView from "../../views/RegisterView";
import LoginView from "../../views/LoginView";
import ContactsView from "../../views/ContactsView";
import Container from "../Container/Container";
import AppBar from "../AppBar";

function App() {
  return (
    // <Container>
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
        {/* <Route path="/login" component={LoginView} /> */}
        {/* <Route path="/contacts" component={ContactsView} /> */}
      </Switch>
      {/* // </Container> */}
    </>
  );
}

export default App;
// import "./App.css";
// import Form from "../Form/Form";
// import Contacts from "../Contacts/Contacts";
// import Filter from "../Filter/Filter";

// function App() {
//   return (
//     <section className="phonebook">
//       <h1>Phonebook</h1>
//       <Form />

//       <h2 className="contactsHead">Contacts </h2>
//       <Filter />
//       <Contacts />
//     </section>
//   );
// }

// export default App;

// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import AppBar from './components/AppBar';
// import TodosView from './views/TodosView';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import Container from './components/Container';
// import { authOperations } from './redux/auth';
// import { connect } from 'react-redux';

// class App extends Component {
//   componentDidMount() {
//     this.props.onGetCurretnUser();
//   }

//   render() {
//     return (
// <Container>
//   <AppBar />

//   <Switch>
//     <Route exact path="/" component={HomeView} />
//     <Route path="/register" component={RegisterView} />
//     <Route path="/login" component={LoginView} />
//     <Route path="/todos" component={TodosView} />
//   </Switch>
// </Container>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onGetCurretnUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);