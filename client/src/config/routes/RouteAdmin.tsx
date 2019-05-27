import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Dashboard from '@views/pages/admin/Dashboard';
import Registration from '@views/pages/admin/Registration';
import Meesager from '@views/pages/admin/Meesager';


export const RouteList = [
    {
        title: "dashboards",
        type: "button",
        url: "admin/dashboards",
        background: "#1a6c00",
        compoent: Dashboard
    }, {
        title: "registration",
        type: "button",
        url: "admin/registration",
        background: "#1a6c00",
        compoent: Registration
    }, {
        title: "messager",
        type: "button",
        url: "admin/messager",
        background: "#1a6c00",
        compoent: Meesager
    }, {
        title: "dropbox",
        url: "",
        type: "dropbox",
        background: "#1a6c00"
    }
];

// function SetRouter() {

//     return (RouteList.map((row, index) => {

//         if (row.type == "dropbox") {
//             return null;
//         }

//         return (
//             <div key={`AdminRoute${index}`}>
//                 <Route path={`/${row.url}`} component={row.compoent}/>
//             </div>
//         )
//     }))
// }

export class RouteRender extends React.Component<any,any> {

    constructor(props : any) {
        super(props)
        this.SetRouter = this.SetRouter.bind(this);
    }
    
    SetRouter() {

        return (RouteList.map((row, index) => {
    
            if (row.type == "dropbox") {
                return null;
            }
    
            return (
                <Route path={`/${row.url}`} component={row.compoent} key={`AdminRoute${index}`}/>
            )
        }))
    }

    render() {
        return (
            <Switch>
                {/* <Route exact={true} path="/admin" component={Dashboard}/>  */}
                {/* <Route path="/login" component={Member}/> */}

                {this.SetRouter()}

                <Redirect to="/admin/dashboards"/>
            </Switch>
        )
    }
}
