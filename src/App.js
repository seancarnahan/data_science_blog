import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/js/Home';
import About from './components/js/About';
import SignUp from './components/js/SignUp'
import CreateBlog from './components/js/CreateBlog'
import Navbar from './components/js/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" component={SignUp} />
          <Route path="/createblog" component={CreateBlog} />
        </div>
      </Router>
    );
  }
}

export default App;
