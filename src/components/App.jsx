import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import HelloWorld from './HelloWorld';
import JsxSample from './JsxSample';
import WelcomeProps from './WelcomeProps';
import Clock from './Clock';
import Statefull from './Statefull';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld />
        <hr/>
        <JsxSample />
        <hr/>
        <WelcomeProps name="Player" id={1} />
        <WelcomeProps name="Player" id={2} />
        <WelcomeProps name="Bot" id={1} />
        <hr/>
        <Clock />
        <hr/>
        <Statefull />
        <hr/>
      </div>
    );
  }
}

export default App;
