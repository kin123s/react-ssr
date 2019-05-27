import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Member from '@views/pages/member/Member';
import Admin from '@views/layout/Admin';

export interface IRoutesProps {}

export default class Routes extends React.Component < IRoutesProps,
any > {

    public render() {
        return (
            <div>
                <Switch>
                    <Route path="/member" component={Member}/>
                    <Route path="/Admin" component={Admin}/> 
                    <Redirect to="/member"/>
                </Switch>

            </div>
        );
    }
}
