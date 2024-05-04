import React, {Component} from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import ThrowContainer from '../pages/throw/ThrowContainer';
import IssuesContainer from '../pages/issues/IssuesContainer';
import DrawContainer from '../pages/draw/DrawContainer';
import ProfileContainer from '../pages/profile/ProfileContainer';
import './global.scss';

class AppRoutes extends Component {
    render (){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={ThrowContainer} />
                    <Route path='/issues' component={IssuesContainer} />
                    <Route path='/draw' component={DrawContainer} />
                    <Route path='/profile' component={ProfileContainer} />
                </Switch>
            </HashRouter>
        )
    }
}

export default AppRoutes;
