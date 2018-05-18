import { Router, Route , Switch, Link,NavLink } from 'react-router-dom';
import React from 'react';
import AddExpensePage from'../components/AddExpensePage';
import EditExpansePage from'../components/EditExpansePage';
import ExpenseDashboardPage from'../components/ExpenseDashboardPage';
import HelpPage from'../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from'../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();

const AppRouter = () =>(
    <Router history = {history} >
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
            <PrivateRoute path="/create" component={AddExpensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExpansePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</Router>
);

export default AppRouter;

//Route component give acssess to history(move pages etc) automaticly,
//but in app js we use auth to move pages(login logout dashboard) and its not a route component, so we install history package manually and import it

//parent of routers - browserrouter includes history , router not , and we give it a history manually