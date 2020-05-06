import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './styling/globalStyles';
import Auth from './pages/auth/auth';
import Dashboard from './pages/dashboard/dashboard';

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route exact path='/' component={Auth} />
                    <Route exact path='/dashboard' component={Dashboard} />
                </Switch>
            </Router>
        </React.Fragment>

    )
}

export default App