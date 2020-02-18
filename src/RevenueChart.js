import React, { Component } from 'react';
import LineChart from 'react-linechart';

class RevenueChart extends Component {
    render() {
        const data = [
            {									
                color: "steelblue", 
                points: [{x: 1, y: 2}, {x: 3, y: 5}, {x: 7, y: -3}] 
            }
        ];
        return (
            <div>
                <div className="App">
                    <h1>My First LineChart</h1>
                    <LineChart
                        data={data}
                    />
                </div>				
            </div>
        );
    }
}

export default RevenueChart;
