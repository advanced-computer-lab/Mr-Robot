import React from "react";
import { Component } from 'react';
import Home from '../src/Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Flights from './Components/Flights';
import CreateFlight from './Components/CreateFlights';
import SearchFlights from './Components/SearchFlights';
import SearchResults from './Components/SearchResults'
import UpdateFlight from './Components/UpdateFlight'
import DeleteFlight from './Components/DeleteFlight';



function App() {
  const [data, setData] = React.useState(null);


  return (
    <>

      <Router>
        <nav className='navbar'>
          <Link to="/"> Home</Link>
          <Link to="/viewFlights"> View Flights</Link>
          <Link to="/createflight"> Create Flight</Link>
          <Link to="/searchflight"> Search Flight</Link>
          <Link to="/updateFlight"> Update Flight</Link>
          <Link to="/deleteflight"> Delete Flight</Link>
          {/* <Navbar /> */}
        </nav>
        <Switch>
          <Route path="/createFlight" exact component={CreateFlight} />
          <Route path="/" exact component={Home} />
          <Route path="/viewflights" exact component={Flights} />
          <Route path="/searchflight" exact component={SearchFlights} />
          <Route path="/updateFlight" exact component={UpdateFlight} />
          <Route path="/deleteflight" exact component={DeleteFlight} />
          <Route path="/searchresults" exact component={SearchResults}
          />
        </Switch>
      </Router>
    </>
  );


  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }


}
export default App;