import React from "react";
import './App.css';
import Button from "./components/Buttons";
import Calculator from './components/Calculator';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function App() {

  return (
      <Router>
        <div className="App">
          <nav className="navbar">
              <Link to="/dodawanie"><Button text="Dodawanie"/></Link>
              <Link to="/odejmowanie" ><Button text="Odejmowanie"/></Link>
              <Link to="/mnozenie"><Button text="Mnożenie"/></Link>
              <Link to="/dzielenie"><Button text="Dzielenie"/></Link>
          </nav>
        </div>
        
        <Switch>
        <Route path="/dodawanie">
          <Calculator mathSign="+"/>
        </Route>
        <Route path="/odejmowanie">
          <Calculator mathSign="-"/>
        </Route>
        <Route path="/mnozenie">
          <Calculator mathSign="*"/>
        </Route>
        <Route path="/dzielenie">
          <Calculator mathSign="/"/>
        </Route>
      </Switch>
      </Router> 
      );
}

export default App;