import * as React from 'react';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

import {
    IChartsProps
} from './types';

// import styled from 'styled-components';

const dataSample = [
    {
        name: 'Page A',
        uv: 1590,
        pv: 800,
        amt: 1400
    }, {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506
    }, {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989
    }, {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228
    }, {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100
    }, {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700
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
                <ComposedChart width={contents.width ? contents.width : 0} height={400} data={dataSample}>
                    <CartesianGrid stroke="#f5f5f5"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8"/>
                    <Bar dataKey="pv" barSize={20} fill="#413ea0"/>
                    <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
                </ComposedChart>
            </div>
        );
    }
}
