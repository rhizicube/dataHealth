import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { FormBuilder } from '@angular/forms';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsExporting from 'highcharts/modules/exporting';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

//  const Exporting = require('highcharts/modules/exporting');
//  Exporting(Highcharts);
// HighchartsMore(Highcharts);
// HighchartsExporting(Highcharts);

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css'],
})
export class LinegraphComponent implements OnInit {
  selected: any = { startDate: moment, endDate: moment };
  selectedTotal: any = { startDate: moment, endDate: moment };
  seriesData = [2, 4, 3, 8, 7, 12];
  tempData = [2, 5, 8, 4, 6, 5];
  temp = false;
  kebab = '../../assets/images/kebab.svg';

  timePeriod: any = ['Yearly', 'Monthly', 'Weekly'];

  chart: any;
  chart2: any;
  updateFlag = false;
  Highcharts = Highcharts;
  // chartConstructor = 'chart';
  chartCallback: any;
  
  chartOptions: any = {
    title: {
      text: null,
    },
    series: [
      {
        data: [1, 2, 3, 6, 9, 8],
      },
    ],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
    xAxis: {
      title: {
        text: 'Date',
      },
      categories: ['Jan20', 'Feb20', 'Mar20', 'Apr20', 'May20', 'Jun20'],
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Data',
      },
    },
  };

  // right side chart
  // chartOptionsTotal: any = {
  //   title: {
  //     text: null,
  //   },
  //   series: [
  //     {
  //       data: [1, 2, 3, 6, 9, 8],
  //     },
  //   ],
  //   credits: {
  //     enabled: false,
  //   },
  //   exporting: {
  //     enabled: true,
  //   },
  //   xAxis: {
  //     title: {
  //       text: 'Date',
  //     },
  //     categories: ['Jan20', 'Feb20', 'Mar20', 'Apr20', 'May20', 'Jun20'],
  //   },
  //   yAxis: {
  //     allowDecimals: false,
  //     title: {
  //       text: 'Data',
  //     },
  //   },
  // };

  constructor(public fb: FormBuilder) {}
  timeForm = this.fb.group({
    name: [''],
  });
  ngOnInit() {
    // Highcharts.chart('container', this.chartOptions);
    // Highcharts.chart('containerSc', this.chartOptionsTotal);
  }
  updateChart() {
    console.log('working');
    this.chartCallback = (chart: any) => {
      self.chart = chart;
    };
    console.log('hii');
    const self = this,
      chart = this.chart;

    chart.showLoading();
    setTimeout(() => {
      chart.hideLoading();
      let rend = Math.floor(Math.random() * 10 + 1);
      console.log(rend);
      let temp = [10, 25, 20, 6];
      temp.push(rend);
      let rend1 = Math.floor(Math.random() * 10 + 1);
      temp.push(rend1);
      self.chartOptions.series = [
        {
          data: temp,
        },
      ];

      self.updateFlag = true;
    }, 2000);
  }

  // updateChartTotal() {
  //   this.chartCallback = (chart: any) => {
  //     self.chart2 = chart;
  //   };
  //   console.log('kii');
  //   const self = this,
  //     chart2 = this.chart2;

  //   chart2.showLoading();
  //   setTimeout(() => {
  //     chart2.hideLoading();
  //     let rendom = Math.floor(Math.random() * 10 + 1);
  //     console.log(rendom);
  //     let tempSer = [10, 25, 20, 6];
  //     tempSer.push(rendom);
  //     let rend1 = Math.floor(Math.random() * 10 + 1);
  //     tempSer.push(rend1);
  //     self.chartOptionsTotal.series = [
  //       {
  //         data: tempSer,
  //       },
  //     ];

  //     self.updateFlag = true;
  //   }, 2000);
  // }
}
