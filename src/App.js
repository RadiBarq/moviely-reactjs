import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/common/navBar";
import MovieForm from './components/movieForm';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
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
