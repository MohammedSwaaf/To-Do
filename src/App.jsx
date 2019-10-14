import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import ToDo from './Routes/ToDo';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <CustomNav /> */}
          <Route path="/" component={ToDo} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
