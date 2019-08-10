import React from 'react';
import Dashboard from './components/Dashboard';
import Updateinfo from './components/Updateinfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

const App = () => {

  return(
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/update" component={Updateinfo} />  
          </Switch>
        </div>  
      </Router>  
    );
}

export default App;
