import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './globalStyles';
import Auth from './pages/auth/auth';

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyles />
            <Router>
                <Switch>
                    <Route path='/' component={Auth} />
                    {/* <Route path='/dashboard' component={Dashboard} /> */}
                </Switch>
            </Router>
        </React.Fragment>

    )
}

export default App