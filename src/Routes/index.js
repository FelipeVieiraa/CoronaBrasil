import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Default from '../Pages/Default';
import Srag from '../Pages/Srag';
import About from '../Pages/AboutThis';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Default}/>
        <Route path="/srag" component={Srag}/>
        <Route path="/sobre" component={About}/>
      </Switch>
    </BrowserRouter>
  );
  
}