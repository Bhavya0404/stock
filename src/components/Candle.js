import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
class Candle extends Component {
    
	render() {
        CanvasJS.addColorSet("dark",
                [//colorSet Array

                "black",
                ]);
		const options = {
			exportEnabled: true,
            backgroundColor: "#FFFF",
            theme: "light1",
            colorSet: "dark",
			title: {
				text: "Microsoft Corporation Stock Price - December 2017"
			},
			axisX: {
				valueFormatString: "D MMM"
			},
			axisY: {
				title: "Price",
				prefix: "$"
			},
			data: [{
				type: "candlestick",
				name: "Microsoft Corporation Price",
				showInLegend: true,
				yValueFormatString: "$##0.00",
				xValueType: "dateTime",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	componentDidMount(){
		var chart = this.chart;
		fetch('https://canvasjs.com/data/gallery/react/microsoft-stock-price.json')
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
				dataPoints.push({
					x: data[i].x,
					y: data[i].y
				});
			}
			chart.render();
		});
	}
}
export default Candle;              