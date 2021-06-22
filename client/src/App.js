import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  state = {
    results: ""
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/nomatch" component={NoMatch} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
