import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import router from './router';
import $ from 'jquery';

class App extends Component {
  
  render() {

    return (
      <div className="app">
        <Nav /> 
        {router}
        <Footer />
      </div>
    );
  }
}

export default App;
