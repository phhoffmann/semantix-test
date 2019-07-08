import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import "../styles.scss";

class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineData: {
        labels: [],
        datasets: []
      },
      lineOptions: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: true,
          labels: {
            boxWidth: 8,
            usePointStyle: true,
          }
        },
      },
    };
  }
  componentDidMount() {
    this.fetchLineData();
  }

  fetchLineData() {
    const lineOptions = {
      fill: false,
      lineTension: 0
    };

    const lineColors = ["#b55be3", "#444c97"];

    this.fetchChartData()
      .then(fetchedData => {
        let dayDataLength = 0;

        let lineData = this.state.lineData;

        Object.keys(fetchedData).forEach((key, index) => {
          let dayData = fetchedData[key];
          dayDataLength = dayData.length;

          lineData.datasets.push({
            label: key,
            data: [],
            borderColor: lineColors[index],
            ...lineOptions
          });

          dayData.forEach(hourData => {
            if (lineData.labels.length < dayDataLength) {
              lineData.labels.push(hourData.label);
            }
            lineData.datasets[index].data.push(hourData.value);
          });
        });

        this.setState(lineData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  fetchChartData() {
    return new Promise((resolve, reject) => {
      const url = "https://private-afe609-testefront.apiary-mock.com/time-data";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => {
          resolve(res.json());
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  render() {
    return (
      <>
        <div className="container" id="page2">
          <h1 className="page_title">Page 2</h1>
          
          <div className="bar-chart-container">
            <div className="line-chart">
                <h3 className="bar-chart-title">LINE CHART</h3>
                <Line data={this.state.lineData} options={this.state.lineOptions} />
            </div>
          </div>
        </div>

      </>
    );
  }

}

export default Page2;