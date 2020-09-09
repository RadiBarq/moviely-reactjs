import React from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm'
import MovieForm from './components/movieForm';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component = {LoginForm}/>
          <Route path="/movies/:id" component = {MovieForm}/>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/notfound" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notfound" component={NotFound} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
