import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { components } from './components/componentList';

import { OptionRouter } from './components/Main/optionRouter'
import { Main } from './components/Main'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        {components.map((component) => <OptionRouter exact path={component['path']} component={component['component']} />)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;