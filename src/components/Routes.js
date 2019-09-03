import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import ManageJobsPage from './pages/ManageJobsPage';
import ManageTasksPage from './pages/ManageTasksPage';
import NotFoundPage from './pages/NotFoundPage';
import BrowseJobsPage from './pages/BrowseJobsPage';
import PostJobPage from './pages/PostJobPage';
import ManageBiddersPage from './pages/ManageBiddersPage';

class Routes extends React.Component {
  render() {
    return (
     
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/browsejobs' component={BrowseJobsPage} />
        <Route path='/postjob' component={PostJobPage} />
        <Route path='/managejobs' component={ManageJobsPage} />
        <Route path='/managetasks' component={ManageTasksPage} />
        <Route path='/managebidders' component={ManageBiddersPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
     
    );
  }
}

export default Routes;
