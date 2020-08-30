import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import HomeView from './HomeView';
import PracticeView from './PracticeView';
import EditorsVies from './EditorsView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/practice" component={PracticeView} />
        <Route exact path="/editor" component={EditorsVies} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
