import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskManager />} />   {/* default page */}
          <Route path="api" element={<ApiData />} />  {/* /api page */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
