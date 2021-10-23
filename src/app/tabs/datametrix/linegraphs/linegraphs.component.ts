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
  selector: 'app-linegraphs',
  templateUrl: './linegraphs.component.html',
  styleUrls: ['./linegraphs.component.css'],
})
export class LinegraphsComponent implements OnInit {
  selected: any = { startDate: moment, endDate: moment };
  seriesData = [2, 4, 3, 8, 7, 12];
  tempData = [2, 5, 8, 4, 6, 5];
  temp = false;
  kebab = '../../assets/images/kebab.svg';

  timePeriod: any = ['Yearly', 'Monthly', 'Weekly'];

  chart: any;
  updateFlag = false;
  Highcharts = Highcharts;
  chartConstructor = 'chart';
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
    exporting: {
      enabled: true,
    },
    credits: {
      enabled: false,
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

  constructor(public fb: FormBuilder) {
    const self = this;

    this.chartCallback = (chart: any) => {
      self.chart = chart;
    };
  }
  timeForm = this.fb.group({
    name: [''],
  });
  ngOnInit() {}

  updateChart() {
    console.log('kii');
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

      // self.chartOptions.title = {
      //   text: "Updated title!"
      // };

      self.updateFlag = true;
    }, 2000);
  }
}
