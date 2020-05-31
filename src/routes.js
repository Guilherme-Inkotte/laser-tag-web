import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import Match from './pages/Match';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route path="/match" exact component={Match} />
        </Switch>
    )
}