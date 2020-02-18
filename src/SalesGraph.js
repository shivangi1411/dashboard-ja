import React , { Component } from 'react';
import './canvasjs.min'
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class SalesGraph extends Component {
	render() {
      
		const options = {
			animationEnabled: false,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Sale"
			},
			axisY: {
				title: "Rate",
				includeZero: false
			},
			axisX: {
				title: "Time",
				interval: 1
			},
			data: [{
                type: "line",
                color :'red',
                showInLegend: true, 
                legendText: "Cab",
				toolTipContent: "Week {x}: {y}",
				dataPoints: [
					{ label: "0.00", y: 12 },
					{ label: "2.00", y: 14 },
					{ label: "4.00", y: 50 },
					{ label: "6.00", y: 67 },
					{ label: "8.00", y: 37 },
					{ label: "10.00", y: 34 },
                    { label: "12.00", y: 26 },
                    { label: "14.00", y: 22 },
                    { label: "16.00", y: 68 },
                    { label: "18.00", y: 88 },
                    { label: "20.00", y: 28 },
                    { label: "22.00", y: 48 },
                    { label: "24.00", y: 58 }
				]
            },
            {
                type: "line",
                color :'green',
                showInLegend: true, 
                legendText: "Porter",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ label: "0.00", y: 10 },
					{ label: "2.00", y: 20 },
					{ label: "4.00", y: 30 },
					{ label: "6.00", y: 50 },
					{ label: "8.00", y: 74 },
					{ label: "10.00", y: 60 },
                    { label: "12.00", y: 58 },
                    { label: "14.00", y: 28 },
                    { label: "16.00", y: 38 },
                    { label: "18.00", y: 18 },
                    { label: "20.00", y: 38 },
                    { label: "22.00", y: 58 },
                    { label: "24.00", y: 78 }
				]
            },
            {
                type: "line",
                color :'blue',
                showInLegend: true, 
                legendText: "Xpress CI",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ label: "0.00", y: 20 },
					{ label: "2.00", y: 40 },
					{ label: "4.00", y: 50 },
					{ label: "6.00", y: 60 },
					{ label: "8.00", y: 34 },
					{ label: "10.00", y: 30 },
                    { label: "12.00", y: 28 },
                    { label: "14.00", y: 38 },
                    { label: "16.00", y: 48 },
                    { label: "18.00", y: 58 },
                    { label: "20.00", y: 28 },
                    { label: "22.00", y: 58 },
                    { label: "24.00", y: 18 }
				]
            }
        
        ]
		}
		return (
		<div style={{width:'700px'}}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default SalesGraph; 