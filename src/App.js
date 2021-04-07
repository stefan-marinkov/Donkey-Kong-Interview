import React from 'react'
import './App.scss';

import Header from './components/Header'
import Footer from './components/Footer'

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to='/home'>Home</Link>
      <Link to='/footer'>Page</Link>
      <Route path='/home' ><Header /></Route>
      <Route path='/footer' ><Footer /></Route>
    </div>
  );
}

export default App;
