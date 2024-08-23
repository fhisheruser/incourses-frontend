import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetail from './CourseDetail';
import InstanceList from './InstanceList';
import InstanceDetail from './InstanceDetail';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/instances/:year/:semester" element={<InstanceList />} />
        <Route path="/instances/:year/:semester/:course_id" element={<InstanceDetail />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
