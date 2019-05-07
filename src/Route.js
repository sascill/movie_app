import React, {Component} from 'react';
import './App.css';
import { Link, Route  } from 'react-router-dom';
import View from './View';
import App from './App'

class App2 extends Component{
  render(){
    return(
      <div>
        <Route exact path="/" component={App} />
      </div>
    );
  }
}

export default App2;
