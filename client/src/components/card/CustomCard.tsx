import * as React from 'react';
import {Card} from 'reactstrap';

import styled from 'styled-components';

const CustomCard = styled(Card)`

`;

export interface IAppProps {
    children ?: React.ReactNode,
}

export default ( props : IAppProps ) => {
    
    return (
        <CustomCard {...props}>
            {props.children}
        </CustomCard>
    );

}