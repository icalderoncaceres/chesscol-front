import React from 'react';
import {Route, Switch} from 'react-router';
import Presentation from './partials/Presentation.react';
import Training from './partials/Training.react';

import PrivateRoute from '../../containers/session/PrivateRoute.react';
class Content extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/"  component={Presentation} exact={true} />
                    <Route path="/training" component={Training} exact={true}/>
                </Switch>
            </div>
        );
    }
}

export default Content;