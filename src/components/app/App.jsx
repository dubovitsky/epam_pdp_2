import React from 'react';
import MovieDetails from 'components/details';
import Home from 'components/home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import './style.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
        </Router>
    )
}

export default App;