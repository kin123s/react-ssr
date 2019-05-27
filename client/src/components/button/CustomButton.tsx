import * as React from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components';

const CustomBtn = styled( Button )`
    color : #000;
    background : ${ props => props.background ? props.background : "#FFF" };
    width : ${ props => props.width ? `${props.width}px` : "100px"};
    height : ${ props => props.height ? `${props.height}px` : "40px"};

    margin-top : ${ props => props.top ? `${props.top}px` : "0px"};
    margin-left : ${ props => props.left ? `${props.left}px` : "0px"};
    margin-right : ${ props => props.right ? `${props.right}px` : "0px"};
    margin-bottom : ${ props => props.bottom ? `${props.bottom}px` : "0px"};

    
`;

export interface ICustomButtonProps {
    contents ?: String;
    color ?: String;
    children ?: React.ReactNode,
    
    width ?: String;
    height ?: String;

    background ?: String;

    top ?: String,
    left ?: String,
    right ?: String,
    bottom ?: String,
}

export function CustomButton(props : ICustomButtonProps = {} ) {
    return (
        <CustomBtn 
            {...props}
        >
            {props.children}
        </CustomBtn>
    );
}
