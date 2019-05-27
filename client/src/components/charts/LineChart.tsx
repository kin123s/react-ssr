import * as React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

import {
    IChartsProps
} from './types';

const dataSample = [
    {
        name: 'Page A',
        uv: 400,
        pv: 300,
        amt : 100
    }, {
        name: 'Page B',
        uv: 300,
        pv: 500,
        amt : 100
    }, {
        name: 'Page C',
        uv: 500,
        pv: 600,
        amt : 100
    },
    {
        name: 'Page D',
        uv: 500,
        pv: 600,
        amt : 100
    },
    {
        name: 'Page E',
        uv: 800,
        pv: 1600,
        amt : 100
    }
];

export default class App extends React.Component < IChartsProps,
any > {

    constructor(props : IChartsProps) {
        super(props);
        this.state = {
            division : this.props.division,
            contents: {
                id: this.props.contentsID,
                width: 0
            }
        }
        this.resizeEvent = this.resizeEvent.bind(this);
    }
    
    componentDidMount() {

        const contents : HTMLElement | null = document.getElementById(this.state.contents.id);
        if (contents) {
            this.setState({
                ...this.state,
                contents: {
                    ...this.state.contents,
                    width: ( contents.offsetWidth / this.state.division ) - 40
                }
            })
        }
        window.addEventListener("resize", this.resizeEvent);
    }

    resizeEvent() {

        const contents : HTMLElement | null = document.getElementById(this.state.contents.id);
        if (contents) {
            if ( contents.offsetWidth !== this.state.contents.width ){
                this.setState({
                    contents: {
                        ...this.state.contents,
                        width: ( contents.offsetWidth / this.state.division ) - 40
                    }
                })
            }
            
        }
    }

    public render() {

        const {
            contents 
        } = this.state;

        return (
            <div>
                <LineChart width={contents.width ? contents.width : 0} height={400} data={dataSample}>
                
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[ 0, 'dataMax']}/>
                    <Tooltip />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </div>
        );
    }
}
