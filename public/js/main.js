/* global Chart, coreui */

/**
 * --------------------------------------------------------------------------
 * CoreUI Boostrap Admin Template (v4.2.1): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */
// Disable the on-canvas tooltip
Chart.defaults.pointHitDetectionRadius = 1;
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.tooltip.mode = 'index';
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips;
Chart.defaults.defaultFontColor = '#646470';

const random = (min, max) => // eslint-disable-next-line no-mixed-operators
Math.floor(Math.random() * (max - min + 1) + min); // eslint-disable-next-line no-unused-vars

const fs = require("fs");
const readline = require("readline");
const stream = fs.createReadStream("./output.csv");
const rl = readline.createInterface({ input: stream });
let data = [];
 
rl.on("line", (row) => {
    data.push(row.split(","));
});
 
rl.on("close", () => {
    console.log(data);
});



const cardChart1 = new Chart(document.getElementById('card-chart1'), {

  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(250, 94, 152)",
        borderColor: "rgb(250, 94, 152)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#646470",
        data: [30, 20, 12, 9, 10, 15, 17, 28, 24]
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgb(250, 94, 152)",
        borderColor: "rgb(250, 94, 152)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [10, 12, 28, 29, 7, 5, 12, 25, 30]
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: true
        },
        ticks: {
          display: true
        }
      },
      y: {
        min: 5,
        max: 30,
        display: true,
        grid: {
          display: true,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true
        }
      }
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4
      },
      // point: {
      //   radius: 4,
      //   hitRadius: 10,
      //   hoverRadius: 4
      // }
    }
  }
})

const cardChart2 = new Chart(document.getElementById('card-chart2'), {
  type: "bar",
  data: {
    labels: ['Strawberry', 'Vanilla', 'Lemon', 'Chocolate', 'Halva'],
    datasets: [
      {
        backgroundColor: 'rgb(250, 94, 152)',
        data: [24, 5, 12, 17, 10, 8, 19, 25, 20],
      },
    ],
  },
  labels:"months",
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false
        },
        ticks: {
          display: true
        }
      },
      y: {
        grid: {
          display: true,
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          display: true
        }
      }
    }
  }
})


// const cardChart1 = new Chart(document.getElementById('card-chart1'), {
//   type: 'line',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'transparent',
//       borderColor: 'rgba(255,255,255,.55)',
//       pointBackgroundColor: coreui.Utils.getStyle('--cui-primary'),
//       data: [65, 59, 84, 84, 51, 55, 40]
//     }]
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           display: false
//         }
//       },
//       y: {
//         min: 30,
//         max: 89,
//         display: false,
//         grid: {
//           display: false
//         },
//         ticks: {
//           display: false
//         }
//       }
//     },
//     elements: {
//       line: {
//         borderWidth: 1,
//         tension: 0.4
//       },
//       point: {
//         radius: 4,
//         hitRadius: 10,
//         hoverRadius: 4
//       }
//     }
//   }
// }); // eslint-disable-next-line no-unused-vars

// const cardChart2 = new Chart(document.getElementById('card-chart2'), {
//   type: 'line',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'transparent',
//       borderColor: 'rgba(255,255,255,.55)',
//       pointBackgroundColor: coreui.Utils.getStyle('--cui-info'),
//       data: [1, 18, 9, 17, 34, 22, 11]
//     }]
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           display: false
//         }
//       },
//       y: {
//         min: -9,
//         max: 39,
//         display: false,
//         grid: {
//           display: false
//         },
//         ticks: {
//           display: false
//         }
//       }
//     },
//     elements: {
//       line: {
//         borderWidth: 1
//       },
//       point: {
//         radius: 4,
//         hitRadius: 10,
//         hoverRadius: 4
//       }
//     }
//   }
// }); // eslint-disable-next-line no-unused-vars

// const cardChart3 = new Chart(document.getElementById('card-chart3'), {
//   type: 'line',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.2)',
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [78, 81, 80, 45, 34, 12, 40],
//       fill: true
//     }]
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         display: false
//       },
//       y: {
//         display: false
//       }
//     },
//     elements: {
//       line: {
//         borderWidth: 2,
//         tension: 0.4
//       },
//       point: {
//         radius: 0,
//         hitRadius: 10,
//         hoverRadius: 4
//       }
//     }
//   }
// }); // eslint-disable-next-line no-unused-vars

// const cardChart4 = new Chart(document.getElementById('card-chart4'), {
//   type: 'bar',
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,255,255,.2)',
//       borderColor: 'rgba(255,255,255,.55)',
//       data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
//       barPercentage: 0.6
//     }]
//   },
//   options: {
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false
//       }
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//           drawTicks: false
//         },
//         ticks: {
//           display: false
//         }
//       },
//       y: {
//         grid: {
//           display: false,
//           drawBorder: false,
//           drawTicks: false
//         },
//         ticks: {
//           display: false
//         }
//       }
//     }
//   }
// }); // eslint-disable-next-line no-unused-vars



const mainChart = new Chart(document.getElementById('main-chart'), {
  type: 'pie',

  data: {
    labels: [
      'Strawberry',
      'Vanilla',
      'Lemon',
      'Chocolate',
      'Halvah'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100, 50, 30],
      backgroundColor: [
        'rgb(255, 99, 132)',
        '#fff',
        '#f5f120f1',
        '#784821',
        '#f0d583'
      ],
      pointHoverBackgroundColor:'#e55353',
      hoverOffset: 4
    }]
  },
  options: {
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  },
});
//# sourceMappingURL=main.js.map