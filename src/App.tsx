import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} exact path="/" />
          <Route component={AboutPage} exact path="/about" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
