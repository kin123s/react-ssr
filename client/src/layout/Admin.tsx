import * as React from 'react';


import styled from 'styled-components';

// layout
import {DefaultSideBar, DefaultContents, DefaultRow} from '@views/components/layout/Default';

// components
import {CustomButton} from '@views/components/button/CustomButton';

// route
import {Link} from 'react-router-dom';
import {RouteList, RouteRender} from '@views/config/routes/RouteAdmin';

const TopLayer = styled(DefaultSideBar)`
    height : 50px;
`;

const MenuLayer = styled(DefaultSideBar)`
    text-align : center;
    height : calc( 100vh - 50px );
    /* border-right : 1px solid #000; */
`;

const TopContents = styled(DefaultContents)`
    width : calc( 100% - 150px );
    height : 50px;
`;

const MainContents = styled(DefaultContents)`
    width : calc( 100% - 150px );
    height : calc( 100vh - 50px );
    background : #e5edf5;
`;

export interface IWithProps {}

export default class Admin extends React.Component < IWithProps,
any > {

    constructor(props : IWithProps) {
        super(props);

        this.MenuRender = this
            .MenuRender
            .bind(this);
    }
    
    MenuRender() {
        return ( RouteList.map((row, index) => {
            
            const LinkPath = process.env.ROUTE_PATH+row.url;
            // console.log(row.list);
            
            return (
                <Link key={index} to={LinkPath}>
                    <CustomButton width="130" bottom="10" background={row.background}>
                        {row.title}
                    </CustomButton>
                </Link>
            )
        }))
    }

    render() {

        return (
            <div>
                <DefaultRow>
                    <TopLayer>
                        <div>
                            title Icons
                        </div>
                    </TopLayer>
                    <TopContents>
                        TopContents
                    </TopContents>
                </DefaultRow>
                <DefaultRow>
                    <MenuLayer>
                        {this.MenuRender()}
                    </MenuLayer>
                    <MainContents>
                        <RouteRender/>
                    </MainContents>
                </DefaultRow>
            </div>

        );
    }
}