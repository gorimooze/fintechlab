import {AfterViewInit, Component} from '@angular/core';
import {CategoryScale, Chart, LinearScale} from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
  chart!: Chart;

  ngAfterViewInit() {
    Chart.register(LinearScale, CategoryScale);

    this.chart = new Chart('viewsChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Febr', 'Mar', 'Apr'],
        datasets: [{
          label: "",
          backgroundColor: '#BFD0FF',
          borderColor: '#2962FF',
          data: [2.5, 1.4, 6, 4],
          fill: true,
          tension: 0.5,
          borderWidth: 8,
          pointRadius: 0
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            },
            ticks: {
              display: false,
              stepSize: 10,
            }
          },
          x: {
            beginAtZero: true,
            grid: {
              display: false
            }
          }

        }
      }

    });
  }
}
