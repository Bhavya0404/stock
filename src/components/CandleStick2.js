import React, { Component } from "react";
// import CanvasJSReact from './canvasjs.stock.react';
import CanvasJSReact from "../assets/canvas/canvasjs.stock.react";
import axios from "axios";
import { TimeWise } from "../urls";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class CandleStick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints1: [],
      dataPoints2: [],
      dataPoints3: [],
      isLoaded: false,
    };
  }

  render() {
    const options = {
      theme: "light2",
      title: {
        text: "React StockChart with Date-Time Axis",
      },
      subtitles: [
        {
          text: "Price-Volume Trend",
        },
      ],
      charts: [
        {
          axisX: {
            lineThickness: 5,
            tickLength: 0,
            labelFormatter: function (e) {
              return "";
            },
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
              labelFormatter: function (e) {
                return "";
              },
            },
          },
          axisY: {
            title: "Litecoin Price",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Price (in USD)",
              yValueFormatString: "$#,###.##",
              type: "candlestick",
              dataPoints: this.state.dataPoints1,
            },
          ],
        },
        {
          height: 100,
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
          },
          axisY: {
            title: "Volume",
            prefix: "$",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Volume",
              yValueFormatString: "$#,###.##",
              type: "column",
              dataPoints: this.state.dataPoints2,
            },
          ],
        },
      ],
      navigator: {
        data: [
          {
            dataPoints: this.state.dataPoints3,
          },
        ],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01"),
        },
      },
    };
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto",
    };

    const componentDidMount = async (data) => {
      const data1 = await axios.get(TimeWise("IBM"));
      console.log(data1.data["Monthly Adjusted Time Series"]);
      const neww = data1.data["Monthly Adjusted Time Series"];
      let sampleObjectKeys = Object.keys(neww);
      console.log("number of keys", sampleObjectKeys.length);
      const len = sampleObjectKeys.length;
      var dps1 = [],
        dps2 = [],
        dps3 = [];
      //   for (var i = 0; i < len; i++) {
      //     dps1.push({
      //       x: new Date(data[i].date),
      //       y: [
      //         Number(data[i].open),
      //         Number(data[i].high),
      //         Number(data[i].low),
      //         Number(data[i].close),
      //       ],
      //     });
      //     dps2.push({ x: new Date(data[i].date), y: Number(data[i].volume_usd) });
      //     dps3.push({ x: new Date(data[i].date), y: Number(data[i].close) });
      //   }
      //   this.setState({
      //     isLoaded: true,
      //     dataPoints1: dps1,
      //     dataPoints2: dps2,
      //     dataPoints3: dps3,
      //   });

      for (var key in neww) {
        console.log(neww[key]["1. open"]);
        dps1.push({
          x: new Date(key),
          y: [
            Number(neww[key]["1. open"]),
            Number(neww[key]["2. high"]),
            Number(neww[key]["3. low"]),
            Number(neww[key]["4. close"]),
          ],
        });
        dps2.push({ x: new Date(key), y: Number(neww[key]["5. volume"]) });
        dps3.push({ x: new Date(key), y: Number(neww[key]["4. close"]) });
        this.setState({
          isLoaded: true,
          dataPoints1: dps1,
          dataPoints2: dps2,
          dataPoints3: dps3,
        });
      }
    };
    componentDidMount();

    return (
      <div>
        <div>
          {
            // Reference: https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
            this.state.isLoaded && (
              <CanvasJSStockChart
                containerProps={containerProps}
                options={options}
                /* onRef = {ref => this.chart = ref} */
              />
            )
          }
        </div>
      </div>
    );
  }
}
export default CandleStick;
