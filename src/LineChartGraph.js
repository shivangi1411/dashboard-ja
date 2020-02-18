import React , { Component } from 'react';
import './canvasjs.min'
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class LineChartGraph extends Component {
	render() {
      
		const options = {
			animationEnabled: false,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Total Revenue"
			},
			axisY: {
				title: "Rate",
				includeZero: false
			 	
			},
			axisX: {
				title: "Day of Week",
				interval: 1
			},
			data: [{
                type: "line",
                color :'red',
                showInLegend: true, 
                legendText: "Cab",
				toolTipContent: "Week {x}: {y}",
				dataPoints: [
					{ label:"Mon", y: 20 },
					{ label: "Tue", y: 40 },
					{ label: "Wed", y: 50 },
					{ label: "Thu", y: 60 },
					{ label: "Fri", y: 34 },
					{ label: "Sat", y: 30 },
					{ label: "Sun", y: 28 }
				]
            },
            {
                type: "line",
                color :'green',
                showInLegend: true, 
                legendText: "Porter",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ label: "Mon", y: 64 },
					{ label: "Tue", y: 61 },
					{ label: "Wed", y: 64 },
					{ label: "Thu", y: 62 },
					{ label: "Fri", y: 64 },
					{ label: "Sat", y: 60 },
					{ label: "Sun", y: 58 }
				]
            },
            {
                type: "line",
                color :'blue',
                showInLegend: true, 
                legendText: "Xpress CI",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: [
					{ label: "Mon", y: 65 },
					{ label: "Tue", y: 10 },
					{ label: "Wed", y: 20 },
					{ label: "Thu", y: 52 },
					{ label: "Fri", y: 30 },
					{ label: "Sat", y: 70 },
					{ label: "Sun", y: 68 }
				]
            }
        
        ]
		}
		return (
		<div style={{width:'500px'}}>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default LineChartGraph; 