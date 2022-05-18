import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Form from './page/Form';
import Processlist from './page/Processlist';
const App = () => {
  return (
    <div>
      <>
        <Navbar/>
        <Switch>
          <Route  exact  path='/' component={Form} />
          <Route exact path='/process' component={Processlist} />
        </Switch>
      </>
    </div>
  );
};

export default App;
