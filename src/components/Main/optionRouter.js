
import React from 'react';
import { Route } from 'react-router-dom';

import { Main } from '.';

export const OptionRouter = ({path, component}) => {
  return <Route path={path} component={() => <Main> {component}</Main>}/>
}