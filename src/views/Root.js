import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import StartView from './StartView';
import CollectionsView from './CollectionsView';
import PracticeView from './PracticeView';
import EditorsVies from './EditorsView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={StartView} />
        <Route exact path="/collections" component={CollectionsView} />
        <Route path="/practice" component={PracticeView} />
        <Route path="/edit" component={EditorsVies} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
