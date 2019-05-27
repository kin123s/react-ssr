import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

import WithLayout from '@views/layout/With';
import Login from '@views/pages/member/Login';



export interface IMemberProps {}

export default class Member extends React.Component < IMemberProps,
any > {

    constructor( props : IMemberProps ){
      super(props);

    }
    
    public render() {
        return (
            <div>
                <WithLayout>
                    <Switch>
                        <Route path="/member" component={Login}/> {/* <Route path="/login" component={Member}/> */}
                        <Route path="/member/login" component={Login}/> {/* <Route path="/login" component={Member}/> */}

                    </Switch>
                </WithLayout>
            </div>
        );
    }
}
