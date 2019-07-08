import React, { Component } from 'react';
import { Bar, Pie } from "react-chartjs-2"
import 'chart.piecelabel.js'
import "../styles.scss"

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barData: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor:
            "#03A9F4"

        }]
      },

      barDataOptions: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
          }]
        }
      },

      pieData: {
        labels: [],
        datasets: [{
          options: {
            labels: {
              userPointStyle: true
            }
          },
          data: [],
          backgroundColor: [
            '#DBECF8',
            '#2C82BE',
            '#32B88B'
          ]
        }]
      },

      pieDataOptions: {
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

    }
  }

  componentDidMount() {
    this.fetchBarData();
    this.fetchPieData();
  }

  fetchBarData() {
    const url = "https://private-afe609-testefront.apiary-mock.com/anual-result"
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(barChartObj => {
        const { labels, data } = barChartObj.reduce((acc, item) => {
          acc.labels.push(item.label);
          acc.data.push(item.value);
          return acc
        },
          {
            labels: [],
            data: []
          }
        )
        this.setState({
          barData: {
            labels: [...labels],
            datasets: [{
              data: [...data],
            }]
          },
        })
      })
  }

  fetchPieData() {
    const { body } = this.state;
    const url = "https://private-afe609-testefront.apiary-mock.com/anual-percentage"
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(pieChartObj => {
        console.log('pieChartObj', pieChartObj)
        const { labels, data } = pieChartObj.reduce((acc, item) => {
          acc.labels.push(item.label);
          acc.data.push(item.value);
          return acc
        },
          {
            labels: [],
            data: []
          }
        )
        this.setState({
          pieData: {
            labels: [...labels],
            datasets: [{
              data: [...data],
              options: {
                legend: {
                  display: true
                },
              }
            }]
          },
        })
      }
      )
  }


  render() {
    const { barData, barDataOptions, pieDataOptions } = this.state;
    return (
      <>
        <div className="container" id="page1">
          <h1 className="page_title">Page 1</h1>

          <div className="bar-chart-container">
            <div className="bar-chart">
              <h3 className="bar-chart-title">BARS CHART</h3>
              <Bar
                data={barData}
                options={barDataOptions}
              />
            </div>


            <div className="bar-chart">
              <h3 className="bar-chart-title">PIE CHART</h3>
              <Pie
                data={this.state.pieData}
                options={pieDataOptions}
              />
            </div>
          </div>



        </div>
      </>
    );
  }

}

export default Page1;
