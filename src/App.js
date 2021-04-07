import React from 'react'
import './App.scss';

import Header from './componentsBack/HeaderFront'
import Footer from './componentsFront/HeaderBack'

import { Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/home' ><Header /></Route>
    </div>
  );
}

export default App;
