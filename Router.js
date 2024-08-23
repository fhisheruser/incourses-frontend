// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import InstanceList from './InstanceList';
import InstanceDetail from './InstanceDetail';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CourseList} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/instances/:year/:semester" exact component={InstanceList} />
        <Route path="/instances/:year/:semester/:course_id" component={InstanceDetail} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
