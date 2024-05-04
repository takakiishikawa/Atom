import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import ThrowContainer from '../components/throw/ThrowContainer';

class AppRoutes extends Component {
    render (){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={ThrowContainer} />
                </Switch>
            </HashRouter>
        )
    }
}

export default AppRoutes;
