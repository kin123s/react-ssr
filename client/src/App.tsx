import * as React from 'react';

import Routes from '@views/Routes';

class App extends React.Component {

    constructor(props : any) {
        super(props);

    }

    public render() {
        console.log('App Components');
        return (
            <div>
              <Routes/>
            </div>
        );
    }
}

export default App;
