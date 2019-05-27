import * as React from 'react';

import styled from 'styled-components';

const Contents = styled.div `
    margin : 10px;
`;

export interface IAppProps {
    id : string;
}

export default class App extends React.Component < IAppProps,
any > {

    constructor(props : IAppProps) {
        super(props)
        
    }

    public render() {
        return (
            <Contents id={this.props.id}>
                {this.props.children}
            </Contents>
        );
    }
}
