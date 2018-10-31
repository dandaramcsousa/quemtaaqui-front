import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Login/>
        <Footer/>
      </div>
    );
  }
}

export default App;
