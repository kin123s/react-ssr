import * as React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import RouteComponents from '@views/Route';

import styled from 'styled-components';

const AppLayout = styled.div `
  text-align: center;
`;

const AppHeader = styled.div `
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;


class App extends React.Component {

    constructor(props : any) {
        super(props);

    }

    public render() {
        return (
            <BrowserRouter>
                <AppLayout>
                    <AppHeader>

                        <h1 className="App-title">Welcome to5 React</h1>
                    </AppHeader>
                    <p className="App-intro">
                        To get started, edit
                        <code>src/App.tsx</code>
                        and save to reload.
                    </p>
                </AppLayout>
                <Route path="/test" component={RouteComponents} />
            </BrowserRouter>
        );
    }
}

export default App;
